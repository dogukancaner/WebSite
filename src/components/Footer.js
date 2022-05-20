import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-col ">
      <div className=" text-gray-300 lg:hidden flex justify-center gap-4 my-6 pb-6">
        <a href="https://www.linkedin.com/in/dogukancaner/" target="blank">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/dogukancaner" target="blank">
          <FaGithub size={30} />
        </a>
        <a href="https://www.instagram.com/dogukanncaner/ " target="blank">
          <FaInstagram size={30} />
        </a>
        <a href="https://twitter.com/dogukanncaner" target="blank">
          <FaTwitter size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
