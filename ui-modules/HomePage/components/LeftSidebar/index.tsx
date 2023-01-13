import React, { FC } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiArrowFromRight, BiArrowFromLeft } from "react-icons/bi";
import { Joystick } from "react-joystick-component";

interface LeftSidebarProps {
  leftCollapse: boolean;
  toggleLeftCollapse: () => void;
}

const LeftSidebar: FC<LeftSidebarProps> = ({
  leftCollapse,
  toggleLeftCollapse,
}) => (
  <Stack
    spacing={6}
    w="full"
    h="full"
    bg="secondary"
    color="text.primary"
    p={2}
  >
    <Flex align="center" justify="space-between">
      {leftCollapse && (
        <Text fontWeight="semibold" color="text.primary">
          Stats
        </Text>
      )}

      {!leftCollapse ? (
        <IconButton
          aria-label="arrowFromLeft"
          size="sm"
          bg="transperant"
          _hover={{ bg: "transperant" }}
          _active={{ bg: "transperant" }}
          onClick={toggleLeftCollapse}
          icon={<BiArrowFromLeft />}
        />
      ) : (
        <IconButton
          aria-label="arrowFromLeft"
          size="sm"
          bg="transperant"
          _hover={{ bg: "transperant" }}
          _active={{ bg: "transperant" }}
          onClick={toggleLeftCollapse}
          icon={<BiArrowFromRight />}
        />
      )}
    </Flex>

    {leftCollapse && (
      <>
        <VStack spacing={6}>
          <Text>Battery: 89%</Text>
          <Text>Speed: 10Rev/s</Text>
          <Text>Temp: 33 Degrees</Text>
          <Text>Ping Latency: 0.1 sec</Text>
          <Text>FPS: 20</Text>
        </VStack>

        <Button
          bg="tertiary"
          _hover={{ bg: "text.secondary", color: "text.primary" }}
        >
          Capture
        </Button>
      </>
    )}

    {leftCollapse && (
      <VStack spacing={6}>
        <Text color="text.primary" fontWeight="semibold">
          Movement
        </Text>
        <Flex
          justify="center"
          align="center"
          h="fit-content"
          w="full"
          bg="tertiary"
          p={2}
        >
          <Joystick
            size={100}
            sticky={false}
            baseColor="#222"
            stickColor="#E5E5E5"
            move={() => console.log("move")}
            stop={() => console.log("stop")}
          ></Joystick>
        </Flex>
      </VStack>
    )}
    {leftCollapse && (
      <Button bg="red" _hover={{ bg: "red.300" }}>
        Stop
      </Button>
    )}
  </Stack>
);

export default LeftSidebar;
