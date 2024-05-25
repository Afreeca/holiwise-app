import { useGlobalContext } from "@/context/global";
import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardBack from "./CardBack";
import CardFront from "./CardFront";

const Card = ({ location, onDragStart }) => {
  const { getFavourite, toggleFavourite } = useGlobalContext();

  const isFavourite = getFavourite(location.id);

  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      draggable
      className="h-[450px]"
      onDragStart={(e) => onDragStart(e, location)}
    >
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <CardFront
          location={location}
          toggleFlip={toggleFlip}
          isFavourite={isFavourite}
          toggleFavourite={toggleFavourite}
        />
        <CardBack
          location={location}
          toggleFlip={toggleFlip}
          isFavourite={isFavourite}
          toggleFavourite={toggleFavourite}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
