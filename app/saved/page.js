"use client";

import SectionInfo from "@/components/SectionInfo/SectionInfo";
import Title from "@/components/Title";
import Card from "@/components/card/card";
import DroppableArea from "@/components/dragAndDrop/DroppableArea";
import EmptyContent from "@/components/empty/EmptyContent";
import EmptyContentModal from "@/components/empty/EmptyContentModal";
import { useGlobalContext } from "@/context/global";
import { savedSectionInfo } from "@/utils/constants";
import { useRouter } from "next/navigation";

export default function Saved() {
  const { savedLocations, groups, addGroupItem } = useGlobalContext();
  const router = useRouter();

  const handleRedirect = () => {
    router.push(`/`);
  };

  const handleOnDrag = (e, data) => {
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

  if (savedLocations?.length <= 0) {
    return (
      <EmptyContentModal
        onClose={() => setIsEmptyModalOpen(false)}
        title="Saved Locations"
        message="There are no saved locations. Start exploring to find your top destinations."
        buttonText="Explore"
        onRedirect={handleRedirect}
      />
    );
  }

  return (
    <main className="flex flex-col h-screen">
      <Title text="Saved" />
      <SectionInfo {...savedSectionInfo} />

      <div className="flex-1 overflow-auto">
        <div className="flex flex-wrap">
          {groups.length <= 0 ? (
            <EmptyContent
              title="No groups found"
              text="You haven't created any groups yet. Start planning your next trip by
              creating groups!"
            />
          ) : (
            groups.map((group, index) => (
              <div key={index} className="w-auto p-1">
                <DroppableArea
                  group={group}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleOnDrop(e, group.id)}
                />
              </div>
            ))
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {savedLocations.map((location) => (
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
