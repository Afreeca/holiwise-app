import { useState } from "react";

const DraggedItem = ({ location, onRemove }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className={`flex items-center justify-between border border-gray-300 p-2 rounded-md ${
        isHover ? "hover:border-red-500" : ""
      }`}
    >
      <p className="text-sm">{location.name}</p>
      <button
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="text-red-500 hover:text-red-700"
        onClick={() => onRemove(location.id)}
      >
        X
      </button>
    </div>
  );
};

export default DraggedItem;
