const DroppableArea = ({ title, items, onDrop, onDragOver }) => {
  // const handleRemove = () => {
  //   onRemove(location.id);
  // };

  console.log("DroppableArea: ", items);
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div
        className="page border-dashed border-2 border-gray-300 min-h-32 p-4 mt-4 bg-gray-100"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {items?.map((w, index) => (
          <div className="dropped-widget" key={index}>
            {w.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroppableArea;
