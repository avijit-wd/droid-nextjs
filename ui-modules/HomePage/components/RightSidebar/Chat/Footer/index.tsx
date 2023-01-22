import {
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Stack,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }: any) => {
  const { colorMode } = useColorMode();
  const color = useColorModeValue("tertiary", "text.priamry");
  const bg = useColorModeValue("text.primary", "secondary");
  return (
    <Flex w="100%" mt="5">
      <Stack spacing={1} w="full">
        <InputGroup>
          <InputLeftElement children={<AiOutlineStar />} />
          <Input
            placeholder="Send a message"
            bg={colorMode === "light" ? "gray.200" : "gray.600"}
            border="2px solid"
            borderColor="gray.600"
            borderRadius="4px"
            color={color}
            maxLength={200}
            _focus={{
              border: "2px solid",
              borderColor: "primary",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "gray.400",
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage();
              }
            }}
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
        </InputGroup>
        <Box alignSelf="flex-end">
          <Button
            bg="primary"
            color="white"
            borderRadius="4px"
            _hover={{
              bg: "primary",
              opacity: 0.4,
              color: "white",
            }}
            disabled={inputMessage.trim().length <= 0}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Footer;
