"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "@/context/UserContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserContextProvider>
      <ChakraProvider>{children}</ChakraProvider>
    </UserContextProvider>
  );
}
