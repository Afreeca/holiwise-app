"use client";

import { useSidebarContext } from "@/context/useSidebar";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const { isOpen, toggle } = useSidebarContext();

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-44" : "w-24"
      } bg-white h-screen transition-width duration-300  border border-gray-200 `}
    >
      <div className="flex items-center justify-between h-16 p-4">
        <Image src={`/logo.svg`} alt="holiwise logo" width="64" height="64" />
        <button className="text-black" onClick={toggle}>
          {isOpen ? "<" : ">"}
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-4">
        <Link href="/">
          <p className="text-black hover:bg-gray-700 p-2 rounded">Menu 1</p>
        </Link>
        <Link href="/page2">
          <p className="text-black hover:bg-gray-700 p-2 rounded">Menu 2</p>
        </Link>
        <Link href="/page3">
          <p className="text-black hover:bg-gray-700 p-2 rounded">Menu 3</p>
        </Link>
      </nav>
    </div>
  );
}
