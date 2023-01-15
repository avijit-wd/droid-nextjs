import { Button, Center, Stack, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";
import React from "react";

const Login = () => {
  return (
    <Center h="100vh">
      <Stack>
        <Text>Welcome to Droid v1.0!</Text>
        <Button onClick={() => signIn()}>Login</Button>
      </Stack>
    </Center>
  );
};

export default Login;
