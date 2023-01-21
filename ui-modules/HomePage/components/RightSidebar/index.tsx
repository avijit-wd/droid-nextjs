import { Flex, IconButton, Stack, Text, Tooltip } from "@chakra-ui/react";
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
  return (
    <Stack
      spacing={6}
      w="full"
      h="full"
      bg="secondary"
      color="text.primary"
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
              bg="transperant"
              _hover={{ bg: "text.secondary" }}
              _active={{ bg: "text.secondary" }}
              onClick={toggleRightCollapse}
              icon={<BiArrowFromRight />}
            />
          ) : (
            <IconButton
              aria-label="arrowFromLeft"
              size="sm"
              bg="transparent"
              _hover={{ bg: "text.secondary" }}
              _active={{ bg: "text.secondary" }}
              onClick={toggleRightCollapse}
              icon={<BiArrowFromLeft color="white" />}
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
