"use client";
import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import Liicon from "./liicon";

const EduDetils = ({ school, course, time, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between"
    >
      <Liicon reference={ref} />
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text4xl ">{course}</h3>
        <span className="capitalize font-medium text-white/70">
          {time} | {school}
        </span>
        <p className="font-medium w-full">{info}</p>
      </div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <section id="Education" className="my-24 px-4 sm:px-0">
      <div>
        <h2 className="font-bold text-4xl sm:text-8xl mb-8 sm:mb-32 text-center">
          Education
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative">
          <motion.div
            style={{ scaleY: scrollYProgress }} // Set the initial scaleY to 0
            className="absolute left-9 top-0 w-[4px] h-full bg-white origin-top"
          />

          <ul className="flex flex-col items-start justify-between ml-0 sm:ml-4">
            <EduDetils
              school="University of Manchester"
              course="MEng in Computer Science"
              time="2024-2025"
              info="Expected Grade to be first class"
            />
            <EduDetils
              school="University of Manchester"
              course="BEng in Computer Science"
              time="2021-2024"
              info="Expected Grade to be first class"
            />
            <EduDetils
              school="University of Manchester"
              course="BEng in Computer Science"
              time="2021-2024"
              info="Expected Grade to be first class"
            />
            <EduDetils
              school="University of Manchester"
              course="BEng in Computer Science"
              time="2021-2024"
              info="Expected Grade to be first class"
            />
            <EduDetils
              school="University of Manchester"
              course="BEng in Computer Science"
              time="2021-2024"
              info="Expected Grade to be first class"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;
