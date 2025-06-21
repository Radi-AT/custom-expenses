'use client';

import { useUser } from '@clerk/nextjs';

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      {isLoaded ? (
        <h2 className="text-2xl lg:text-4xl font-medium">
          ¡Bienvenido {user?.firstName || user?.username || 'usuario'}!
        </h2>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};
