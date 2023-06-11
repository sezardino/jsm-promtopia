"use client";

import { createQueryClient } from "@/libs/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren, useRef } from "react";

export const Provider = ({ children }: PropsWithChildren) => {
  const queryClient = useRef(createQueryClient());

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient.current}>
        {children}
      </QueryClientProvider>
    </SessionProvider>
  );
};
