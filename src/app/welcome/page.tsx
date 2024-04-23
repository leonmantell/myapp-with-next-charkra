"use client";

import { Text } from "@chakra-ui/react";
import React from "react";

const App = () => {
  const storedUsername = localStorage.getItem("username");

  // Display welcome message with username
  return (
    <Text fontSize="100px" color="tomato">
      Welcome, {storedUsername} !
    </Text>
  );
};

export default App;
