'use client';

import { useFormContext } from 'react-hook-form';
import { FormField } from '@/components/ui/form';
import { type ComboBoxOption, ComboBox } from '@/components/ui/comboBox';

interface Props {
  name: string;
  label: string;
  description?: string;
  options: ComboBoxOption[];
}

export function FormComboBox({ name, ...rest }: Props) {
  const { control } = useFormContext();

  return (  
    <FormField
      control={control}
      name={name}
      render={({ field }) => <ComboBox {...rest} {...field} />}
    />
  );
}
