import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Git from "../assets/git.png";
import Scss from "../assets/scss.png";

const Skills = () => {
  return (
    <div id="skills" className=" pt-20">
      <div name="skills" className=" text-gray-300 ">
        {/*container*/}
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300 ">
              Yeteneklerim
            </p>
            <p className="py-4">
              Şu anda JavaScript, React ve TailwindCSS ile çalışıyorum.
              Aşağıdaki teknolojiler hakkında bilgi sahibiyim: HTML, CSS,
              TailwindCSS, JavaScript, React, Git, Github.
            </p>
          </div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
              <img className="w-20 mx-auto " src={HTML} alt="HTML icon" />
              <p className="py-2">HTML</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
              <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
              <p className="py-2">CSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
              <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
              <p className="py-2">React.Js</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
              <img
                className="w-20 mx-auto"
                src={JavaScript}
                alt="Javascript icon"
              />
              <p className="py-2">JavaScript</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
              <img
                className="w-20 mx-auto"
                src={Tailwind}
                alt="Tailwind icon"
              />
              <p className="py-2">TailwindCSS</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
              <img className="w-20 mx-auto" src={Scss} alt="Scss icon" />
              <p className="py-5">Scss</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
              <img className="w-20 mx-auto" src={Git} alt="CSharp icon" />
              <p className="py-2">Git</p>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 py-4">
              <img className="w-20 mx-auto" src={GitHub} alt="Github icon" />
              <p className="py-2">Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
