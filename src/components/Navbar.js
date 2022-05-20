import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] z-50 flex justify-between items-center px-4  bg-[#0a192f] text-gray-300">
      <div className="gradient-box  ">
        <div className="rounded-lg shadow-2xl py-1 px-2  bg-[#0a192f] ">
          <p className="text-2xl sm:text-3xl text-gray-300  "> Doğukan Caner</p>
          {/* <p className='text-4xl sm:text-5xl text-[#8892b8] border-b-2 rounded-lg border-pink-500 pb-1.5'> Doğukan Caner</p> */}
        </div>
      </div>

      {/* menu */}
      <ul className=" hidden md:flex ">
        <li className=" hover:border-b-2  hover:border-pink-600 hover:my-2   hover:duration-500">
          <Link to="home" smooth={true} duration={500}>
            Anasayfa
          </Link>
        </li>
        <li className=" hover:border-b-2  hover:border-pink-600 hover:my-2 hover:duration-500">
          <Link to="about" smooth={true} duration={500}>
            Hakkımda
          </Link>
        </li>
        <li className=" hover:border-b-2 hover:border-pink-600 hover:my-2  hover:duration-500">
          <Link to="skills" smooth={true} duration={500}>
            Yeteneklerim
          </Link>
        </li>
        <li className=" hover:border-b-2 hover:border-pink-600 hover:my-2  hover:duration-500">
          <Link to="contact" smooth={true} duration={500}>
            İletişim
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? (
          <FaBars className="text-2xl cursor-pointer  " />
        ) : (
          <FaTimes className="text-2xl cursor-pointer" />
        )}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:border-b-2 hover:border-pink-600 hover:duration-500">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Anasayfa
          </Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-2 hover:border-pink-600 hover:duration-500">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Hakkımda
          </Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-2 hover:border-pink-600 hover:duration-500">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Yeteneklerim
          </Link>
        </li>
        <li className="py-6 text-4xl hover:border-b-2 hover:border-pink-600 hover:duration-500">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            İletişim
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/dogukancaner/"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/dogukancaner"
              target="blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.instagram.com/dogukanncaner/"
              target="blank"
            >
              Instagram <BsInstagram size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://twitter.com/dogukanncaner"
              target="blank"
            >
              Twitter <BsTwitter size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
