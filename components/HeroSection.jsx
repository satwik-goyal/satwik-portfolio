"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-700">
              Hello,I am{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Satwik",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                // Same substring at the start will only be typed out once, initially
                "a Software Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Machine Learning Engineer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Data Scientist",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            sint. hello
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full sm:mr-4 mb-2 bg-white hover:bg-slate-200 text-black">
              Hire Me!
            </button>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-cyan-500 to-blue-800 text-white border border-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/avatar.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
