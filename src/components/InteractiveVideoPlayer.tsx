import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

const InteractiveVideoPlayer = () => {
  const [isClient, setIsClient] = useState(false);

  // Make sure the video player renders only on the client-side
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return nothing on the server-side
  }

  return (
    <div>
      <ReactPlayer
        url="https://videos.pexels.com/video-files/7308093/7308093-hd_1920_1080_24fps.mp4"
        playing
        controls
        width="100%"
        height="auto"
      />
    </div>
  );
};

export default InteractiveVideoPlayer;
