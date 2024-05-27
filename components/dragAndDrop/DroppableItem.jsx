import { useDroppable } from "@dnd-kit/core";

const DroppableItem = ({ id, children }) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });
  const style = {
    color: isOver ? "green" : undefined,

    padding: "20px",
    margin: "10px",
    minHeight: "100px",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};

export default DroppableItem;
