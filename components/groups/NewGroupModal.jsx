import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useGlobalContext } from "../../context/global";
import Modal from "../modal/Modal";

const NewGroupModal = ({ isOpen, onClose, onCreate }) => {
  const { users } = useGlobalContext();
  const [groupName, setGroupName] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const handleSelectChange = (e) => {
    const result = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setSelectedUsers(result);
  };

  const handleCreate = () => {
    const filteredUsers = users.filter((user) =>
      selectedUsers.includes(user.id.toString())
    );
    if (groupName.trim() !== "" && filteredUsers.length > 0) {
      onCreate(groupName, filteredUsers);
      setGroupName("");
      setSelectedUsers([]);
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
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"></div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <h3
            className="text-base font-semibold leading-6 text-gray-900"
            id="modal-title"
          >
            Create New Group
          </h3>
          <div className="mt-2">
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
              className="border border-gray-300 p-2 w-full mb-4"
            />
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="mr-1 text-blue-500"
              />
              <span className="text-gray-700">
                Press Ctrl and right click to select multiple friends
              </span>
            </div>
            <select
              multiple
              value={selectedUsers}
              onChange={handleSelectChange}
              className="border border-gray-300 p-2 w-full"
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
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

export default NewGroupModal;
