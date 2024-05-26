import { useGlobalContext } from "@/context/global";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = ({ location, onDragStart, simple = false }) => {
  const { getSavedLocation, toggleSavedLocation } = useGlobalContext();

  const isSavedLocation = getSavedLocation(location.id);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      draggable
      className={`${simple ? "h-auto" : "h-[340px]"}`}
      onDragStart={(e) => onDragStart(e, location)}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardFront
          simple={simple}
          location={location}
          toggleFlip={toggleFlip}
          isSavedLocation={isSavedLocation}
          toggleSavedLocation={toggleSavedLocation}
        />
        <CardBack
          simple={simple}
          location={location}
          toggleFlip={toggleFlip}
          isSavedLocation={isSavedLocation}
          toggleSavedLocation={toggleSavedLocation}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
