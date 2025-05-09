"use client";

import cn from "@/utils/cn";
import { VT323, Silkscreen, Dela_Gothic_One } from "next/font/google";
import { useEffect, useState } from "react";

const marqueeFont = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });
const marqueeText = "Suhas Kashyap スハス カシャプ";

const MarqueeText = () => {
  return Array(10)
    .fill(marqueeText)
    .map((text: string, i: number) => (
      <span key={i} className="mr-10">
        {text}
      </span>
    ));
};

export const TouchMarquee = ({ type }: { type: "PC" | "SP" }) => {
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    const handleTouchStart = () => setIsTouching(true);
    const handleTouchEnd = () => setIsTouching(false);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
    };
  }, []);

  return (
    <div className={marqueeFont.className}>
      {type === "SP" ? (
        <div className={"pointer-events-none text-9xl"}>
          <div
            className={cn(
              "absolute inset-0 z-20 -rotate-12 transition-opacity duration-300",
              isTouching ? "opacity-95" : "opacity-0",
            )}
          >
            <div className="animate-marquee_SP absolute -inset-10 mt-[200px] whitespace-nowrap text-nowrap text-columbiaYellow drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <MarqueeText />
            </div>
          </div>

          <div
            className={cn(
              "absolute inset-0 z-20 -rotate-12 transition-opacity duration-300",
              isTouching ? "opacity-85" : "opacity-0",
            )}
          >
            <div className="animate-marquee_SP absolute -inset-10 mt-[320px] whitespace-nowrap text-nowrap text-[#595D68] drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <MarqueeText />
            </div>
          </div>

          <div
            className={cn(
              "absolute inset-0 z-20 -rotate-12 transition-opacity duration-300",
              isTouching ? "opacity-65" : "opacity-0",
            )}
          >
            <div className="animate-marquee_SP absolute -inset-10 mt-[440px] whitespace-nowrap text-nowrap text-gray-100 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
              <MarqueeText />
            </div>
          </div>
        </div>
      ) : (
        <div className="-z-10 -rotate-12 text-nowrap text-[14rem]">
          <div className="animate-marquee absolute -inset-10 -mt-10 whitespace-nowrap text-columbiaYellow opacity-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-opacity duration-300 group-hover:opacity-100">
            <MarqueeText />
          </div>

          <div className="animate-marquee absolute -inset-10 mt-[140px] whitespace-nowrap text-nowrap text-[14rem] text-[#595D68] opacity-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-opacity duration-300 group-hover:opacity-55">
            <MarqueeText />
          </div>

          <div className="animate-marquee absolute -inset-10 mt-[320px] whitespace-nowrap text-nowrap text-[14rem] text-gray-100 opacity-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-opacity duration-300 group-hover:opacity-20">
            <MarqueeText />
          </div>
        </div>
      )}
    </div>
  );
};
