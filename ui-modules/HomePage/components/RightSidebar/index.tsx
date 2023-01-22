import {
  Flex,
  IconButton,
  Stack,
  Text,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FC } from "react";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import Chat from "./Chat";

interface RightSidebarProps {
  rightCollapse: boolean;
  toggleRightCollapse: () => void;
}

const RightSidebar: FC<RightSidebarProps> = ({
  rightCollapse,
  toggleRightCollapse,
}) => {
  const { colorMode } = useColorMode();

  const color = useColorModeValue("tertiary", "text.priamry");
  const bg = useColorModeValue("text.primary", "secondary");
  return (
    <Stack
      spacing={6}
      w="full"
      h="full"
      bg={bg}
      color={color}
      p={2}
      borderLeft="2px solid"
      borderColor="gray.700"
    >
      <Flex align="center" justify="space-between">
        <Tooltip label="Collapse" hasArrow placement="left">
          {!rightCollapse ? (
            <IconButton
              aria-label="arrowFromLeft"
              size="sm"
              color={color}
              bg={bg}
              _active={{ bg: { bg } }}
              _hover={{ bg: colorMode === "light" ? "gray.300" : "gray.600" }}
              onClick={toggleRightCollapse}
              icon={<BiArrowFromRight />}
            />
          ) : (
            <IconButton
              aria-label="arrowFromLeft"
              size="sm"
              color={color}
              bg={bg}
              _active={{ bg: { bg } }}
              _hover={{ bg: colorMode === "light" ? "gray.300" : "gray.600" }}
              onClick={toggleRightCollapse}
              icon={<BiArrowFromLeft />}
            />
          )}
        </Tooltip>

        {rightCollapse && (
          <Text fontWeight="semibold" color="text.primary">
            Stream chat
          </Text>
        )}

        {rightCollapse && <BsPeople />}
      </Flex>
      {rightCollapse && (
        <Flex w="full">
          <Chat />
        </Flex>
      )}
    </Stack>
  );
};

export default RightSidebar;
