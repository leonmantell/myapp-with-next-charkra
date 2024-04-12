"use client";
import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { FaUserAlt, FaLock } from "react-icons/fa";
import axios from "axios";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const App = () => {
  const [email, setEmail] = useState("");
  console.log(email);
  const toast = useToast();
  const router = useRouter();

  const reset = async (event: any) => {
    event.preventDefault();

    const sendData = {
      email: email,
    };

    try {
      console.log("reset button pressed", sendData);
      const response = await axios.post(
        "http://localhost:8000/users/reset",
        sendData
      );
      console.log(response.data);
      if (response.data.status) {
        toast({
          title: `reset Successfully.`,
          description: response.data.msg,
          status: `success`,
          duration: 9000,
          isClosable: true,
        });
        router.push("/signup");
      } else {
        toast({
          title: `reset failed`,
          description: response.data.msg,
          status: `error`,
          duration: 9000,
          isClosable: true,
        });
      }

      console.log(response.data); // Handle the response as needed
    } catch (error) {
      // Show a more specific error message to the user
      return toast({
        title: "reset Failed",
        description: "Please check your email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar size="xl" bg="pink.400" />
        <Heading color="pink.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={reset}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup mb={5}>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </FormControl>

              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="pink"
                width="full"
              >
                Reset
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="teal.500" href="signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default App;
