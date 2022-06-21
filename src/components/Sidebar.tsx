import { Link, useLocation } from "react-router-dom";

import { FC } from "react";
import { resizeImage } from "../shares/constants";

interface SidebarProps {
  sidebarActive: boolean;
  setSidebarActive: (state: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ sidebarActive, setSidebarActive }) => {
  const location = useLocation();


  return (
    <>
      <div
        className={`flex-shrink-0 sm:sticky left-auto right-full sm:!right-0 sm:!left-0 fixed top-0 flex flex-col items-stretch py-10 pl-5 xl:pl-10 pr-0 w-[90vw] max-w-[288px] sm:max-w-none sm:w-16 xl:w-72 border-r border-gray-800 h-screen overflow-y-auto z-10 bg-dark sm:bg-transparent sm:!translate-x-0 transition-all duration-500 ${
          sidebarActive ? "translate-x-full" : "translate-x-0"
        }`}
      >
        <div className="mt-0 sm:mt-4 xl:mt-0 block sm:flex flex-col gap-0 sm:gap-4 xl:block xl:gap-0">
          <p className="text-gray-400 uppercase mt-10 mb-4 block sm:hidden xl:block">
            Menu
          </p>

          <div className="flex flex-col items-stretch gap-3">
            <Link
              to="/"
              className={`flex items-center gap-2 transition ${
                location.pathname === "/"
                  ? "text-primary border-r-4 border-primary hover:brightness-125"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <i className="fas fa-home text-xl w-[24px]"></i>
              <p className="block sm:hidden xl:block">Home</p>
            </Link>

            <Link
              to="/discovery"
              className={`flex items-center gap-2 transition ${
                location.pathname === "/discovery"
                  ? "text-primary border-r-4 border-primary hover:brightness-125"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <i className="fas fa-compass text-xl w-[24px]"></i>
              <p className="block sm:hidden xl:block">Discovery</p>
            </Link>

            <Link
              to="/explore"
              className={`flex items-center gap-2 transition ${
                location.pathname === "/explore"
                  ? "text-primary border-r-4 border-primary hover:brightness-125"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <i className="fas fa-desktop text-xl w-[24px]"></i>
              <p className="block sm:hidden xl:block">Explore</p>
            </Link>

            <Link
              to="/history"
              className={`flex items-center gap-2 transition ${
                location.pathname === "/history"
                  ? "text-primary border-r-4 border-primary hover:brightness-125"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <i className="fas fa-history text-xl w-[24px]"></i>
              <p className="block sm:hidden xl:block">History</p>
            </Link>

            <Link
              to="/search"
              className={`md:!hidden flex items-center gap-2 transition ${
                location.pathname === "/search"
                  ? "text-primary border-r-4 border-primary hover:brightness-125"
                  : "text-gray-400 hover:text-gray-300"
              }`}
            >
              <i className="fas fa-search text-xl w-[24px]"></i>
              <p className="block sm:hidden xl:block">Search</p>
            </Link>
          </div>

          <p className="text-gray-400 uppercase mt-10 mb-4 block sm:hidden xl:block">
            Personal
          </p>

        </div>
      </div>
      <div
        onClick={() => setSidebarActive(false)}
        className={`bg-[#00000080] z-[5] fixed top-0 left-0 w-full h-full transition-all duration-500 sm:!opacity-0 ${
          sidebarActive ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
