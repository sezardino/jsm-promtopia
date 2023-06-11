"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export const Provider = (props: PropsWithChildren) => {
  const { children } = props;

  return <SessionProvider>{children}</SessionProvider>;
};
