import { useEffect } from "react";

function VideoPlayer({
  url,
  playerRef,
  onTimeUpdate,
  videoId,
  onLoadedMetadata,
}) {
  useEffect(() => {
    const player = playerRef.current;

    if (!player) return;

    const savedTime = localStorage.getItem(`watch-${videoId}`);

    if (savedTime) {
      player.currentTime = Number(savedTime);
    }
  }, [videoId]);

  const handleTimeUpdate = () => {
    if (playerRef.current) {
      localStorage.setItem(
        `watch-${videoId}`,
        playerRef.current.currentTime
      );

      onTimeUpdate();
    }
  };

  return (
    <video
      ref={playerRef}
      controls
      controlsList="nodownload noplaybackrate"
      disablePictureInPicture
      onContextMenu={(e) => e.preventDefault()}
      width="100%"
      height="500"
      onTimeUpdate={handleTimeUpdate}
      onLoadedMetadata={() => {
        if (playerRef.current) {
          onLoadedMetadata(playerRef.current.duration);
        }
      }}
    >
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;