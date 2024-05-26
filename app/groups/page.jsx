"use client";

import SectionInfo from "@/components/SectionInfo/SectionInfo";
import Title from "@/components/Title";
import Folder from "@/components/folder/Folder";
import NewFolderModal from "@/components/folder/newFolderModal";
import { useGlobalContext } from "@/context/global";
import { useState } from "react";

const groupsPageInfo = {
  title: "Create Your Dream Trip Group Today!",
  content: [
    "Planning a trip has never been easier and more fun! With our Trip Groups feature, you can:",
    "• Create a Group: Start by creating a new trip group tailored to your upcoming adventure.",
    "• Invite Friends: Add your friends and fellow travelers to your group to start planning together.",
    "• Add Locations: Suggest exciting destinations and add them to the group's list.",
    "• Vote and Decide: Let everyone vote on their favorite places. The most voted location wins, ensuring that your group picks the perfect spot for your trip!",
    "Start organizing your unforgettable journey now. Create a trip group and turn your travel dreams into reality!",
  ],
};
export default function Groups() {
  const { groups, addGroup, deleteGroup, renameGroup } = useGlobalContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreateFolder = (folderName) => {
    addGroup(folderName);
  };

  const handleDeleteFolder = (folderId) => {
    deleteGroup(folderId);
  };

  const handleRenameFolder = (folderId, newName) => {
    renameGroup(folderId, newName);
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
        <div className="grid grid-flow-col auto-cols-max gap-2">
          {groups?.map((folder) => (
            <Folder
              key={folder.id}
              folder={folder}
              onDelete={handleDeleteFolder}
              onRename={handleRenameFolder}
            />
          ))}
        </div>
        <NewFolderModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateFolder}
        />
      </div>
    </main>
  );
}
