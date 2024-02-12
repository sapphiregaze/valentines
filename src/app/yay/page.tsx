"use client";
import Image from "next/image";
import { useEffect, useRef, RefObject } from "react";

export default function YayPage() {
  const videoRef: RefObject<HTMLVideoElement> = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setInterval(() => {
      if (videoRef.current && videoRef.current.currentTime > 9) {
        videoRef.current.currentTime = 4;
      }
    }, 100);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <video
        ref={videoRef}
        className="absolute w-auto min-w-full min-h-full max-w-none"
        autoPlay
        loop
        muted
      >
        <source src={"/background.mp4"} type="video/mp4" />
      </video>
      <div className="z-50 flex flex-col text-5xl text-pink-700 font-bold items-center justify-center">
        <div className="p-2 m-8">Yayyyy!!!</div>
        <Image src={"/xoxo.gif"} height={300} width={300} alt=""></Image>
      </div>
    </main>
  );
}
