import React from "react";
// import { HiOutlineMailOpen } from "react-icons/hi";
import JotformEmbed from "react-jotform-embed";

const Contact = () => {
  return (
    <div
      name="contact"
      className=" max-w w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 "
    >
      <div className="jot-form  ">
        <JotformEmbed src="https://form.jotform.com/221393739796977" />

        <script
          type="text/javascript"
          src="https://form.jotform.com/jsform/221393739796977"
        ></script>
      </div>

      {/* <form 
        method="POST"
        action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            İletişim
          </p>
          <p className="text-gray-300  py-4">
            {" "}
            Aşağıdaki formu doldurup benimle iletişime geçebilirsin veya bana
            mail atabilirsin.{" "}
          </p>
          <span className="flex text-gray-300  ">
            <HiOutlineMailOpen className="text-2xl" />
            <a href="https://www.google.com/gmail" target="blank">
              <p className="pl-2 text-xl"> dogukanncanerr@gmail.com</p>
            </a>
          </span>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Adın Soyadın"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          style={{ resize: "none" }}
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Mesajını Yazabilirsin."
          maxLength={140}
        ></textarea>
        <button className="text-white border-2 border-pink-600 rounded-lg hover:bg-pink-600 hover:border-pink-600 hover:duration-700 px-4 py-3 my-8 mx-auto flex items-center">
          Gönder
        </button>
      </form> */}
    </div>
  );
};

export default Contact;
