import { Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import ReactPlayer from "react-player";

interface VideoContentProps {
  bottomCollapse: boolean;
}

const VideoContent: FC<VideoContentProps> = ({ bottomCollapse }) => {
  const ref = React.createRef<any>();

  return (
    <Box className="player-wrapper" position="relative">
      <Flex
        align="center"
        position="absolute"
        top={"10px"}
        right={"10px"}
        zIndex={10}
      >
        <Text color="red.500" fontSize="md">
          Live
        </Text>
        <Box
          bg="red.500"
          borderRadius="50%"
          width="14px"
          height="14px"
          ml={1}
        />
      </Flex>
      {!bottomCollapse ? (
        <ReactPlayer
          ref={ref}
          className="player"
          controls
          playing
          url={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          }
          width="100%"
          height={`calc((100vh - 64px) - 40px)`}
        />
      ) : (
        <ReactPlayer
          ref={ref}
          className="player"
          controls
          playing
          url={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          }
          width="100%"
          height={`calc((100vh - 64px) - 100px)`}
        />
      )}
    </Box>
  );
};

export default VideoContent;
