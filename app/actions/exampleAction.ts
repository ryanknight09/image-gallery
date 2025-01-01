"use server";

import { exampleSchema } from "@/schemas/exampleSchema";
import { type FormState } from "@/types/FormState";
import { handleInvalidForm } from "@/utils/invalidFormValues";

export async function exampleAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = exampleSchema.safeParse(formData);

  if (!parsed.success) {
    return handleInvalidForm({ formData, parsed });
  }

  try {
    console.log({ parsed });
  } catch (error) {
    if (error instanceof Error) {
      return {
        message: error.message,
        isError: true,
        isSuccess: false,
      };
    }
  }

  return {
    message: "success",
    isError: false,
    isSuccess: true,
  };
}
