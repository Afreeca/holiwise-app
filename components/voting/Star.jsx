import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoldenStar = () => (
  <FontAwesomeIcon icon={solidStar} style={{ color: "gold" }} />
);
const GreyStar = () => (
  <FontAwesomeIcon icon={regularStar} style={{ color: "grey" }} />
);

const Star = ({
  username,
  onDragStart,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  filled = true,
}) => {
  return (
    <p
      className="cursor-pointer"
      draggable
      onDragStart={(e) => onDragStart(e, username)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {filled ? <GoldenStar /> : <GreyStar />}
    </p>
  );
};

export default Star;
