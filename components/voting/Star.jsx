import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoldenStar = () => (
  <FontAwesomeIcon icon={solidStar} style={{ color: "gold" }} />
);
const GreyStar = () => (
  <FontAwesomeIcon icon={regularStar} style={{ color: "grey" }} />
);

const Star = ({ username, onDragStart, filled = true }) => {
  return (
    <p
      draggable
      onDragStart={(e) => onDragStart(e, username)}
      className="cursor-pointer"
    >
      {filled ? <GoldenStar /> : <GreyStar />}
    </p>
  );
};

export default Star;
