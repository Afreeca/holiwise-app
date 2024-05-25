import { faEllipsisV, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

const Folder = ({ folder, onDelete, onRename }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(folder.name);
  const [isOpen, setIsOpen] = useState(false);

  const handleRename = () => {
    setIsMenuOpen(false);
    setIsRenaming(true);
  };

  const handleSaveRename = () => {
    setIsRenaming(false);
    onRename(folder.id, newName);
  };

  const handleDelete = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col p-4 border rounded-md shadow-lg bg-white space-y-2">
      <div className="flex items-center space-x-4">
        <FontAwesomeIcon icon={faFolder} className="text-blue-500 text-4xl" />
        {isRenaming ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onBlur={handleSaveRename}
            autoFocus
            className="border-b border-transparent focus:border-blue-500 focus:outline-none"
          />
        ) : (
          <span className="text-xl font-semibold">{folder.name}</span>
        )}
        <div className="relative ml-auto">
          <FontAwesomeIcon
            icon={faEllipsisV}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={handleRename}
              >
                Rename
              </button>
              <button
                className="block px-4 py-2 text-sm text-red-700 hover:bg-gray-100 w-full text-left"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          Created on: {folder.creationDate}
        </p>
        <div className="mt-2">
          <p className="text-sm text-gray-700">Users in the group:</p>
          <ul className="list-disc list-inside">
            {folder.users.map((user) => (
              <li key={user.id} className="text-sm text-gray-600">
                {user.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="bg-white rounded-lg p-6 space-y-4 shadow-xl">
            <Dialog.Title className="text-lg font-medium">
              Confirm Deletion
            </Dialog.Title>
            <Dialog.Description className="text-sm text-gray-500">
              Are you sure you want to delete this folder? This action cannot be
              undone.
            </Dialog.Description>
            <div className="flex space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete(folder.id);
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Folder;
