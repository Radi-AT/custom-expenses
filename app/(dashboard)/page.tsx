"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to the dashboard</h1>
      <Button onClick={onOpen} className="mt-4">
        Open New Account Sheet
      </Button>
    </div>
  );
}
