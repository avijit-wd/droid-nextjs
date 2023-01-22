import React, { FC, useState } from "react";
import {
  Button,
  Flex,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
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

  const { colorMode } = useColorMode();

  const color = useColorModeValue("tertiary", "text.priamry");
  const bg = useColorModeValue("text.primary", "secondary");
  return (
    <Stack
      spacing={4}
      w="full"
      h="full"
      bg={bg}
      color={color}
      p={2}
      borderRight="2px solid"
      borderColor="gray.700"
    >
      <Flex align="center" justify="space-between">
        {leftCollapse && (
          <Text fontWeight="semibold" color={color}>
            Stats
          </Text>
        )}

        <Tooltip label="Collapse" hasArrow placement="right">
          {!leftCollapse ? (
            <IconButton
              aria-label="arrowFromLeft"
              size="sm"
              color={color}
              bg={bg}
              _active={{ bg: { bg } }}
              _hover={{ bg: colorMode === "light" ? "gray.300" : "gray.600" }}
              onClick={toggleLeftCollapse}
              icon={<BiArrowFromLeft />}
            />
          ) : (
            <IconButton
              aria-label="arrowFromLeft"
              size="sm"
              color={color}
              bg={bg}
              _active={{ bg: { bg } }}
              _hover={{ bg: colorMode === "light" ? "gray.300" : "gray.600" }}
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
            bg={colorMode === "light" ? "gray.300" : "tertiary"}
            _hover={{ bg: { bg }, opacity: 0.5, color: { color } }}
          >
            Capture
          </Button>
        </>
      )}

      {leftCollapse && (
        <VStack spacing={6}>
          <Text color={color} fontWeight="semibold">
            Movement
          </Text>
          <Flex
            direction="column"
            justify="center"
            align="center"
            h="fit-content"
            w="full"
            bg={colorMode === "light" ? "gray.300" : "tertiary"}
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
              <Text fontSize="xs" color={color}>
                X: {x}
              </Text>
              <Text fontSize="xs" color={color}>
                Y: {y}
              </Text>
            </Stack>
          </Flex>
        </VStack>
      )}
      {leftCollapse && (
        <Button bg="red.500" _hover={{ bg: "red.600" }}>
          Stop
        </Button>
      )}
    </Stack>
  );
};

export default LeftSidebar;
