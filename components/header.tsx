import { ClerkLoaded, ClerkLoading, UserButton } from '@clerk/nextjs';
import { Navigation } from './navigation';
import { HeaderLogo } from './ui/header-logo';
import { Loader2 } from 'lucide-react';
import { WelcomeMsg } from './welcome-msg';

export const Header = () => {
  return (
    <header className="bg-gradient-to-b from-[#2f323f] to-[#64647c] text-[#c49f3b] px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <Navigation />
          </div>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="size-8 animate-spin text-slate-400" />
          </ClerkLoading>
        </div>
        <WelcomeMsg />
      </div>
    </header>
  );
};
