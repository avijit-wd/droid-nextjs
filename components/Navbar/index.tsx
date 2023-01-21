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
  Text,
  HStack,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { BsFillMoonFill, BsGithub } from "react-icons/bs";
import Droid from "../../assets/image/droid.png";
import Link from "next/link";
import { BiLogOut } from "react-icons/bi";

function Navbar() {
  const { data: session } = useSession();
  const { colorMode, toggleColorMode } = useColorMode();

  const color = useColorModeValue("tertiary", "text.priamry");

  return (
    <>
      <Box bg={"secondary"}>
        <Flex
          h={16}
          px={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack spacing={6} align="center">
            <Text color="text.primary">
              <Image
                src={Droid}
                alt="droidLogo"
                height={"20px"}
                width={"20px"}
              />
            </Text>
            <Link href="/">
              <a>
                <Text color="text.primary">Home</Text>
              </a>
            </Link>
            <Link href="/">
              <a>
                <Flex align="center">
                  <Text color="text.primary" mr={1}>
                    Developer
                  </Text>
                  <BsGithub color="#ccc" />
                </Flex>
              </a>
            </Link>
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
                  <Flex p={2} align="center">
                    <Avatar
                      size={"md"}
                      src={session?.user?.image as string}
                      mr={2}
                    />
                    <Text color={color} fontWeight="semibold" fontSize="md">
                      {session?.user?.name}
                    </Text>
                  </Flex>

                  <MenuDivider />
                  <MenuItem>
                    <BsFillMoonFill />
                    <Text fontWeight="semibold" color={color} ml={1} mr={8}>
                      Dark Theme
                    </Text>
                    <Box onClick={(e) => e.stopPropagation()}>
                      <Switch
                        onChange={toggleColorMode}
                        id="color-mode"
                        isChecked={colorMode === "dark"}
                      />
                    </Box>
                  </MenuItem>

                  <MenuDivider />
                  <MenuItem onClick={() => signOut()}>
                    <BiLogOut />
                    <Text fontWeight="semibold" color={color} ml={1}>
                      Logout
                    </Text>
                  </MenuItem>
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
