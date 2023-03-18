import React, { useRef, useEffect } from "react";
import Hls from "hls.js";

export default function HlsPlayer({ src, currentTime, id }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleBeforeUnload = () => {
      localStorage.setItem(id, video.currentTime);
    };

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
  }, [src, currentTime]);

  return (
    <div className="player">
      <video ref={videoRef} controls={true} />
    </div>
  );
}
