import { useGlobalContext } from "@/context/global";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = ({
  location,
  onDragStart,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  small = false,
}) => {
  const { getSavedLocation, toggleSavedLocation } = useGlobalContext();
  const isSavedLocation = getSavedLocation(location.id);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, location)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardFront
          small={small}
          location={location}
          toggleFlip={toggleFlip}
          isSavedLocation={isSavedLocation}
          toggleSavedLocation={toggleSavedLocation}
        />
        <CardBack
          small={small}
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
