import { useState } from "react";
import Modal from "../Modal";

const NewFolderModal = ({ isOpen, onClose, onCreate }) => {
  const [folderName, setFolderName] = useState("");

  const handleCreate = () => {
    if (folderName.trim() !== "") {
      onCreate(folderName);
      setFolderName("");
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      primaryButtonText="Create"
      secondaryButtonText="Cancel"
    >
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <svg
            className="h-6 w-6 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3
            className="text-base font-semibold leading-6 text-gray-900"
            id="modal-title"
          >
            Create New Folder
          </h3>
          <div className="mt-2">
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Enter folder name"
              className="border border-gray-300 p-2 w-full mb-4"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          onClick={handleCreate}
          className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
        >
          Create
        </button>
        <button
          onClick={onClose}
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default NewFolderModal;
