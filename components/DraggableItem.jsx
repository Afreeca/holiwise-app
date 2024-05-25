import { motion } from "framer-motion";

const DraggableItem = ({ location, onRemove }) => {
  const handleRemove = () => {
    onRemove(location.id);
  };

  return (
    <motion.div
      className="bg-gray-300 w-40 h-12 rounded-lg my-1 cursor-grab z-10 relative"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      style={{ zIndex: 100 }}
    >
      <div
        className="absolute top-1 right-1 cursor-pointer"
        onClick={handleRemove}
      >
        <span className="text-red-500 text-sm">x</span>
      </div>
      {location.name}
    </motion.div>
  );
};

export default DraggableItem;
