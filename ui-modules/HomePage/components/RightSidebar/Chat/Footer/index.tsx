import {
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  Stack,
  Box,
} from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }: any) => {
  return (
    <Flex w="100%" mt="5">
      <Stack spacing={1}>
        <InputGroup>
          <InputLeftElement children={<AiOutlineStar color="#ccc" />} />
          <Input
            placeholder="Send a message"
            bg="gray.700"
            border="2px solid"
            borderColor="gray.800"
            borderRadius="4px"
            maxLength={200}
            _focus={{
              border: "2px solid",
              borderColor: "primary",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "gray.600",
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
