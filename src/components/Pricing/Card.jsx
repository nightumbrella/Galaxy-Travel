import React from "react";
import saturn from "../../assets/saturn(1).png";
import { BiPlanet } from "react-icons/bi";
import { CiCoffeeBean } from "react-icons/ci";
import { WiDaySunny } from "react-icons/wi";
import { VscRocket } from "react-icons/vsc";
import Hero from "./Hero";
import { IoMdRocket } from "react-icons/io";
import gif from "../../assets/mouse.gif";

const Card = () => {
  return (
    <div className="relative">
      <Hero />

      <div className="flex gap-20 justify-center mt-12">
        <div className="flex items-center justify-center h-[100vh] ">
          <div className="w-[300px] h-[500px] ">
            <div className="w-full h-full hero">
              <div className="w-full h-full relative border rounded-xl border-gray-500 card ">
                <div className="card-front w-full h-full absolute rounded-xl"></div>
                <div className="card-back w-full relative h-full flex flex-col  items-center rounded-xl">
                  <h1 className="pb-16 pt-10 text-4xl font-gruppo">-Basic-</h1>
                  <h1 className="mb-10 text-6xl text-bold">1 SPT</h1>
                  <div className=" flex flex-col gap-3 mb-10">
                    <h2 className="flex items-center">
                      <BiPlanet className="mr-5 text-xl" /> Free Support 24/7
                    </h2>
                    <h2 className="flex items-center">
                      <WiDaySunny className="mr-5 text-xl" />
                      3days
                    </h2>
                    <h2 className="flex items-center">
                      <VscRocket className="mr-5 text-xl" /> Featured
                    </h2>
                    <h2 className="flex items-center">
                      <CiCoffeeBean className="mr-5 text-xl" /> Free Coffee
                    </h2>
                  </div>
                  <button className="border-2 border-blue-400  bg-blue-400 rounded-lg px-10 py-3 flex relative overflow-hidden rocket__hero">
                    Launch{" "}
                    <IoMdRocket className="text-2xl right-2 rocket absolute" />
                  </button>

                  <img
                    src={saturn}
                    alt="images"
                    className="absolute -z-10 top-16 opacity-20 w-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-[100vh]">
          <div className="w-[300px] h-[500px]">
            <div className="w-full h-full hero">
              <div className="w-full h-full relative border rounded-xl border-gray-500 card ">
                <div className="card-front w-full h-full absolute rounded-xl"></div>
                <div className="card-back w-full relative h-full flex flex-col  items-center rounded-xl">
                  <h1 className="pb-16 pt-10 text-4xl font-gruppo">-Medium-</h1>
                  <h1 className="mb-10 text-6xl text-bold">3 SPT</h1>
                  <div className=" flex flex-col gap-3 mb-10">
                    <h2 className="flex items-center">
                      <BiPlanet className="mr-5 text-xl" /> Free Support 24/7
                    </h2>
                    <h2 className="flex items-center">
                      <WiDaySunny className="mr-5 text-xl" />
                      3days
                    </h2>
                    <h2 className="flex items-center">
                      <VscRocket className="mr-5 text-xl" /> Featured
                    </h2>
                    <h2 className="flex items-center">
                      <CiCoffeeBean className="mr-5 text-xl" /> Free Coffee
                    </h2>
                  </div>
                  <button className="border-2 border-blue-400  bg-blue-400 rounded-lg px-10 py-3 flex relative overflow-hidden rocket__hero">
                    Launch{" "}
                    <IoMdRocket className="text-2xl right-2 rocket absolute" />
                  </button>

                  <img
                    src={saturn}
                    alt="images"
                    className="absolute -z-10 top-16 opacity-20 w-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-[100vh]">
          <div className="w-[300px] h-[500px]">
            <div className="w-full h-full hero">
              <div className="w-full h-full relative border rounded-xl border-gray-500 card ">
                <div className="card-front w-full h-full absolute rounded-xl"></div>
                <div className="card-back w-full relative h-full flex flex-col  items-center rounded-xl">
                  <h1 className="pb-16 pt-10 text-4xl font-gruppo">
                    -Premium-
                  </h1>
                  <h1 className="mb-10 text-6xl text-bold">9 SPT</h1>
                  <div className=" flex flex-col gap-3 mb-10">
                    <h2 className="flex items-center">
                      <BiPlanet className="mr-5 text-xl" /> Free Support 24/7
                    </h2>
                    <h2 className="flex items-center">
                      <WiDaySunny className="mr-5 text-xl" />
                      3days
                    </h2>
                    <h2 className="flex items-center">
                      <VscRocket className="mr-5 text-xl" /> Featured
                    </h2>
                    <h2 className="flex items-center">
                      <CiCoffeeBean className="mr-5 text-xl" /> Free Coffee
                    </h2>
                  </div>
                  <button className="border-2 border-blue-400  bg-blue-400 rounded-lg px-10 py-3 flex relative overflow-hidden rocket__hero">
                    Launch{" "}
                    <IoMdRocket className="text-2xl right-2 rocket absolute" />
                  </button>

                  <img
                    src={saturn}
                    alt="images"
                    className="absolute -z-10 top-16 opacity-20 w-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-10 left-2/4 -translate-x-2/4 border rounded-full border-4 border-slate-700">
        <img
          src={gif}
          alt="mouse"
          className="w-36 "
        />
      </div>
    </div>
  );
};

export default Card;
