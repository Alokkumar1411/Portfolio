import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "@remixicon/react";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const handlelinkclick = (e, href) => {
    e.preventDefault();
  }
  const togglemenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" nav fixed right-0 left-0 top-4 px-2 md:px-10 lg:px-10 z-50">
      {/* big devices nav */}
      <div className="mx-auto max-w-3xl hidden  items-center justify-center  text-[#ffffff] backdrop-blur-md border border-[#F7E7CE] rounded-full py-2 md:flex lg:flex">
        <div className="flex items-center px-2 gap-90">
          <div>
            <a href="/">
              <span className="uppercase text-white">PORTFOLIO </span>
            </a>
          </div>

          <div>
            <ul className="flex  items-center ">
              <li className="text-sm space-x-8">
                <a className="" href="/">
                  Projects
                </a>
                <a href="/">Skills</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* small devices nav */}
      <div className="py-2 border border-[#F7E7CE] rounded-3xl backdrop-blur-md md:hidden lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <span className="pl-2 uppercase font-light text-xl  text-[#F7E7CE]">
                portfolio
              </span>
            </a>
          </div>

          <div className="flex items-center">
            <button
              className="focus:outline-none text-[#032003] lg:hidden "
              onClick={togglemenu}
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? (
                <RiCloseLine className="m-2 h-6 w-5" />
              ) : (
                <RiMenu3Line className="m-2 h-6 w-5" />
              )}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <ul className="pl-4 text-xl backdrop-blur-lg my-4 flex flex-col gap-6">
            <li className="space-y-2" >
              <a onClick={(e) => handlelinkclick(e,'/' )} className="block text-lg text-start "  href="/">
                Projects
              </a>
              <a  onClick={(e) => handlelinkclick(e,'/' )}  className="block  text-lg text-start "  href="/">Skills</a>
              <a  onClick={(e) => handlelinkclick(e, '/')} className="block  text-lg text-start " href="/">About</a>
              <a  onClick={(e) => handlelinkclick(e,'/')} className="block  text-lg text-start " href="/">Contact</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
