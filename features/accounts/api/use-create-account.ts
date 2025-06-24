import { InferRequestType, InferResponseType } from 'hono';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { client } from '@/lib/hono';

type ResponseType = InferResponseType<typeof client.api.accounts.$post>;
type RequestType = InferRequestType<typeof client.api.accounts.$post>['json'];

export const useCreateAccount = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async (json) => {
      const response = await client.api.accounts.$post({ json });
      return await response.json();
    },
    onSuccess: () => {
      toast.success('Cuenta creada correctamente');
      queryClient.invalidateQueries({ queryKey: ['accounts'] });
    },
    onError: (error) => {
      toast.error('Error al crear la cuenta');
      console.error('Error creating account:', error);
    },
  });

  return mutation;
};
