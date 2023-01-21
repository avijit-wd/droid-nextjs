import React, { FC, useState } from "react";
import {
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  Tooltip,
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
}) => {
  const [x, setX] = useState<number | null>(0);
  const [y, setY] = useState<number | null>(0);
  return (
    <Stack
      spacing={4}
      w="full"
      h="full"
      bg="secondary"
      color="text.primary"
      p={2}
      borderRight="2px solid"
      borderColor="gray.700"
    >
      <Flex align="center" justify="space-between">
        {leftCollapse && (
          <Text fontWeight="semibold" color="text.primary">
            Stats
          </Text>
        )}

        <Tooltip label="Collapse" hasArrow placement="right">
          {!leftCollapse ? (
            <IconButton
              aria-label="arrowFromLeft"
              size="sm"
              bg="transperant"
              _hover={{ bg: "text.secondary" }}
              _active={{ bg: "text.secondary" }}
              onClick={toggleLeftCollapse}
              icon={<BiArrowFromLeft color="white" />}
            />
          ) : (
            <IconButton
              aria-label="arrowFromLeft"
              size="sm"
              bg="transperant"
              _hover={{ bg: "text.secondary" }}
              _active={{ bg: "text.secondary" }}
              onClick={toggleLeftCollapse}
              icon={<BiArrowFromRight />}
            />
          )}
        </Tooltip>
      </Flex>

      {leftCollapse && (
        <>
          <VStack spacing={4}>
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
            direction="column"
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
              move={(e) => {
                setX(e.x);
                setY(e.y);
              }}
              stop={() => console.log("stop")}
            ></Joystick>

            <Stack mt={3} spacing={0}>
              <Text fontSize="xs">X: {x}</Text>
              <Text fontSize="xs">Y: {y}</Text>
            </Stack>
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
};

export default LeftSidebar;
