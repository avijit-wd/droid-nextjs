import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  EmailShareButton,
} from "react-share";

import facebook from "../../../../assets/image/facebook.svg";
import twitter from "../../../../assets/image/twitter.svg";
import reddit from "../../../../assets/image/reddit.svg";
import email from "../../../../assets/image/email.svg";

interface BottomBarProps {
  bottomCollapse: boolean;
  toggleBottomCollapse: () => void;
}
const BottomBar: FC<BottomBarProps> = ({
  bottomCollapse,
  toggleBottomCollapse,
}) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box
      w="full"
      h="full"
      bg="secondary"
      position="relative"
      borderTop="2px solid"
      borderColor="gray.700"
    >
      {bottomCollapse && (
        <HStack w="full" align="center" justify={"flex-end"} p={3}>
          <Flex align="center" color="red.500">
            <BsPerson />
            <Text fontSize="sm" ml={1}>
              76,789
            </Text>
          </Flex>

          <Text color="text.primary">1:09:89</Text>
          {!isOpen && (
            <Tooltip label={"Share"} hasArrow>
              <IconButton
                size="sm"
                aria-label="Search database"
                bg="transparent"
                _hover={{ bg: "tertiary" }}
                onClick={onToggle}
                icon={<BiDownload color="white" />}
              />
            </Tooltip>
          )}

          {isOpen && (
            <Popover
              returnFocusOnClose={false}
              isOpen={isOpen}
              onClose={onClose}
              closeOnBlur={false}
              placement="top"
            >
              <PopoverTrigger>
                <IconButton
                  size="sm"
                  aria-label="Search database"
                  bg="transparent"
                  _hover={{ bg: "tertiary" }}
                  icon={<BiDownload color="white" />}
                />
              </PopoverTrigger>
              <PopoverContent w="fit-content">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Share via</PopoverHeader>
                <PopoverBody>
                  <Box>
                    <Flex flexWrap={"wrap"} gap={4}>
                      <FacebookShareButton
                        url={"https://miro.com/app/board/uXjVPfOEer4=/"}
                      >
                        <Image
                          height="40px"
                          width="40px"
                          layout="fixed"
                          src={facebook}
                        />
                      </FacebookShareButton>

                      <TwitterShareButton
                        url={"https://miro.com/app/board/uXjVPfOEer4=/"}
                      >
                        <Image
                          height="50px"
                          width="50px"
                          layout="fixed"
                          src={twitter}
                        />
                      </TwitterShareButton>
                      <RedditShareButton
                        url={"https://miro.com/app/board/uXjVPfOEer4=/"}
                      >
                        <Image
                          height="50px"
                          width="50px"
                          layout="fixed"
                          src={reddit}
                        />
                      </RedditShareButton>
                      <EmailShareButton
                        url={"https://miro.com/app/board/uXjVPfOEer4=/"}
                      >
                        <Image
                          height="50px"
                          width="50px"
                          layout="fixed"
                          src={email}
                        />
                      </EmailShareButton>
                    </Flex>
                  </Box>
                </PopoverBody>
              </PopoverContent>
            </Popover>
          )}
        </HStack>
      )}

      <Box position="absolute" top={"-20px"} left={"50%"}>
        <Tooltip label="Collapse" hasArrow placement="top">
          <IconButton
            size="md"
            border="1px solid"
            borderColor="gray.700"
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
        </Tooltip>
      </Box>
    </Box>
  );
};

export default BottomBar;
