"use client";

import { getBritishDate } from "@/utils/date";
import constate from "constate";
import { useState } from "react";
import USERS from "../__mock__/users.json";

const useGlobal = () => {
  const [savedLocation, setSavedLocation] = useState([
    {
      id: 1,
      name: "Bali, Indonesia",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhandluggageonly.co.uk%2Fwp-content%2Fuploads%2F2015%2F08%2FIMG_1123.jpg&f=1&nofb=1&ipt=54d863202b16f0749e2dd2a2a14d37069f3ed6d720705475b8e8813699a942e2&ipo=images",
      averageFlightCost: "$600",
      shortRent: "$30 per night",
      foodPrice: "$10 - $20 per meal",
      drinkPrice: "$2 - $5 per drink",
      temperature: "25-30°C (77-86°F) all year round",
      safety: "Generally safe for tourists",
      popularity: "Very popular tourist destination",
      review: "4.5/5",
      partyLife: "Vibrant nightlife scene",
      nature: "Beautiful beaches, lush landscapes",
      holidayType: "Beach holiday, cultural experiences",
    },
  ]);
  const [users, _] = useState(USERS);
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Group 1",
      creationDate: getBritishDate(),
      items: [],
    },
  ]);

  const setFavourite = (location) => {
    const item = getLocationById(location.id);
    if (!item) {
      setSavedLocation((prev) => [...prev, location]);
    } else {
      setSavedLocation((prev) => prev.filter((fav) => fav.id !== location.id));
    }
  };

  const getLocationById = (id) => {
    return savedLocation.some((location) => location.id === id);
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
          ? { ...group, items: [...group.items, item] }
          : group
      )
    );
  };

  const removeGroupItem = (groupId, item) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? { ...group, items: group.items.filter((i) => i.id !== item.id) }
          : group
      )
    );
    setSavedLocation((prevSavedLocations) => [...prevSavedLocations, item]);
  };

  return {
    users,
    savedLocation,
    toggleFavourite: setFavourite,
    getFavourite: getLocationById,
    groups,
    addGroup,
    renameGroup,
    deleteGroup,
    addGroupItem,
    removeGroupItem,
  };
};

export const [GlobalContextProvider, useGlobalContext] = constate(useGlobal);
