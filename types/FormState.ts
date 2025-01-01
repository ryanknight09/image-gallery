export type FormState<T = unknown> = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  isError?: boolean;
  isSuccess?: boolean;
  data?: T;
};
