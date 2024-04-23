"use client";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const storedEmail = localStorage.getItem("email");
  const storedUsername = localStorage.getItem("username");
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await axios.post("http://localhost:8000/users/getUsers");
    setUsers(response.data.users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Display welcome message with username
  return (
    <Box m={40}>
      <Text fontSize="100px" color="tomato">
        Welcome, {storedUsername} !
      </Text>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>No</Th>
                <Th>Email</Th>
                <Th>Name</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user: any, index) => {
                return (
                  <Tr>
                    <Td>{index + 1}</Td>
                    <Td>{user.email}</Td>
                    <Td> {user.name}</Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default App;
