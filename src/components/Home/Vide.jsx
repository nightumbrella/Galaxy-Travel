import React from "react";
import video from "../../assets/Pexels Videos 1851190.mp4";
import space from "../../assets/black-hole.png";
import {IoMdRocket} from "react-icons/io"

const Vide = () => {
  return (
    <div className="w-[100vw] h-[100vh ]">
      <video autoPlay muted loop className="fixed -z-10 object-cover opacity-50">
        <source src={video} />
      </video>

      <div className="items-center flex  h-[100vh] w-[100vw] justify-center flex-col">
        <h1 className="text-7xl mb-8 font-gruppo text-sky-400">Galaxy-Travel</h1>
        <h2 className="uppercase text-4xl flex items-center font-gruppo text-sky-400 mb-20">
          World's first civilian{" "}
          <img src={space} alt="space" className="w-10 h-10" />
          <span className=" font-gruppo text-bold"> Galaxy-Travel </span>
        </h2>


        <div className="flex items-center gap-10">

        <button className="border-2 border-blue-400 px-10 rounded-lg py-3 hover:bg-blue-400 duration-300">Training</button>
        <button className="border-2 border-blue-400  bg-blue-400 rounded-lg px-10 py-3 flex relative overflow-hidden rocket__hero">Launch <IoMdRocket className="text-2xl right-2 rocket absolute"/></button>
        </div>
      </div>



    </div>
  );
};

export default Vide;
