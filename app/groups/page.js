"use client";

import Title from "@/components/Title";
import NewFolderModal from "@/components/folder/newFolderModal";
import Folder from "@/components/folder/page";
import { useGlobalContext } from "@/context/global";
import { useState } from "react";

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
      <div className="container py-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4"
        >
          New Group
        </button>
        <div className="h-3/6 overflow-auto">
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
