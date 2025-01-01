import { type FormState } from "@/types/FormState";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { type z, type ZodType } from "zod";

interface Props<T extends ZodType<any, any, any> = ZodType<any, any, any>> {
  action: (prevState: FormState, data: FormData) => Promise<FormState>;
  schema: T;
  defaultFormValues: z.infer<T>;
  onFormSuccess?: (state: FormState) => void;
  onFormError?: (state: FormState) => void;
  onCompleted?: (state: FormState) => void;
}

export const useActionLifeCycle = <T extends ZodType<any, any, any>>({
  action,
  schema,
  defaultFormValues,
  onFormSuccess = () => null,
  onFormError = () => null,
  onCompleted = () => null,
}: Props<T>) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, actionFn, isPending] = useActionState(action, {
    isError: false,
    message: "",
  });

  const form = useForm<z.output<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...defaultFormValues,
      ...(state?.fields ?? {}),
    },
  });

  useEffect(() => {
    if (state.isError) {
      onFormError(state);
    }

    if (state.message === "success") {
      onFormSuccess(state);
    }

    onCompleted(state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  // Need start transition so that the async context can be picked up by useActionState.
  // without it you will not get the isPending indication amongst other errors.
  const runAction = () =>
    startTransition(() => {
      actionFn(new FormData(formRef.current!));
    });

  return { runAction, isPending, state, form, formRef };
};
