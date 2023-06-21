import React from "react";
import logo from "../assets/logo.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer bg-[#008486] p-[1rem] text-white">
        <div className="grid sm:grid-cols-3 grid-cols-1 py-[2rem]">
          <div className="">
            <a href="https://www.ctruh.com/" target="black">
              <img src={logo} className="w-[10rem] cursor-pointer hover:w-[10.2rem]"/>
            </a>
            <div className="text-[1.2rem] px-[2rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              consectetur.
            </div>
          </div>
          <div className="flex flex-col gap-y-1 px-[2rem]">
            <span className="py-[1rem] text-[2rem] font-bold">Company</span>
            <span className="cursor-pointer text-[1.2rem]" onClick={()=> navigate('/aboutus')}>About</span>
            <span className="cursor-pointer text-[1.2rem]">Blog</span>
            <span className="cursor-pointer text-[1.2rem]">Contact Us</span>
            <span className="cursor-pointer text-[1.2rem]">Careers</span>
          </div>
          <div className="flex flex-col gap-y-1 px-[2rem]">
            <span className="py-[1rem] text-[2rem] font-bold">Legal</span>
            <span className="cursor-pointer text-[1.2rem]">
              Terms of service
            </span>
            <span className="cursor-pointer text-[1.2rem]">Private Policy</span>
          </div>
        </div>
        <div className="border-y-2 py-[0.3rem] px-[1rem] sm:flex justify-between items-center">
          <span className="sm:text-[1.1rem] text-[1rem]">
            © Copyright 2023 | ctruh technologies private limited
          </span>
          <span className="flex text-[1.6rem] sm:gap-x-5 gap-x-20 cursor-pointer justify-center items-center sm:my-[0rem] mt-[2rem] sm:shadow-none shadow-xl">
            <a href="https://www.instagram.com/hello_ctruh/" target="black">
              <AiFillInstagram className="hover:text-red-300" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100090491642974"
              target="black"
            >
              <BsFacebook className="hover:text-red-300" />
            </a>
            <a
              href="https://www.linkedin.com/company/ctruh/?originalSubdomain=in"
              target="black"
            >
              <AiFillLinkedin className="hover:text-red-300" />
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
