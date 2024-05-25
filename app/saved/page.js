"use client";

import DroppableArea from "@/components/DroppableArea";
import Title from "@/components/Title";
import Card from "@/components/card/card";
import { useGlobalContext } from "@/context/global";
import { useState } from "react";

export default function Saved() {
  const [widgets, setWidgets] = useState([]);
  const { savedLocation, groups, addGroupItem } = useGlobalContext();

  console.log("groups: ", groups);
  const handleOnDrag = (e, data) => {
    console.log({ e, data });
    e.dataTransfer.setData("application/json", JSON.stringify(data));
  };

  const handleOnDrop = (e, groupId) => {
    const dataString = e.dataTransfer.getData("application/json");
    const data = JSON.parse(dataString);
    addGroupItem(groupId, data);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col h-screen">
      <Title text="Saved" />
      <div className="flex-1 overflow-auto">
        <div className="App">
          {groups.map((group, index) => (
            <DroppableArea
              key={index} // todo
              title={group.name}
              items={group?.items}
              onDragOver={handleDragOver}
              onDrop={(e) => handleOnDrop(e, group.id)}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {savedLocation.map((location) => (
            <Card
              key={location.id}
              location={location}
              onDragStart={handleOnDrag}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
