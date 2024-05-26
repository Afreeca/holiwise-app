"use client";

import Title from "@/components/Title";
import GroupDetailInfo from "@/components/group/GroupDetailInfo";
import LocationCards from "@/components/group/LocationCards";
import UserCards from "@/components/group/UserCards";
import { useGlobalContext } from "@/context/global";

export default function GroupDetails({ params: { groupId } }) {
  const { getGroup, updateGroupVoting } = useGlobalContext();
  const group = getGroup(Number(groupId));

  const handleOnDrag = (e, data) => {
    e.dataTransfer.setData("application/json", JSON.stringify(data));
  };

  const handleOnDrop = (e) => {
    const dataString = e.dataTransfer.getData("application/json");
    const data = JSON.parse(dataString);
    updateGroupVoting(group.id, data);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col h-screen">
      <Title text="Group Detail" />
      <div className="flex flex-col flex-1 gap-4 overflow-auto">
        <GroupDetailInfo group={group} />
        <LocationCards
          group={group}
          handleOnDrag={handleOnDrag}
          handleOnDrop={handleOnDrop}
          handleDragOver={handleDragOver}
        />
        <UserCards group={group} handleOnDrag={handleOnDrag} />
      </div>
    </main>
  );
}
