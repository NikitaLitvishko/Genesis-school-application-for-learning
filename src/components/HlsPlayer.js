import React, { useRef, useEffect } from "react";
import Hls from "hls.js";

export default function HlsPlayer({ src, currentTime, id }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleBeforeUnload = () => {
      localStorage.setItem(id, video.currentTime);
    };
    const handleKeyPress = (event) => {
        if (event.code === "KeyD") {
          video.playbackRate += 0.25;
        } else if (event.code === "KeyA") {
          video.playbackRate -= 0.25;
        }
      };
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("beforeunload", handleBeforeUnload);

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (currentTime) {
          video.currentTime = currentTime;
        }
        video.play();
      });
      return () => {
        handleBeforeUnload();
        window.removeEventListener("keydown", handleKeyPress);
        window.removeEventListener("beforeunload", handleBeforeUnload);
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => {
        if (currentTime) {
          video.currentTime = currentTime;
        }
        video.play();
      });
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [src, currentTime, id]);

  const handlePictureInPicture = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      videoRef.current.requestPictureInPicture();
    }
  };
  
  return (
    <div className="player">
      <video ref={videoRef} controls={true} />
      <p>
      To change the video playback speed you can use your keyboard.
      Key "A" is for decreasing speed. Key "D" is for increasing speed.
      </p>
      <button onClick={handlePictureInPicture}>Picture-in-Picture</button>
    </div>
  );
}