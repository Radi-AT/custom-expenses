'use client';

import { NavButton } from './ui/nav-button';
import { usePathname, useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';
import { useMedia } from 'react-use';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';

const routes = [
  {
    href: '/',
    label: 'Inicio',
  },
  {
    href: '/transactions',
    label: 'Transacciones',
  },
  {
    href: '/accounts',
    label: 'Cuentas',
  },
  {
    href: '/categories',
    label: 'Categorías',
  },
  {
    href: '/settings',
    label: 'Configuración',
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia('(max-width: 1024px', false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetHeader>
          <SheetTitle className="hidden">Menú</SheetTitle>
        </SheetHeader>
        <SheetTrigger>
          <Button
            variant={'outline'}
            size="sm"
            className="font-normal bg-wite/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition">
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <SheetDescription className="text-black hidden">
            Selecciona una opción del menú
          </SheetDescription>
          <nav className="flex flex-col gap-y-2 pt-12">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? 'secondary' : 'ghost'}
                onClick={() => onClick(route.href)}
                className="w-full justify-start">
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
}
