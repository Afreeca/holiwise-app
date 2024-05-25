const DraggedItem = ({ location, onRemove }) => {
  return (
    <div className="flex items-center justify-between border border-gray-300 p-2 rounded-md gap-2">
      <p className="text-lg">{location.name}</p>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => onRemove(location.id)}
      >
        X
      </button>
    </div>
  );
};

export default DraggedItem;
