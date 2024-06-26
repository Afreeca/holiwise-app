import {
  faEdit,
  faEye,
  faPeopleGroup,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ThreeDotsMenu from "../ThreeDotsMenu";

const Group = ({ group, onDelete, onRename }) => {
  const router = useRouter();
  const [isRenaming, setIsRenaming] = useState(false);
  const [newName, setNewName] = useState(group.name);
  const [isOpen, setIsOpen] = useState(false);

  const handleRename = () => {
    setIsRenaming(true);
  };

  const handleSaveRename = () => {
    setIsRenaming(false);
    onRename(group.id, newName);
  };

  const handleDelete = () => {
    setIsOpen(true);
  };

  const handleGoToGroupPage = () => {
    router.push(`/groups/${group.id}`);
  };

  const menuOptions = [
    { label: "view", icon: faEye, action: handleGoToGroupPage },
    { label: "Rename", icon: faEdit, action: handleRename },
    { label: "Delete", icon: faTrash, action: handleDelete },
  ];

  return (
    <div className="flex flex-col p-4 border rounded-md shadow-lg bg-white space-y-2 w-fit">
      <div className="flex flex-col ">
        <div className="flex justify-between w-full">
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
            <span className="text-xl font-semibold">{group.name}</span>
          )}
          <ThreeDotsMenu options={menuOptions} />
        </div>
        <FontAwesomeIcon
          icon={faPeopleGroup}
          className="text-blue-500 text-4xl self-start"
        />
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            Created on: {group.creationDate}
          </p>
          <div className="mt-2">
            <p className="text-sm text-gray-700">Users:</p>
            <ul className="list-disc list-inside">
              {group.users?.map((user) => (
                <li key={user.id} className="text-sm text-gray-600 pl-2">
                  {user.name}
                </li>
              ))}
            </ul>
          </div>
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
              Are you sure you want to delete this group? This action cannot be
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
                  onDelete(group.id);
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

export default Group;
