"use client";

import SectionInfo from "@/components/SectionInfo/SectionInfo";
import Title from "@/components/Title";
import Group from "@/components/groups/Group";
import NewGroupModal from "@/components/groups/NewGroupModal";
import { useGlobalContext } from "@/context/global";
import { groupsPageInfo } from "@/utils/constants";
import { useState } from "react";

export default function Groups() {
  const { groups, addGroup, deleteGroup, renameGroup } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateGroup = (groupName, users) => {
    addGroup(groupName, users);
  };

  const handleDeleteGroup = (groupId) => {
    deleteGroup(groupId);
  };

  const handleRenameGroup = (groupId, newName) => {
    renameGroup(groupId, newName);
  };

  return (
    <main className="flex flex-col h-screen">
      <Title text="Groups" />
      <SectionInfo {...groupsPageInfo} />
      <div className="container py-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
        >
          New Group
        </button>
        <div className="flex gap-2 flex-wrap">
          {groups?.map((group) => (
            <Group
              key={group.id}
              group={group}
              onDelete={handleDeleteGroup}
              onRename={handleRenameGroup}
            />
          ))}
        </div>
        <NewGroupModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateGroup}
        />
      </div>
    </main>
  );
}
