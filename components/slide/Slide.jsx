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
    <div className="slide-container bg-gray-100 rounded-lg p-4">
      <div className="slide-content flex justify-center items-center overflow-hidden">
        {children.length >= 1 && children[currentIndex]}
      </div>
      {children.length > 1 && (
        <div className="slide-controls flex justify-between items-center mt-4">
          <button
            onClick={prevSlide}
            className="slide-button flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-l-md"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="slide-button flex-1 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-r-md"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Slide;
