"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { type InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  description?: string;
  inputClassName?: string;
}

export const FormInput = ({
  label,
  name,
  description,
  className,
  inputClassName,
  ...rest
}: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      defaultValue={""}
      render={({ field }) => (
        <FormItem className={cn(rest.type, className)}>
          {label ? <FormLabel>{label}</FormLabel> : null}
          <FormControl>
            <Input className={inputClassName} {...field} {...rest} />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
