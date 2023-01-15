import { Box, Button, IconButton, Text } from "@chakra-ui/react";
import { FC } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";

interface BottomBarProps {
  bottomCollapse: boolean;
  toggleBottomCollapse: () => void;
}
const BottomBar: FC<BottomBarProps> = ({
  bottomCollapse,
  toggleBottomCollapse,
}) => {
  return (
    <Box w="full" h="full" bg="secondary" position="relative">
      <Text color="text.primary">Botom bar</Text>
      <Box position="absolute" top={"-20px"} left={"50%"}>
        <IconButton
          size="md"
          aria-label="up-down-icon"
          bg="secondary"
          _active={{ bg: "text.secondary" }}
          _hover={{ bg: "text.secondary" }}
          onClick={toggleBottomCollapse}
          icon={
            bottomCollapse ? (
              <AiOutlineDown color="white" />
            ) : (
              <AiOutlineUp color="white" />
            )
          }
        />
      </Box>
    </Box>
  );
};

export default BottomBar;
