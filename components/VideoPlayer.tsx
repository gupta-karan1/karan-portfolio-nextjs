import React from "react";

function VideoPlayer({
  source,
  width,
  height,
  auto,
}: {
  source: string;
  width: string;
  height: string;
  auto?: boolean;
}) {
  return (
    <video
      // controls
      autoPlay={auto}
      loop
      muted
      width={width}
      height={height}
      className="rounded-3xl shadow-2xl object-fill object-center border-4 border-accent"
      // controlsList="nodownload "
    >
      <source src={source} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
