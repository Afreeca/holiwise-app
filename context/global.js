"use client";

import { getBritishDate } from "@/utils/date";
import constate from "constate";
import { useState } from "react";
import USERS from "../__mock__/users.json";

const useGlobal = () => {
  const [savedLocations, setSavedLocations] = useState([]);
  const [users, _] = useState(USERS);
  const [groups, setGroups] = useState([]);

  const setSavedLocation = (location) => {
    const item = getLocationById(location.id);
    if (!item) {
      setSavedLocations((prev) => [...prev, location]);
    } else {
      setSavedLocations((prev) => prev.filter((fav) => fav.id !== location.id));
    }
  };

  const getLocationById = (id) => {
    return savedLocations.some((location) => location.id === id);
  };

  const addGroup = (groupName) => {
    const newGroup = {
      id: groups.length + 1,
      name: groupName,
      creationDate: getBritishDate(),
      items: [],
    };
    setGroups((prevGroups) => [...prevGroups, newGroup]);
  };

  const deleteGroup = (groupId) => {
    setGroups((prevGroups) =>
      prevGroups.filter((group) => group.id !== groupId)
    );
  };

  const renameGroup = (groupId, newName) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId ? { ...group, name: newName } : group
      )
    );
  };

  const addGroupItem = (groupId, item) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              items: group.items.some(
                (existingItem) => existingItem.id === item.id
              )
                ? group.items
                : [...group.items, item],
            }
          : group
      )
    );
  };

  const removeGroupItem = (groupId, itemId) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? { ...group, items: group.items.filter((i) => i.id !== itemId) }
          : group
      )
    );
  };

  return {
    users,
    savedLocations,
    toggleSavedLocation: setSavedLocation,
    getSavedLocation: getLocationById,
    groups,
    addGroup,
    renameGroup,
    deleteGroup,
    addGroupItem,
    removeGroupItem,
  };
};

export const [GlobalContextProvider, useGlobalContext] = constate(useGlobal);
