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

export function App() {
  const [id, setId] = useState(true);
  const [type, setType] = useState(true);
  const [key, setKey] = useState(false);
  const [signature, setSignature] = useState(false);

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
      <Box width="1440px" height="72px" p={[4, 18]} boxShadow={"sm"}>
        <Stack direction="row" spacing={4} align="center">
          <Button
            width="200px"
            height="40px"
            colorScheme="teal"
            variant="solid"
            ml="auto"
            backgroundColor="#FF7E1D"
            borderRadius="10px"
          >
            <Text fontSize="18px" fontFamily="Public Sans">
              Connect Wallet
            </Text>
          </Button>
        </Stack>
      </Box>
      <Box height="952px" p={[4, 18]}>
        <Box
          p={5}
          border="2px"
          borderColor="#277351"
          borderRadius="10"
          mx="420px"
          my="137px"
        >
          <Stack
            spacing={6}
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
          >
            <FormControl width="552px" height="64px">
              <FormLabel>Contract Address</FormLabel>
              <Input placeholder="Enter contract address" />
            </FormControl>
            <FormControl width="552px" height="64px">
              <FormLabel>Function</FormLabel>
              <Select onChange={handleChange}>
                <option value="option1" color="#277351">
                  Step 1: registerSender
                </option>
                <option value="option2" color="#277351">
                  Step 2: fullWithdrawalRequest
                </option>
                <option value="option3" color="#277351">
                  Step 3: withdraw
                </option>
              </Select>
            </FormControl>
            <FormControl width="552px" height="64px" isDisabled={id}>
              <FormLabel>Vault ID</FormLabel>
              <Input placeholder="Enter vault ID" />
            </FormControl>
            <FormControl width="552px" height="64px" isDisabled={type}>
              <FormLabel>Asset Type</FormLabel>
              <Input placeholder="Enter asset type" />
            </FormControl>
            <FormControl width="552px" height="64px" isDisabled={key}>
              <FormLabel>Stark Key</FormLabel>
              <Input placeholder="Enter start key" />
            </FormControl>
            <FormControl width="552px" height="64px" isDisabled={signature}>
              <FormLabel>Stark Signature</FormLabel>
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
              sx={{ background: "#277351", textColor: "white" }}
            >
              Submit Transaction
            </Button>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}
export default App;
