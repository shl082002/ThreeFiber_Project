import { useState } from "react";
import { IoIosCube } from "react-icons/io"; //nav-icon
import { GiHamburgerMenu } from "react-icons/gi"; //menu-icon
import { AiOutlineClose } from "react-icons/ai"; //close-icon
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="text-white bg-none h-max mx-auto sm:px-[2rem] px-[0.5rem] py-[0.2rem] flex items-center justify-between fixed top-0 w-full z-10 shadow-md">
      <IoIosCube className="nav_icon sm:text-[5rem] text-[4.5rem] bg-none" />
      <ul className="nav_list list-none hidden sm:flex  gap-10 bg-none text-[1.6rem] px-[1rem]">
        <li
          className="bg-none cursor-pointer hover:text-red-300 hover:text-[1.65rem] "
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="bg-none cursor-pointer hover:text-red-300 hover:text-[1.65rem] "
          onClick={() => navigate("/aboutus")}
        >
          About
        </li>
      </ul>
      <div className="sm:hidden flex text-[3rem] text-[#3aafab] px-[0.5rem]">
        {toggle ? (
          <AiOutlineClose onClick={() => setToggle(!toggle)} />
        ) : (
          <GiHamburgerMenu onClick={() => setToggle(!toggle)} />
        )}
      </div>
      <div
        className={`${
          !toggle ? "hidden" : "flex"
        } z-10 absolute top-20 right-0 shadow-lg`}
      >
        <ul className="nav_list list-none sm:hidden gap-10 bg-none sm:text-[1.6rem] text-[1.4rem] px-[1rem]">
          <li
            className="bg-none cursor-pointer hover:text-red-300 hover:text-[1.65rem] "
            onClick={() => {
              setToggle(!toggle)
              navigate('/')
            }}
          >
            Home
          </li>
          <li
            className="bg-none cursor-pointer hover:text-red-300 hover:text-[1.5rem] "
            onClick={() => {
              setToggle(!toggle)
              navigate('/aboutus')
            }}
          >
            About
          </li>
        </ul>
      </div>
    </nav>
  );
}
