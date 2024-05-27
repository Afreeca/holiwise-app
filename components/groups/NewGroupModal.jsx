import { useState } from "react";
import { useGlobalContext } from "../../context/global";

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

  return isOpen ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="relative bg-white rounded-lg overflow-hidden shadow-xl w-96">
        <div className="flex items-center justify-between bg-gray-200 px-4 py-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">
            Create New Group
          </h3>
          <button onClick={onClose}>&times;</button>
        </div>
        <div className="p-4">
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Enter group name"
            className="border border-gray-300 p-2 w-full mb-4"
          />
          <div className="flex items-center mb-2">
            <span className="text-gray-700">
              Press <strong>Ctrl</strong>/<strong>Cmd</strong> for MacOS-X and
              right click to select multiple friends
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
        <div className="bg-gray-50 px-4 py-3 flex justify-end">
          <button
            onClick={handleCreate}
            className="inline-flex justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 mr-2"
          >
            Create
          </button>
          <button
            onClick={onClose}
            className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default NewGroupModal;
