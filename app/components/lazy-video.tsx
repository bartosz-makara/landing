import React, { useState, useEffect, useRef } from "react";

export function LazyVideo({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  //   const [load, setLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        video.src = src;
        video.load();
        video.play().catch(() => {});
        observer.disconnect();
      },
      { rootMargin: "200px" }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="none"
      poster={poster}
      className="w-full rounded-lg"
    >
      <source src={src || ""} type="video/mp4" />
    </video>
  );
}
