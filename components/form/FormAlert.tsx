import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { type FormState } from '@/types/FormState';

interface Props extends Omit<FormState, 'issues' | 'fields'> {
  title?: string;
}

export const FormAlert = ({ isError, message, title }: Props) => {
  return (
    <Alert variant={isError ? 'destructive' : 'success'}>
      <AlertCircle className='h-4 w-4' />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
};
