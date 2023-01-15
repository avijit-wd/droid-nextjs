import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";

function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <Box bg={"secondary"}>
        <Flex
          h={16}
          px={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={6}>
            <Text color="text.primary">Droid Logo</Text>
            <Text color="text.primary">Home</Text>
            <Text color="text.primary">Developer</Text>
          </HStack>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={6}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Flex align="center">
                    <Text mr={2}>{session?.user?.name}</Text>
                    <Avatar size={"sm"} src={session?.user?.image as string} />
                  </Flex>
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"xl"} src={session?.user?.image as string} />
                  </Center>
                  <br />
                  <Center>
                    <VStack>
                      <Text color="secondary" fontSize="md">
                        {session?.user?.name}
                      </Text>
                      <Text color="text.secondary" fontSize="sm">
                        {session?.user?.email}
                      </Text>
                    </VStack>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Navbar;
