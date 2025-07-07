'use client';

import { Plus } from 'lucide-react';
import { useNewAccount } from '@/features/accounts/hooks/use-new-account';
import { Button } from '@/components/ui/button';
import { DataTable } from '@/components/data-table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { columns, Payment } from './columns';

const data: Payment[] = [
  {
    id: '728ed52f',
    amount: 100,
    status: 'pending',
    email: 'm@example.com',
  },
  {
    id: 'b2f8c3a1',
    amount: 200,
    status: 'processing',
    email: 'dqwe@sddc.cc',
  },
  {
    id: 'c3d4e5f6',
    amount: 300,
    status: 'success',
    email: 'r@exxcv.gg',
  },
];

const AccountsPage = () => {
  const newAccount = useNewAccount();

  return (
    <div className="max-w-screen2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Cuentas</CardTitle>
          <Button onClick={newAccount.onOpen} className="w-full lg:w-auto">
            <Plus className="size-4 mr-1" />
            Nueva cuenta
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            filterKey="status"
            onDelete={() => {
              console.log('Borraste!');
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
