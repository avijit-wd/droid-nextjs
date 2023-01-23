import { Box, Flex, HStack, Stack } from "@chakra-ui/react";
import { useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import BottomBar from "./components/BottomBar";
import VideoContent from "./components/VideoContent";
import { useElementSize } from "usehooks-ts";

const HomePage = () => {
  const [squareRef, { width, height }] = useElementSize();

  const [leftCollapse, setLeftCollapse] = useState(false);
  const [rightCollapse, setRightCollapse] = useState(true);
  const [bottomCollapse, setBottomCollapse] = useState(false);

  const toggleLeftCollapse = () => setLeftCollapse((prev) => !prev);
  const toggleRightCollapse = () => setRightCollapse((prev) => !prev);
  const toggleBottomCollapse = () => setBottomCollapse((prev) => !prev);

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
      >
        <LeftSidebar
          leftCollapse={leftCollapse}
          toggleLeftCollapse={toggleLeftCollapse}
        />
      </Flex>

      <Stack
        bg="secondary"
        w="full"
        height="100%"
        spacing={0}
        justify="space-between"
      >
        <Box>
          <VideoContent bottomCollapse={bottomCollapse} />
        </Box>

        <Flex
          as="aside"
          w="full"
          h={bottomCollapse ? "100px" : "40px"}
          alignItems="start"
          flexDirection="column"
          justifyContent="space-between"
          bg="red"
        >
          <BottomBar
            bottomCollapse={bottomCollapse}
            toggleBottomCollapse={toggleBottomCollapse}
          />
        </Flex>
      </Stack>

      <Flex
        as="aside"
        w="full"
        h="full"
        maxW={rightCollapse ? 350 : 50}
        alignItems="start"
        flexDirection="column"
        justifyContent="space-between"
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
