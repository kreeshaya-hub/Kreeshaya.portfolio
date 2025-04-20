import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export default function WebDeveloper() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Navigation />
        <div className="flex flex-col items-center justify-center flex-1 gap-8">
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
            Web Developer
          </h1>
          <div className="animate-fade-in">
            {/* Add your web developer content here */}
          </div>
        </div>
      </div>
    </Card>
  );
}
