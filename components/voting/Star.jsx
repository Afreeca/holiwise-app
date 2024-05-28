import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoldenStar = () => (
  <FontAwesomeIcon icon={solidStar} style={{ color: "gold" }} />
);
const GreyStar = () => (
  <FontAwesomeIcon icon={regularStar} style={{ color: "grey" }} />
);

const Star = ({ username, filled = true }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: username,
    });

  const style = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    zIndex: isDragging ? 9999 : "auto",
    position: "relative",
  };

  return (
    <p
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-grab active:cursor-grabbing draggable-element touch-action-none"
    >
      {filled ? <GoldenStar /> : <GreyStar />}
    </p>
  );
};

export default Star;
