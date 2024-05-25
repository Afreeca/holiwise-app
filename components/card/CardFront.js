import {
  faHeart,
  faStar,
  faTree,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFront = ({ location, toggleFlip, isFavourite, toggleFavourite }) => {
  const { name, image, popularity, review, holidayType, nature } = location;

  return (
    <div
      className="relative flex flex-col justify-between text-black border border-gray-200 rounded-md overflow-hidden shadow-md h-[430px]"
      key="front"
    >
      <div className=" flex flex-col">
        <div className="relative w-full h-48 overflow-hidden bg-green-400">
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <FontAwesomeIcon
            icon={faHeart}
            className={`absolute top-2 right-2 z-10 cursor-pointer ${
              isFavourite ? "text-red-500" : "text-white"
            }`}
            onClick={() => toggleFavourite(location)}
          />
        </div>
        <div className="px-4 py-2">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <ul className="text-sm">
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
      </div>
      <button
        onClick={toggleFlip}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Details
      </button>
    </div>
  );
};

export default CardFront;
