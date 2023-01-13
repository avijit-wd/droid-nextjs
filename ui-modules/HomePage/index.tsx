import { Box, Flex, HStack } from "@chakra-ui/react";
import { useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";

const HomePage = () => {
  const [leftCollapse, setLeftCollapse] = useState(false);
  const [rightCollapse, setRightCollapse] = useState(false);

  const toggleLeftCollapse = () => setLeftCollapse((prev) => !prev);

  const toggleRightCollapse = () => setRightCollapse((prev) => !prev);

  return (
    <Flex w="full" height="calc(100vh - 64px)">
      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={leftCollapse ? 350 : 50}
        alignItems="start"
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
      >
        <LeftSidebar
          leftCollapse={leftCollapse}
          toggleLeftCollapse={toggleLeftCollapse}
        />
      </Flex>

      <Flex w="full" bg="red">
        Hi
      </Flex>

      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={rightCollapse ? 350 : 50}
        alignItems="start"
        flexDirection="column"
        justifyContent="space-between"
        transition="ease-in-out .2s"
      >
        <RightSidebar
          rightCollapse={rightCollapse}
          toggleRightCollapse={toggleRightCollapse}
        />
      </Flex>
    </Flex>
  );
};

export default HomePage;
