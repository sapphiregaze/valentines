import Image from "next/image";

import { useRef, useEffect, RefObject } from "react";
import { isBrowser } from "react-device-detect";

export const Background: React.FC = () => {
  const videoRef: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null);

  const bg: JSX.Element = isBrowser ? (
    <>
      <video
        ref={videoRef}
        className="absolute w-auto min-w-full min-h-full max-w-none"
        autoPlay
        loop
        muted
      >
        <source src={"/background.mp4"} type="video/mp4" />
      </video>
    </>
  ) : (
    <>
      <Image
        src={"/static.png"}
        alt={"static background for mobile view"}
        layout="fill"
        objectFit="cover"
      />
    </>
  );

  useEffect(() => {
    setInterval(() => {
      if (videoRef.current && videoRef.current.currentTime > 9) {
        videoRef.current.currentTime = 4;
      }
    }, 100);
  }, []);

  return <>{bg}</>;
};
