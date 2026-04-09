import React from "react";

const Nav = () => {
  return (
    <nav className=" nav fixed right-0 left-0 top-4 px-10 z-50">
      <div className="mx-auto max-w-3xl hidden  items-center justify-center  text-white bg-[#081c18] rounded-full py-2 lg:flex">
        <div className="flex items-center gap-100">
          <div>
            <a href="/">
              <span className="uppercase text-white">PORTFOLIO </span>
            </a>
          </div>

          <div>
            <ul className="flex  items-center " >
                <li className="text-sm space-x-8">
                    <a className="" href="/">Projects</a>
                    <a href="/">Skills</a>
                    <a href="/">About</a>
                    <a href="/">Contact</a>
                </li>
            </ul>
          </div>
        </div>
      </div>

    </nav>
  );
};

export default Nav;
