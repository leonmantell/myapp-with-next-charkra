"use client";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

import { useRouter } from "next/navigation";

const App = () => {
  const router = useRouter();

  useEffect(() => {
    const email: any = localStorage.getItem("email");
    if (email) {
      router.push("/inputing");
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box bg="gray" w="100%" p={4} color="white">
        <Flex justifyContent="center">
          <Box>
            <Text fontSize="5xl"> In love with Next & Chakra</Text>
            <Flex justifyContent="center">
              <Box>
                <Button colorScheme="teal" size="lg">
                  <Link href="login">Login</Link>
                </Button>
                <Button colorScheme="orange" size="lg" m={2}>
                  <Link href="signup">Signup</Link>
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </main>
  );
};

export default App;
