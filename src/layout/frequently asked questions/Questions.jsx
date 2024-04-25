import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "../../shared/text.css";
import { useState } from "react";

const Questions = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="border border-[#06286e] rounded-xl">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="font-semibold">{question}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <div className="p-4">{answer}</div>}
    </div>
  );
};

export default Questions;
