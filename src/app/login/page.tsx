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
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleShowClick = () => setShowPassword(!showPassword);
  const toast = useToast();
  const onLogin = async (event: any) => {
    event.preventDefault();

    if (!email || !password) {
      return toast({
        title: "Incomplete Information",
        description: "Please fill in both email and password fields.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
    const sendData = {
      email: email,
      password: password,
    };

    try {
      console.log("logon button pressed", sendData);
      const response = await axios.post(
        "http://localhost:8000/users/login",
        sendData
      );
      if (response.data.status) {
        toast({
          title: `Login Successfully.`,
          description: response.data.msg,
          status: `success`,
          duration: 9000,
          isClosable: true,
        });
        router.push(`/welcome`);
      } else {
        toast({
          title: "Login failed.",
          description: response.data.msg,
          status: "warning",
          duration: 9000,
          isClosable: true,
        });
      }
      console.log(response.data); // Handle the response as needed
    } catch (error) {
      // Show a more specific error message to the user
      return toast({
        title: "Login Failed",
        description: "Please check your email and password and try again.",
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
        <Avatar size="xl" bg="purple.400" />
        <Heading color="purple.400">Welcome</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={onLogin}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
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
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link color="red" href="forget-password">
                    Forgot password?
                  </Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="purple"
                width="full"
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="whatsapp.500" href="signup">
          Sign Up
        </Link>
      </Box>
    </Flex>
  );
};

export default App;
