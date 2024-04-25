import logo from "../../assets/logo.png";
import { GoHome } from "react-icons/go";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import {
  MdLightbulbOutline,
  MdOutlineVolumeUp,
  MdOutlineFullscreen,
} from "react-icons/md";
import { IoReload, IoAddCircle } from "react-icons/io5";

const Function = () => {
  return (
    <div className=" max-w-screen-xl mx-auto space-y-5">
      <div className="flex gap-2 text-center items-center text-[#696671] font-medium">
        <GoHome className="text-xl" />
        <FaChevronRight className="text-[#06286E]" />
        <p>Flashcard</p>
        <FaChevronRight className="text-[#06286E]" />
        <p>Mathematics</p>
        <FaChevronRight className="text-[#06286E]" />
        <p className="text-[#06286E] font-semibold">Relations and Functions</p>
      </div>
      <h1 className="text-[#06286E] font-bold text-3xl">
        Relations and Functions ( Mathematics )
      </h1>
      <div className="flex justify-center items-center">
        <ul className="flex gap-10 text-[#696671]">
          <li className="text-[#06286E] font-bold">Study</li>
          <li>Quiz</li>
          <li>Test</li>
          <li>Game</li>
          <li>Others</li>
        </ul>
      </div>
      <div className=" max-w-[712px] mx-auto h-96 rounded-3xl bg-gradient-to-r from-[#06286E] to-[#164EC0]">
        <div className="text-white max-w-2xl mx-auto p-5 ">
          <div className="flex justify-between text-3xl">
            <MdLightbulbOutline />
            <MdOutlineVolumeUp />
          </div>
          <div className="w-full flex justify-center items-center font-bold text-4xl">
            <p className="mt-20">9 + 6 + 7x - 2x - 3</p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto flex justify-between text-[#06286E] font-bold text-3xl">
        <IoReload />
        <div className="flex gap-10 justify-between text-center items-center">
          <button className="w-10 h-10 rounded-full bg-blue-800 text-white flex justify-center items-center">
            <FaChevronLeft />
          </button>
          <p className="text-black">01/10</p>
          <button className="w-10 h-10 rounded-full text-white flex justify-center items-center bg-gradient-to-r from-[#06286E] to-[#164EC0]">
            <FaChevronRight />
          </button>
        </div>
        <MdOutlineFullscreen />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <div className="rounded-full h-10 w-10 bg-white shadow-2xl">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs">Published By</p>
            <h3 className=" text-[#06286E] text-xl">
              Hygge<span className=" font-bold">X</span>
            </h3>
          </div>
        </div>
        <div className="flex justify-center text-center items-center text-xl gap-2 text-[#06286E]">
          <IoAddCircle className=" text-3xl" />
          <p className="font-semibold">Create Flashcard</p>
        </div>
      </div>
    </div>
  );
};

export default Function;
