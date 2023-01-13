import {
  Flex,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { AiOutlineStar } from "react-icons/ai";

const Footer = ({ inputMessage, setInputMessage, handleSendMessage }: any) => {
  return (
    <Flex w="100%" mt="5">
      <InputGroup>
        <InputLeftElement children={<AiOutlineStar />} />
        <Input
          placeholder="Send a message"
          border="none"
          borderRadius="none"
          _focus={{
            border: "1px solid black",
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
      <Button
        bg="black"
        color="white"
        borderRadius="none"
        _hover={{
          bg: "white",
          color: "black",
          border: "1px solid black",
        }}
        disabled={inputMessage.trim().length <= 0}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </Flex>
  );
};

export default Footer;
