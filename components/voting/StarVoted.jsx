import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoldenStar = () => (
  <FontAwesomeIcon icon={solidStar} style={{ color: "gold" }} />
);
const GreyStar = () => (
  <FontAwesomeIcon icon={regularStar} style={{ color: "grey" }} />
);

const StarVoted = ({ filled = true }) => {
  return (
    <p className="cursor-pointer draggable-element touch-action-none">
      {filled ? <GoldenStar /> : <GreyStar />}
    </p>
  );
};

export default StarVoted;
