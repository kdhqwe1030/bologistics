"use client";

import { useEffect, useRef } from "react";

export default function BackgroundVideo({
  src,
  className,
  playbackRate = 1,
}: {
  src: string;
  className?: string;
  playbackRate?: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = playbackRate;
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      className={className}
      src={src}
      autoPlay
      muted
      loop
      playsInline
    />
  );
}
