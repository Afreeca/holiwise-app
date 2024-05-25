"use client";

import { useSidebarContext } from "@/context/useSidebar";
import { faBookmark, faHome, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const { isOpen, toggle } = useSidebarContext();
  const pathname = usePathname();
  const primaryColour = "rgb(162 223 255/var(--tw-bg-opacity))";

  return (
    <div
      className={`flex flex-col ${
        isOpen ? "w-auto" : "w-20"
      } bg-white h-screen transition-width duration-300 border border-gray-200`}
    >
      <div
        className={`flex items-center justify-between h-16 p-4 ${
          isOpen && "px-6"
        }`}
      >
        <Image
          src={`${isOpen ? "/logo.svg" : "/logo-icon.svg"}`}
          alt="holiwise logo"
          width="74"
          height="74"
        />
        <button onClick={toggle}>{isOpen ? "<" : ">"}</button>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <Link
          href="/"
          className={`flex items-center  p-2   rounded transition-all duration-300 ${
            pathname === "/" && "bg-primary"
          }`}
        >
          <div className="flex justify-center items-center h-10">
            <FontAwesomeIcon icon={faHome} className="w-6" />
            <span
              className={`ml-2 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Home
            </span>
          </div>
        </Link>
        <Link
          href="/saved"
          className={`flex items-center  p-2 rounded transition-all duration-300 ${
            pathname === "/saved" && "bg-primary"
          }`}
        >
          <div className="flex justify-center items-center h-10">
            <FontAwesomeIcon icon={faBookmark} className="w-6" />
            <span
              className={`ml-2 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Saved
            </span>
          </div>
        </Link>
        <Link
          href="/groups"
          className={`flex items-center  p-2 rounded transition-all duration-300 ${
            pathname === "/groups" && "bg-primary"
          }`}
        >
          <div className="flex justify-center items-center h-10">
            <FontAwesomeIcon icon={faUsers} className="w-6" />
            <span
              className={`ml-2 transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
              style={{ whiteSpace: "nowrap" }}
            >
              Groups
            </span>
          </div>
        </Link>
      </nav>
    </div>
  );
}
