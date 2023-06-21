import React from "react";
import logo from "../assets/logo.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
export default function Footer() {
  return (
    <>
      <div className="footer bg-[#008486] p-[1rem] text-white">
        <div className="grid grid-cols-3 py-[2rem]">
          <div className="">
            <img src={logo} className="w-[10rem] cursor-pointer" />
            <div className="text-[1.2rem] px-[2rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              consectetur.
            </div>
          </div>
          <div className="flex flex-col gap-y-1 px-[2rem]">
            <span className="py-[1rem] text-[2rem] font-bold">Company</span>
            <span className="cursor-pointer text-[1.2rem]">About</span>
            <span className="cursor-pointer text-[1.2rem]">Blog</span>
            <span className="cursor-pointer text-[1.2rem]">Contact Us</span>
            <span className="cursor-pointer text-[1.2rem]">Careers</span>
          </div>
          <div className="flex flex-col gap-y-1 px-[2rem]">
            <span className="py-[1rem] text-[2rem] font-bold">Legal</span>
            <span className="cursor-pointer text-[1.2rem]">Terms of service</span>
            <span className="cursor-pointer text-[1.2rem]">Private Policy</span>
          </div>
        </div>
        <div className="border-t-2 py-[0.3rem] px-[1rem] flex justify-between items-center">
          <span className="text-[1.1rem]">
            © Copyright 2023 | ctruh technologies private limited
          </span>
          <span className="flex text-[1.6rem] gap-x-5 cursor-pointer justify-center items-center">
            <AiFillInstagram />
            <BsFacebook />
            <AiFillLinkedin />
          </span>
        </div>
      </div>
    </>
  );
}
