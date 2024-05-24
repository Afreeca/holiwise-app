"use client";

import constate from "constate";
import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };
  return {
    isOpen,
    toggle: toggleSidebar,
  };
};

export const [SidebarContextProvider, useSidebarContext] = constate(useSidebar);
