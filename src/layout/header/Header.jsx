import React, { useEffect, useRef, useState } from "react";
import { IoChevronForwardOutline, IoLogOutOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import Aside from "../aside/Aside";
import Notification from "./Notification";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiChevronDown } from "react-icons/hi";
import { RingIcon } from "../../assets/svgs/icon";

const Header = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const notificationRef = useRef();
  const profileRef = useRef();
  const { pathname } = useLocation();
  const pathSplit = pathname.split("/");
  const page = pathSplit[pathSplit.length - 1];
  const pageName = page.split("-").join(" ");
  console.log("page", pageName);

  const mobileNavHandler = () => setMobileNav(!mobileNav);

  const notificationOpenHandler = (e) => {
    setIsNotificationOpen(!isNotificationOpen);
    if (profileRef.current && notificationRef.current.contains(e.target)) {
      setIsProfileOpen(false);
    }
  };

  const profileOpenHandler = (e) => {
    setIsProfileOpen(!isProfileOpen);
    if (notificationRef.current && profileRef.current.contains(e.target)) {
      setIsNotificationOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setIsNotificationOpen(false);
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [notificationRef, profileRef]);

  return (
    <header className="h-[180px] pl-4 pb-4 flex flex-col justify-between gap-6">
      <div className="flex items-center justify-between gap-6">
        <div>
          <div
            className="bg-primary p-2 rounded-md cursor-pointer block xl:hidden"
            onClick={mobileNavHandler}
          >
            <RxHamburgerMenu color="#fff" fontSize={20} />
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white py-2 px-6 rounded-bl-[20px]">
          <div className="relative">
            <div
              className="cursor-pointer"
              onClick={notificationOpenHandler}
              ref={notificationRef}
            >
              <RingIcon />
              <p className="absolute top-0 left-[-1px] text-[8px] font-light text-white bg-[#ff4242] w-3 h-3 rounded-full grid place-items-center">
                9
              </p>
            </div>
            <div
              className={`absolute top-[35px] right-[-12rem] sm:right-0 z-10 w-[300px] sm:w-[320px] overflow-y-scroll border-2 border-[#e4e4e43b] shadow-md bg-white rounded-lg custom-scroll transition-all duration-700 ${
                isNotificationOpen
                  ? "h-[300px] opacity-100"
                  : "h-0 invisible opacity-0"
              }`}
            >
              <Notification />
            </div>
          </div>
          <div className="flex items-center gap-2 relative">
            <img
              src="https://placehold.co/600x400/white/18bc9c?text=AZ"
              alt="image"
              className="w-9 h-9 rounded-full object-cover border border-[#040404CC]"
            />
            <div>
              <h6 className="text-[#040404CC] text-sm leading-none">
                Alex Zamora
              </h6>
              <p className="text-[#040404CC] text-xs">Contractor</p>
            </div>
            <div
              onClick={profileOpenHandler}
              ref={profileRef}
              className={`transition-all duration-400 cursor-pointer ${
                isProfileOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <HiChevronDown color="#040404CC" fontSize={20} />
            </div>
            <div
              onClick={profileOpenHandler}
              className={`absolute top-[45px] right-0 border-2 border-[#e4e4e43b] w-[150px] shadow-md rounded-lg custom-scroll transition-all duration-400 ${
                isProfileOpen
                  ? "h-[76px] opacity-100"
                  : "h-0 invisible opacity-0"
              }`}
            >
              <Profile />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-lg md:text-2xl text-white font-semibold capitalize basis-[30%]">
          {page === "" ? "Dashboard" : page}
        </h2>
      </div>
      <div
        className={`block xl:hidden fixed w-full h-full inset-0 bg-[#00000071] z-50 transition-all duration-500 ${
          mobileNav
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileNav(false)}
      >
        <div
          className={`absolute top-3 left-3 h-full transition-transform duration-500 ${
            mobileNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Aside />
        </div>
      </div>
    </header>
  );
};

export default Header;

const Profile = () => {
  return (
    <div className="w-full">
      <Link className="flex items-center justify-between gap-4 px-2 py-2 border-b bg-white rounded-t-md hover:bg-[#b6feef]">
        <h6 className="text-[13px] font-medium">My Profile</h6>
        <IoChevronForwardOutline fontSize={18} />
      </Link>
      <div className="flex items-center justify-between gap-4 px-2 py-2 cursor-pointer bg-white rounded-b-md hover:bg-[#b6feef]">
        <h6 className="text-[13px] font-medium">Logout</h6>
        <IoLogOutOutline fontSize={18} />
      </div>
    </div>
  );
};
