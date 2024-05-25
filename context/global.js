"use client";

import constate from "constate";
import { useState } from "react";
import USERS from "../__mock__/users.json";

const useGlobal = () => {
  const [favourites, setFavourites] = useState([]);
  const [users, _] = useState(USERS);
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Project A",
      creationDate: "2024-05-01",
      users: [
        { id: 1, name: "Alice", location: "New York" },
        { id: 2, name: "Bob", location: "San Francisco" },
      ],
    },
    {
      id: 2,
      name: "Project B",
      creationDate: "2024-05-10",
      users: [
        { id: 3, name: "Charlie", location: "Los Angeles" },
        { id: 4, name: "David", location: "Chicago" },
      ],
    },
    {
      id: 3,
      name: "Project C",
      creationDate: "2024-05-15",
      users: [
        { id: 5, name: "Eve", location: "Seattle" },
        { id: 6, name: "Frank", location: "Boston" },
      ],
    },
    {
      id: 4,
      name: "Project D",
      creationDate: "2024-05-20",
      users: [
        { id: 7, name: "Grace", location: "Austin" },
        { id: 8, name: "Hank", location: "Denver" },
      ],
    },
    {
      id: 2,
      name: "Project E",
      creationDate: "2024-05-10",
      users: [
        { id: 3, name: "Charlie", location: "Los Angeles" },
        { id: 4, name: "David", location: "Chicago" },
      ],
    },
    {
      id: 3,
      name: "Project F",
      creationDate: "2024-05-15",
      users: [
        { id: 5, name: "Eve", location: "Seattle" },
        { id: 6, name: "Frank", location: "Boston" },
      ],
    },
    {
      id: 4,
      name: "Project G  ",
      creationDate: "2024-05-20",
      users: [
        { id: 7, name: "Grace", location: "Austin" },
        { id: 8, name: "Hank", location: "Denver" },
      ],
    },
  ]);

  const setFavourite = (location) => {
    const item = getLocationById(location.id);
    if (!item) {
      setFavourites((prev) => [...prev, location]);
    } else {
      setFavourites((prev) => prev.filter((fav) => fav.id !== location.id));
    }
  };

  const getLocationById = (id) => {
    return favourites.some((location) => location.id === id);
  };

  const addGroup = (groupName) => {
    const newGroup = {
      id: groups.length + 1,
      name: groupName,
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

  return {
    users,
    favourites,
    toggleFavourite: setFavourite,
    getFavourite: getLocationById,
    groups,
    addGroup,
    renameGroup,
    deleteGroup,
  };
};

export const [GlobalContextProvider, useGlobalContext] = constate(useGlobal);
