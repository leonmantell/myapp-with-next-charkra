// import Link from "next/link";
import { Link } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Box bg='gray' w='100%' p={4} color='white'>
        <Flex justifyContent='center'> 
          <Box>
            <Text fontSize='5xl'> In love with React & Next</Text>
            <Flex justifyContent='center'> 
            <Box>
              <Button colorScheme='teal' size='lg'>Login</Button>
              <Button colorScheme='orange' size='lg' m={2}>Signup</Button>
            </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </main>
  );
}

