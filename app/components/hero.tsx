import React from "react";
import { useState, useRef, useEffect } from "react";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const images = [
    "https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/mma_underground_banner.webp",
    "https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/northwest_herald.webp",
    "https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/gym_front.jpg"
  ];

  function resetTimeout() {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(
          () =>
              setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
              ), 2500
      );

      return () => {
          resetTimeout();
      };
  }, [index, images.length]);

  return (
    <section id="home" className="max-h-[1195px]">
      <div className="md:h-screen flex flex-col-reverse lg:flex-row py-3 md:py-6">
        <div className="lg:h-full lg:w-1/2 flex items-center md:pr-6">
          <div className="lg:max-w-2xl flex flex-col gap-4 lg:gap-8 p-4">
            <h1 className="text-4xl lg:text-6xl font-medium">
              No matter where you're coming from, we WILL make a champion out of you!
            </h1>
            <h2 className="text-lg lg:text-2xl font-extralight">
              Distilled from centuries of martial arts knowledge from around the world, we teach
              you what the best use to beat the best.
            </h2>
            <button className="lg:mr-auto rounded-full border-2 border-black py-3 px-6 lg:inline-block hover:border-pear hover:bg-pear hover:text-white font-semibold transition-colors delay-75 duration-200">
              See Class Schedule
            </button>
          </div>
        </div>
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center bg-zinc-100 rounded-3xl overflow-hidden max-h-[1147px]">
          <img
            src={images[0]}
            alt="MMA Underground: Where Champions Like You Train"
          />
        </div>
      </div>
    </section>
  );
}
