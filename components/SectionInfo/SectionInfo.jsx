import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Paragraph from "./utils/Paragraph";

const SectionInfo = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="shadow-sm rounded-lg p-2">
      <div className="flex flex-col sm:flex-row items-center gap-1">
        <FontAwesomeIcon
          icon={faInfoCircle}
          className="text-blue-300 w-4 h-4 sm:mr-2 sm:order-1"
        />
        <h2 className="text-xl font-semibold text-gray-800 sm:order-2 mb-2 sm:mb-0">
          {title}
        </h2>
        <button
          onClick={toggleExpand}
          className="text-blue-500 hover:underline self-start sm:order-3"
        >
          {isExpanded ? "See Less" : "See More"}
        </button>
      </div>
      {isExpanded && (
        <div className="text-gray-700 mt-2">
          <ul>
            {content.map((paragraph, index) => (
              <Paragraph paragraph={paragraph} index={index} key={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SectionInfo;
