'use client';

import { Button } from '@/components/ui/button';
import { ReloadIcon } from '@radix-ui/react-icons';

interface Props {
  label?: string;
  isPending: boolean;
}

export const FormStatusButton = ({ label = 'Save', isPending }: Props) => (
  <Button
    disabled={isPending}
    type='submit'
    size={isPending ? 'icon' : 'default'}
  >
    {isPending ? <ReloadIcon className='h-4 w-4 animate-spin' /> : label}
  </Button>
);
