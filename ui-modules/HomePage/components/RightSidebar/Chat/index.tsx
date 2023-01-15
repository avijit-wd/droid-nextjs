import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import Footer from "./Footer";
import Messages from "./Messages";

const Chat = () => {
  const [messages, setMessages] = useState([{ from: "me", text: "Hey there" }]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (!inputMessage.trim().length) {
      return;
    }
    const data = inputMessage;

    setMessages((old) => [...old, { from: "me", text: data }]);
    setInputMessage("");
  };

  return (
    <Flex w="100%" h="calc(100vh - 130px)" justify="center" align="center">
      <Flex w={["100%", "100%"]} h="90%" flexDir="column">
        <Messages messages={messages} />

        <Footer
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          handleSendMessage={handleSendMessage}
        />
      </Flex>
    </Flex>
  );
};

export default Chat;
