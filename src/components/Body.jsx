import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";

export default function Body() {
  return (
    <>
    <div className="overlay z-[100] text-white bg-none">
      <span className="bg-none flex items-center justify-center font-bold sm:text-[6rem] text-[3.5rem] absolute sm:top-[25%] sm:left-[30%] top-[25%] left-[8.5%]">
        Welcome To <br /> Ctruh
      </span>
    </div>
    <div className="overlay_subtext z-[100] bg-none sm:text-[1.5rem] text-[1.2rem] font-medium absolute sm:top-[66%] sm:left-[29%] top-[52%] left-[0%]">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Commodi ratione animi voluptatem! Vel, quos consequuntur!
    </div>
    <button className="overlay_btn z-[100] text-white rounded-[2rem] px-[1rem] py-[0.2rem] text-[1.5rem] font-bold absolute sm:bottom-[13%] sm:left-[45%] bottom-[20%] left-[28%]">
      Join Waitlist
    </button>
    <div className='absolute xs:bottom-10 bottom-5 w-full flex justify-center items-center z-[100] bg-none'>
        <a href='#about' className="bg-none">
          <div className='w-[35px] h-[64px] rounded-3xl border-[#3aafab] border-4 flex justify-center items-start p-2 bg-none'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-[1rem] h-[0.7rem] rounded-full bg-[#3aafab] mb-1 bg-none shadow-lg'
            />
          </div>
        </a>
      </div>
    </>
  );
}
