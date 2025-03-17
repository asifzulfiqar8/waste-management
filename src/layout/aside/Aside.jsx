import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { ArrowIcon } from "../../assets/svgs/icon";
import { pages } from "./pages";

const Aside = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const { pathname } = useLocation();

  const asideToggleHandler = () => {
    setIsAsideOpen((prev) => !prev);
  };

  // Define the section order
  const sectionsOrder = ["Main", "Reports", "Settings"];

  // Group pages by section
  const groupedPages = pages.reduce((acc, page) => {
    if (!acc[page.section]) {
      acc[page.section] = [];
    }
    acc[page.section].push(page);
    return acc;
  }, {});

  return (
    <div
      className={`h-full  py-8 relative transition-all duration-500 rounded-lg xl:rounded-[0] bg-white border-r px-4 ${isAsideOpen ? "w-[90px]" : "w-[220px]"
        }`}
    >
      <div className="flex items-center gap-1 justify-center overflow-hidden">
        <img src={logo} alt="logo" className="w-[40px]" />
        <h6
          className={`text-lg font-semibold text-primary leading-none transition-all duration-500 text-nowrap ${isAsideOpen ? "w-0 opacity-0 invisible" : "w-full"
            }`}
        >
          Waste <br /> Management
        </h6>
      </div>
      <div
        className={`hidden xl:block absolute top-10 cursor-pointer transition-all duration-300 ${isAsideOpen ? "rotate-180 right-[-13%]" : "rotate-0 right-[-5%]"
          }`}
        onClick={asideToggleHandler}
      >
        <ArrowIcon />
      </div>
      <div className="my-4 md:my-6 bg-primary h-[1px] w-full px-4"></div>
      <section className="  h-[calc(100vh-150px)] p-1 overflow-auto overflow-x-hidden scroll-0">

        {sectionsOrder.map((section) => (
          <div key={section} className="mb-6">
            {!isAsideOpen && (
              <h3 className="text-xs font-bold text-gray-500 uppercase my-2">
                {section}
              </h3>
            )}
            <div
              className={`flex flex-col justify-center gap-1 overflow-hidden ${isAsideOpen ? "items-center" : "items-start"
                }`}
            >
              {groupedPages[section]?.map((page) => {
                const isActive = pathname === page.link;
                return (
                  <Link
                    key={page.id}
                    to={page.link}
                    className={`relative flex items-center w-full min-w-fit h-[40px] px-2 cursor-pointer transition-all rounded-lg duration-300 ${isAsideOpen ? "gap-0 justify-center" : "gap-2"
                      } ${isActive && "bg-primary"}`}
                  >
                    <div className="text-[20px]">
                      {React.cloneElement(page.icon, { isActive })}
                    </div>
                    <p
                      className={`text-sm text-nowrap text-[#69776D] font-semibold capitalize transition-opacity duration-300 !leading-none ${isActive && "!text-white"
                        } ${isAsideOpen ? "opacity-0 w-0" : "opacity-100 w-auto"}`}
                    >
                      {page.title}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </section>

    </div>
  );
};

export default Aside;
