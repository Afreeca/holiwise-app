import { useGlobalContext } from "@/context/global";
import DraggedItem from "./DraggedItem";

const DroppableArea = ({ group, onDrop, onDragOver }) => {
  const { removeGroupItem } = useGlobalContext();
  const { id, name, items } = group;

  const handleRemove = (locationId) => {
    removeGroupItem(id, locationId);
  };
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <div
        className="page border-dashed border-2 border-gray-300 min-h-32 p-4 mt-4 bg-gray-100"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {items?.map((item, index) => (
          <div className="dropped-widget" key={index}>
            <DraggedItem location={item} onRemove={handleRemove} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroppableArea;
