import { useGlobalContext } from "@/context/global";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DraggedItem from "./DraggedItem";

const DroppableArea = ({ group, onDrop, onDragOver }) => {
  const { removeGroupItem } = useGlobalContext();
  const { id, name, items } = group;

  const handleRemove = (locationId) => {
    removeGroupItem(id, locationId);
  };

  return (
    <div className="mb-6 border-dashed border-2 border-gray-300 p-4 mt-4 bg-gray-100 relative">
      <div className="flex items-center mb-2">
        <FontAwesomeIcon icon={faArrowsAlt} className="mr-2" size="lg" />
        <h2 className="text-xl font-semibold">{name}</h2>
      </div>
      <div className="page min-h-32" onDrop={onDrop} onDragOver={onDragOver}>
        <div className="text-gray-500 text-center">
          Drag and drop for voting
        </div>
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
