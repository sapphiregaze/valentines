"use client";
import Image from "next/image";

import { Suspense } from "react";

import { Background } from "../components/Background";

const PageRender = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Background />
        <div className="z-50 flex flex-col text-5xl text-pink-700 font-bold items-center justify-center">
          <div className="p-2 m-8">Yayyyy!!!</div>
          <Image src={"/xoxo.gif"} height={300} width={300} alt=""></Image>
        </div>
      </main>
    </>
  );
};

export default function YayPage() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <PageRender />
    </Suspense>
  );
}
