"use client";
import Link from "next/link";
import { useSearchParams, ReadonlyURLSearchParams } from "next/navigation";

import { useState, useEffect, Suspense } from "react";

import { Position } from "@/lib/types";
import { Background } from "./components/Background";

const PageRender: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  const params: ReadonlyURLSearchParams = useSearchParams();

  const changePos = (): void => {
    const newX: number = Math.random() * (window.innerWidth - 100);
    const newY: number = Math.random() * (window.innerHeight - 100);
    setPosition({ x: newX, y: newY });
  };

  const buttonPos: React.CSSProperties =
    position.x === 0 && position.y === 0
      ? {}
      : { position: "absolute", left: position.x, top: position.y };

  const question: JSX.Element = name ? (
    <>
      <div className="text-center">{name}, will you be my valentines?</div>
    </>
  ) : (
    <>
      <div className="text-center">Will you be my valentines?</div>
    </>
  );

  useEffect(() => {
    setName(params.get("name") as string);
  }, [params]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Background />
        <div className="z-50 flex flex-col text-5xl text-pink-700 font-bold">
          {question}
          <div className="text-3xl flex items-center justify-between p-12">
            <Link href={"/yay"}>
              <button className="outline rounded-xl px-4 py-2 shadow-lg hover:animate-bounce">
                Yes
              </button>
            </Link>
            <button
              onMouseEnter={changePos}
              onMouseDown={changePos}
              style={{ ...buttonPos, transition: "all 0.3s" }}
              className="outline rounded-xl px-4 py-2 shadow-lg"
            >
              No
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default function Home() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <PageRender />
    </Suspense>
  );
}
