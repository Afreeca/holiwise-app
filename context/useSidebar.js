"use client";

import constate from "constate";
import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return {
    isOpen,
    toggle: toggleSidebar,
  };
};

export const [SidebarContextProvider, useSidebarContext] = constate(useSidebar);
