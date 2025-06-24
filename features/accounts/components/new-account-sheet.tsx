import { z } from 'zod';
import { insertAccountSchema } from '@/db/schema';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';
import { AccountForm } from '@/features/accounts/components/account-form';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useCreateAccount } from '../api/use-create-account';

const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.infer<typeof formSchema>;

export const NewAccountSheet = () => {
  const { isOpen, onClose } = useNewAccount();

  const mutation = useCreateAccount();

  const onSubmit = (values: FormValues) => {
    mutation.mutate(values, {
      onSuccess: () => {
        onClose();
      },
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="space-y-4 p-4">
        <SheetHeader>
          <SheetTitle>Cuenta nueva</SheetTitle>
          <SheetDescription>
            Crea una cuenta nueva para empezar a gestionar tus finanzas.
          </SheetDescription>
        </SheetHeader>
        <AccountForm
          onSubmit={onSubmit}
          defaultValues={{ name: '' }}
          disabled={mutation.isPending}
        />
      </SheetContent>
    </Sheet>
  );
};
