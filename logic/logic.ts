export const handleVideoWork = (
  type: "play" | "pause",
  videoRef: React.RefObject<HTMLVideoElement>
) => {
  if (videoRef.current) {
    if (type === "play") {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }
};
