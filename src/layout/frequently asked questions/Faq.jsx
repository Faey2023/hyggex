import { FaChevronDown } from "react-icons/fa";
import "../../shared/text.css";
const Faq = () => {
  return (
    <div className=" max-w-screen-xl mx-auto space-y-10">
      <h1 className=" uppercase font-bold text-5xl text">faq</h1>
      <div className="flex flex-col gap-5">
        {/* faq 1 */}
        <div className="border border-[#06286e] rounded-xl bg-white flex justify-between px-5 py-2 items-center text-center font-semibold">
          <p>Can education flashcards be used for all age groups?</p>
          <FaChevronDown />
        </div>
        {/* faq 2 */}
        <div className="border border-[#06286e]  rounded-xl bg-white flex justify-between px-5 py-2 items-center text-center font-semibold">
          <p>How do education flashcards work?</p>
          <FaChevronDown />
        </div>
        {/* faq 3 */}
        <div className=" border border-[#06286e]  rounded-xl bg-white flex justify-between px-5 py-2 items-center text-center font-semibold">
          <p>Can education flashcards be used for test preparation?</p>
          <FaChevronDown />
        </div>
      </div>
    </div>
  );
};

export default Faq;
