import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

export default function Player({ options, currentTime, id }) {
  const videoNode = useRef(null);

  useEffect(() => {
    if (videoNode.current) {
      videoNode.current.currentTime = currentTime;
      const player = videojs(videoNode.current, { ...options });
      const setCurrentTime = () => {
        localStorage.setItem(id, player.currentTime());
      };
      window.addEventListener("beforeunload", setCurrentTime);
      return () => {
        setCurrentTime();
        if (player !== null) {
          player.dispose();
        }
        window.removeEventListener("beforeunload", setCurrentTime);
      };
    }
  }, [videoNode]);

  return (
    <div data-vjs-player>
      <video ref={videoNode} className="video-js"></video>
    </div>
  );
}
