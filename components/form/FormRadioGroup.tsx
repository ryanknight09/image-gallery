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

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

interface Props {
  options: { value: string; description: string }[];
  label: string;
  name: string;
  description?: string;
  className?: string;
}

export const FormRadioGroup = ({
  options,
  description,
  className,
  ...rest
}: Props) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem className={cn("space-y-3", className)}>
          <FormLabel>Notify me about...</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              //   defaultValue={field.value}
              className="flex flex-col space-y-1"
              {...field}
              {...rest}
            >
              {options.map((option) => (
                <FormItem
                  key={option.value}
                  className="flex items-center space-x-3 space-y-0"
                >
                  <FormControl>
                    <RadioGroupItem value={option.value} />
                  </FormControl>
                  <FormLabel className="font-normal">
                    {option.description}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
