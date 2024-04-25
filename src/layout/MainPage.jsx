import Navbar from "../shared/Navbar";
import Faq from "./frequently asked questions/Faq";

import Function from "./function/Function";

const MainPage = () => {
  return (
    <div className="space-y-10 bg-[#f9f9f9]">
      <Navbar />
      <Function />
      <Faq />
    </div>
  );
};

export default MainPage;
