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

  const addGroup = (groupName, groupUsers) => {
    const newGroup = {
      id: groups.length + 1,
      name: groupName,
      creationDate: getBritishDate(),
      items: [],
      users: groupUsers,
      voting: [],
    };
    setGroups((prevGroups) => [...prevGroups, newGroup]);
  };

  const deleteGroup = (groupId) => {
    setGroups((prevGroups) =>
      prevGroups.filter((group) => group.id !== groupId)
    );
  };

  const findGroup = (groupId) => {
    return groups.find((group) => group.id === groupId);
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
              voting: {
                ...group.voting,
                [item.id]: group.voting[item.id] ? group.voting[item.id] : [],
              },
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

  const updateGroupVoting = (groupId, itemId, username, increment = true) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              voting: {
                ...group.voting,
                [itemId]: group.voting[itemId].some(
                  (vote) => vote.username === username
                )
                  ? group.voting[itemId].map((vote) =>
                      vote.username === username
                        ? {
                            ...vote,
                            votes: increment ? vote.votes + 1 : vote.votes - 1,
                          }
                        : vote
                    )
                  : [...group.voting[itemId], { username, votes: 1 }],
              },
            }
          : group
      )
    );
  };

  const addUserToGroup = (groupId, user) => {
    setGroups((prevGroups) =>
      prevGroups.map((group) =>
        group.id === groupId
          ? {
              ...group,
              users: group.users.some((u) => u.id === user.id)
                ? group.users
                : [...group.users, user],
              voting: group.voting.some((vote) => vote.username === user.name)
                ? group.voting
                : [...group.voting, { username: user.name, votes: 0 }],
            }
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
    getGroup: findGroup,
    renameGroup,
    deleteGroup,
    addGroupItem,
    removeGroupItem,
    updateGroupVoting,
    addUserToGroup,
  };
};

export const [GlobalContextProvider, useGlobalContext] = constate(useGlobal);
