import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <>
      {/* main div */}
      <div className="px-5 flex justify-between">
        {/* logo div */}
        <div className="flex gap-2 text-center items-center">
          <img src={logo} alt="logo for hyggex" className=" w-20 h-20" />
          <h3 className=" text-[#06286E] text-xl font-medium -mt-2">Hyggex</h3>
        </div>
        <div className="flex text-center">
          <ul className="flex gap-10 text-center items-center">
            <li>Home</li>
            <li>Flashcard</li>
            <li>Contact</li>
            <li>FAQ</li>
            <li>
              <button className=" rounded-full px-5 py-1.5 bg-gradient-to-r from-[#06286E] to-[#164EC0] text-white">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
