import { useGlobalContext } from "@/context/global";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = ({ location, small = false }) => {
  const { getSavedLocation, toggleSavedLocation } = useGlobalContext();
  const isSavedLocation = getSavedLocation(location.id);
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: location.id,
      data: location,
    });
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const style = {
    transform: transform ? CSS.Translate.toString(transform) : undefined,
    zIndex: isDragging ? 9999 : "auto",
    position: "relative",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="relative transition-transform duration-200 draggable-element touch-action-none"
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
