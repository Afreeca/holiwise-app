import { useGlobalContext } from "@/context/global";
import { useDroppable } from "@dnd-kit/core";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import DraggedItem from "./DraggedItem";

const DroppableArea = ({ group }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: group.id,
  });

  const style = {
    color: isOver ? "green" : undefined,
    border: "1px dashed gray",
    padding: "20px",
    margin: "10px",
    minHeight: "100px",
  };

  const { removeGroupItem } = useGlobalContext();

  const handleRemove = (locationId) => {
    removeGroupItem(group.id, locationId);
  };

  return (
    <div ref={setNodeRef} style={style} className="relative bg-gray-100">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">{group.name}</h2>
        <Link
          href={`/groups/${group.id}`}
          className="bg-slate-400 text-white px-2 py-1 rounded-md shadow-sm hover:bg-primary hover:text-black transition duration-300 ease-in-out"
        >
          View
        </Link>
      </div>
      <div>
        <div className="flex gap-1 items-center text-gray-500 text-center">
          <FontAwesomeIcon icon={faArrowsAlt} className="" size="sm" />
          Drag and drop
        </div>
        {group.items?.map((item, index) => (
          <div key={index}>
            <DraggedItem
              location={item}
              onRemove={() => handleRemove(item.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroppableArea;
