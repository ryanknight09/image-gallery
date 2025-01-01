import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Button } from './button';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from './form';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from './command';

export type ComboBoxOption = { value: string; label: string };

interface Props {
  label: string;
  value: string;
  description?: string;
  options: ComboBoxOption[];
  onChange: (value: string) => void;
}

export function ComboBox({
  label,
  value = '',
  options,
  description,
  onChange,
}: Props) {
  return (
    <FormItem className='flex flex-col'>
      <FormLabel>{label}</FormLabel>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant='outline'
              role='combobox'
              className={cn(
                'w-full justify-between',
                !value && 'text-muted-foreground',
              )}
            >
              {value || `Select ${label}...`}
              <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder={`Search ${label}...`} className='h-9' />
            <CommandEmpty>No {label} found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  value={option.label}
                  key={option.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                  }}
                >
                  {option.label}
                  <CheckIcon
                    className={cn(
                      'ml-auto h-4 w-4',
                      option.value === value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
}
