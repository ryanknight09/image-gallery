import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

export const exampleSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export type ExampleFormValues = z.infer<typeof exampleSchema>;

export const exampleFormResolver = zodResolver(exampleSchema);
