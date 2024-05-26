import React from "react";

const GroupDetailInfo = ({ group }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <p>Name: {group.name}</p>
      <p>Creation Date: {group.creationDate}</p>
    </div>
  );
};

export default GroupDetailInfo;
