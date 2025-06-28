"use client"
import React, { useState } from 'react';
import { GoHome } from "react-icons/go";
import { VscListFlat } from "react-icons/vsc";
import { LuStickyNote } from "react-icons/lu";
import { PiUsers } from "react-icons/pi";
import { SiSimpleanalytics } from "react-icons/si";
import { LuPencil } from "react-icons/lu";
import { TbMug } from "react-icons/tb";
import { PiNotePencilBold } from "react-icons/pi";
import { LuUserRound } from "react-icons/lu";
import { FiCalendar } from "react-icons/fi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { TfiWallet } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { icon: <GoHome />, label: "Dashboard" },
    { icon: <VscListFlat />, label: "Order List" },
    { icon: <LuStickyNote />, label: "Order Detail" },
    { icon: <PiUsers />, label: "Customer" },
    { icon: <SiSimpleanalytics />, label: "Analytics" },
    { icon: <LuPencil />, label: "Reviews" },
    { icon: <TbMug />, label: "Foods" },
    { icon: <PiNotePencilBold />, label: "Food Detail" },
    { icon: <LuUserRound />, label: "Customer Detail" },
    { icon: <FiCalendar />, label: "Calendar" },
    { icon: <IoChatboxEllipsesOutline />, label: "Chat" },
    { icon: <TfiWallet />, label: "Wallet" },
  ];

  return (
    <div>
      {/* Mobile Hamburger */}
      <button
        className="fixed top-10 left-4 z-50 md:hidden p-2 bg-white rounded-lg shadow"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <IoMdClose className="text-2xl text-[#00B074]" />
        ) : (
          <GiHamburgerMenu className="text-2xl text-[#00B074]" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-72 bg-white shadow-lg flex flex-col justify-between transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0 md:static md:block`}
      >
        <div className="font-mono min-h-screen px-8">
          {/* Branding */}
          <div className="p-4">
            <h1 className="text-4xl font-sans font-bold mb-2">
              Sedap<span className="text-green-500">.</span>
            </h1>
            <p className="text-gray-500 text-sm">Modern Admin Dashboard</p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="space-y-2 p-4">
              {navItems.map((item, i) => (
                <li key={i} className="flex items-center group">
                  <div className="w-1 h-10 bg-transparent group-hover:bg-green-700 transition-all"></div>
                  <a
                    href="#"
                    className="flex items-center p-2 hover:bg-green-200 rounded-md flex-1 ml-2"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="p-2 ml-4">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Footer Box */}
        <div className="px-16 py-8 m-8 rounded-xl shadow-2xl text-white text-sm bg-[#00B074] mt-16">
          <p>Please, organize your menu through button below</p>
          <button className="bg-[#F2F5F3] text-black font-medium py-2 px-8 rounded-md mt-3">
            + Add Menus
          </button>
        </div>

        {/* Footer Credits */}
        <div className="text-center mb-8 font-sans">
          <h2 className="font-semibold">Sedap Restaurant Admin Dashboard</h2>
          <p className="text-gray-500">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          <p className="flex items-center justify-center text-gray-500">
            Made with <FaHeart className="text-xl text-red-600 mx-1" /> by Atilola
          </p>
        </div>
      </aside>
    </div>
  );
}