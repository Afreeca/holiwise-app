import {
  faCocktail,
  faHeart,
  faHome,
  faPlane,
  faShieldAlt,
  faStar,
  faThermometerHalf,
  faTree,
  faUsers,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardBack = ({
  location,
  toggleFlip,
  isSavedLocation,
  toggleSavedLocation,
}) => {
  const {
    name,
    averageFlightCost,
    shortRent,
    foodPrice,
    drinkPrice,
    temperature,
    safety,
    popularity,
    review,
    holidayType,
    nature,
  } = location;

  return (
    <div
      className="relative flex flex-col  border border-gray-200 rounded-md overflow-hidden shadow-md mb-6"
      key="back"
    >
      <div className="relative w-full">
        <FontAwesomeIcon
          icon={faHeart}
          className={`absolute top-2 right-2 z-10 cursor-pointer ${
            isSavedLocation ? "text-red-500" : "text-white"
          }`}
          onClick={() => toggleSavedLocation(location)}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <ul className="text-sm">
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faPlane} className="mr-1" />{" "}
            {averageFlightCost}
          </li>
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faHome} className="mr-1" /> {shortRent}
          </li>
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faUtensils} className="mr-1" /> {foodPrice}
          </li>
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faCocktail} className="mr-1" /> {drinkPrice}
          </li>
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faThermometerHalf} className="mr-1" />{" "}
            {temperature}
          </li>
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faShieldAlt} className="mr-1" /> {safety}
          </li>
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faStar} className="mr-1" /> {popularity}
          </li>
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faUsers} className="mr-1" /> {review}
          </li>
          <li className="flex items-center mb-1">
            <FontAwesomeIcon icon={faTree} className="mr-1" /> {nature}
          </li>
        </ul>
        <p className="text-sm mt-2">
          <strong>Holiday Type:</strong> {holidayType}
        </p>
      </div>
      <button
        onClick={toggleFlip}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Hide Info
      </button>
    </div>
  );
};

export default CardBack;
