import React from "react";
import VideoPlayer from "../../../../utils/VideoPlayer";
import videojs from "video.js";
import { Box } from "@chakra-ui/react";

const VideoContent = () => {
  const playerRef = React.useRef<any>(null);

  const videoJsOptions = {
    autoplay: true,
    controls: false,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  return (
    <Box height="100%" width="100%">
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
    </Box>
  );
};

export default React.memo(VideoContent);
