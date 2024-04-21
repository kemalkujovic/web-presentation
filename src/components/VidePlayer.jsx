import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  return (
    <div className="w-full  mx-auto">
      <YouTube
        videoId={videoId}
        className="w-full flex items-center justify-center"
      />
    </div>
  );
};

export default VideoPlayer;
