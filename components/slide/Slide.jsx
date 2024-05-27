import { useState } from "react";

const Slide = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? children.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white border-t border-gray-200">
      <div className="flex justify-center items-center overflow-hidden">
        {children.length >= 1 && children[currentIndex]}
      </div>
      {children.length > 1 && (
        <div className="flex gap-1 justify-between items-center">
          <button
            onClick={prevSlide}
            className="flex-1 px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-l-md"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="flex-1 px-4 py-1 bg-gray-200 hover:bg-gray-300 rounded-r-md"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Slide;
