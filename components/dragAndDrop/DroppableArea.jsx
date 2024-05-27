import { useGlobalContext } from "@/context/global";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DraggedItem from "./DraggedItem";

const DroppableArea = ({ group, onDrop, onDragOver, onTouchEnd }) => {
  const router = useRouter();
  const { removeGroupItem } = useGlobalContext();
  const { id, name, items } = group;

  const handleRemove = (locationId) => {
    removeGroupItem(id, locationId);
  };

  return (
    <div
      className="mb-2 border-dashed border-2 border-gray-300 p-4 mt-4 bg-gray-100 relative"
      onDrop={onDrop}
      onDragOver={onDragOver}
      onTouchEnd={onTouchEnd}
      data-groupid={id}
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">{name}</h2>
        <Link
          href={`/groups/${id}`}
          className="bg-slate-400 text-white px-2 py-1 rounded-md shadow-sm hover:bg-primary hover:text-black transition duration-300 ease-in-out"
        >
          View
        </Link>
      </div>
      <div>
        <div className="flex gap-1 items-center text-gray-500 text-center">
          <FontAwesomeIcon icon={faArrowsAlt} className="" size="sm" />
          Drag n drop for voting
        </div>
        {items?.map((item, index) => (
          <div key={index}>
            <DraggedItem location={item} onRemove={handleRemove} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DroppableArea;
