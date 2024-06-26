import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardFront = ({
  small,
  location,
  toggleFlip,
  isSavedLocation,
  toggleSavedLocation,
}) => {
  const { name, image } = location;

  return (
    <div
      className={`relative flex flex-col justify-between border border-gray-200 rounded-md overflow-hidden shadow-md ${
        small && "w-40"
      }`}
      key="front"
    >
      <div className="flex flex-col">
        <div
          className={`relative w-full ${
            small ? "h-28" : "h-48"
          } overflow-hidden bg-green-400`}
        >
          <img src={image} alt={name} className="w-full h-full object-cover" />
          {!small && (
            <FontAwesomeIcon
              icon={faBookmark}
              className={`absolute top-2 right-2 cursor-pointer ${
                isSavedLocation ? "text-blue-500" : "text-white"
              }`}
              onClick={() => toggleSavedLocation(location)}
            />
          )}
        </div>
        <div className="px-4 py-2">
          <h3
            className={` ${
              small ? "text-sm" : "text-lg"
            } font-semibold mb-2 truncate`}
          >
            {name}
          </h3>
        </div>
      </div>
      {!small && (
        <button
          onClick={toggleFlip}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View Details
        </button>
      )}
    </div>
  );
};

export default CardFront;
