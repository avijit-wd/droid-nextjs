import { Flex, IconButton, Stack, Text } from "@chakra-ui/react";
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
    >
      <Flex align="center" justify="space-between">
        {!rightCollapse ? (
          <IconButton
            aria-label="arrowFromLeft"
            size="sm"
            bg="transperant"
            _hover={{ bg: "transperant" }}
            _active={{ bg: "transperant" }}
            onClick={toggleRightCollapse}
            icon={<BiArrowFromRight />}
          />
        ) : (
          <IconButton
            aria-label="arrowFromLeft"
            size="sm"
            bg="transperant"
            _hover={{ bg: "transperant" }}
            _active={{ bg: "transperant" }}
            onClick={toggleRightCollapse}
            icon={<BiArrowFromLeft />}
          />
        )}

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
