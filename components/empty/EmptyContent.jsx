const EmptyContent = ({ title, text }) => {
  return (
    <div className="mb-6 border-dashed border-2 border-gray-300 p-4 mt-4 bg-gray-100 relative">
      <div className="text-center">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-gray-500">{text}</p>
      </div>
    </div>
  );
};

export default EmptyContent;
