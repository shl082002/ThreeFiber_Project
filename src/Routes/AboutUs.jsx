import React from "react";
import StarsCanvas from "../components/canvas/Stars";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-screen bg-black flex items-center justify-center">
        <StarsCanvas />
        <span className="text-white bg-none text-center sm:px-[5rem] md:px-[8rem] px-[1rem] sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] text-[1.5rem]">
          Metaverse is a decentralized version of the internet where people can
          create, share, and monetize their own virtual worlds. Ctruh is
          predominately focused on making content creation for the metaverse
          trivially simple for brands and individuals at scale. We're looking to
          disrupt the content creation space for AR | VR | XR with our web-based
          no-code editor.
        </span>
      </div>
    </>
  );
};

export default AboutUs;
