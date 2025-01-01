import { type FormState } from "@/types/FormState";
import { type SafeParseError } from "zod";

interface Props<T> {
  formData: {
    [k: string]: FormDataEntryValue;
  };
  parsed: SafeParseError<T>;
  message?: string;
}

export const handleInvalidForm = <T>({
  formData,
  parsed,
  message = "Invalid form data",
}: Props<T>): FormState => {
  const fields: Record<string, string> = {};

  for (const key of Object.keys(formData)) {
    fields[key] = formData[key].toString();
  }

  return {
    message,
    fields,
    issues: parsed.error.issues.map((issue) => issue.message),
    isError: true,
  };
};
