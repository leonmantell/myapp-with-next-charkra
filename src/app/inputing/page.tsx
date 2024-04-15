"use client";
import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
  Box,
  Stack,
  Select,
  Text,
} from "@chakra-ui/react";
import { endianness } from "os";
// import { FaLess } from "react-icons/fa6";
// import { FaLaptopHouse } from "react-icons/fa";
import { useRouter } from "next/navigation";

export function App() {
  const [id, setId] = useState(true);
  const [type, setType] = useState(true);
  const [key, setKey] = useState(false);
  const [signature, setSignature] = useState(false);
  const router = useRouter();

  const handleChange = (event: any) => {
    switch (event.target.value) {
      case "option1":
        setId(true), setType(true), setKey(false), setSignature(false);
        break;
      case "option2":
        setId(false), setType(true), setKey(false), setSignature(true);
        break;
      case "option3":
        setId(true), setType(false), setKey(false), setSignature(true);
        break;
    }
  };

  return (
    <Flex
      flexDirection="column"
      width="100vw"
      height="100vh"
      backgroundColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Box height="72px" width="100vw" p={[4, 18]} boxShadow={"md"}>
        <Flex justifyContent="end">
          <Button
            width="150px"
            height="40px"
            colorScheme="teal"
            backgroundColor="#FF7E1D"
            borderRadius="10px"
            onClick={() => {
              localStorage.clear();
              router.push("/login");
            }}
          >
            <Text fontSize="18px" fontFamily="Public Sans">
              Log out
            </Text>
          </Button>
        </Flex>
      </Box>

      <Box height="952px" sx={{ display: "flex", alignItems: "center" }}>
        <Box>
          <Box border="2px" borderColor="#277351" borderRadius="10" py="auto">
            <Stack
              spacing={6}
              flexDir="column"
              justifyContent="center"
              alignItems="center"
            >
              <FormControl width="552px" height="64px" mt="14px" mx="24px">
                <FormLabel sx={{ fontSize: "18px !important" }} ml="18px">
                  Contract Address
                </FormLabel>
                <Input
                  sx={{ fontSize: "14px" }}
                  placeholder="Enter contract address"
                />
              </FormControl>
              <FormControl width="552px" height="64px" mt="19px" mx="24px">
                <FormLabel sx={{ fontSize: "18px !important" }} ml="18px">
                  Function
                </FormLabel>
                <Select onChange={handleChange}>
                  <option style={{ color: "#277351" }} value="option1">
                    Step 1: registerSender
                  </option>
                  <option style={{ color: "#277351" }} value="option2">
                    Step 2: fullWithdrawalRequest
                  </option>
                  <option style={{ color: "#277351" }} value="option3">
                    Step 3: withdraw
                  </option>
                </Select>
              </FormControl>
              <FormControl
                width="552px"
                height="64px"
                mt="14px"
                mx="24px"
                isDisabled={id}
              >
                <FormLabel sx={{ fontSize: "18px !important" }} ml="18px">
                  Vault ID
                </FormLabel>
                <Input placeholder="Enter vault ID" />
              </FormControl>
              <FormControl
                width="552px"
                height="64px"
                mt="14px"
                mx="24px"
                isDisabled={type}
              >
                <FormLabel sx={{ fontSize: "18px !important" }} ml="18px">
                  Asset Type
                </FormLabel>
                <Input placeholder="Enter asset type" />
              </FormControl>
              <FormControl
                width="552px"
                height="64px"
                mt="14px"
                mx="24px"
                isDisabled={key}
              >
                <FormLabel sx={{ fontSize: "18px !important" }} ml="18px">
                  Stark Key
                </FormLabel>
                <Input placeholder="Enter start key" />
              </FormControl>
              <FormControl
                width="552px"
                height="64px"
                mt="14px"
                mx="24px"
                isDisabled={signature}
              >
                <FormLabel sx={{ fontSize: "18px !important" }} ml="18px">
                  Stark Signature
                </FormLabel>
                <Input placeholder="Enter stark signature" />
              </FormControl>
            </Stack>
            <Box
              height="96px"
              pl="auto"
              sx={{ alignContent: "space-evenly", textAlign: "right" }}
            >
              <Button
                width="216px"
                height="48px"
                mx="24px"
                my="24px"
                sx={{ background: "#277351", textColor: "white" }}
              >
                Submit Transaction
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
export default App;
