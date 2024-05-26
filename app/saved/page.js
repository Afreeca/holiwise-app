"use client";

import DroppableArea from "@/components/DroppableArea";
import EmptyContent from "@/components/EmptyContent";
import EmptyContentModal from "@/components/EmptyContentModal";
import SectionInfo from "@/components/SectionInfo/SectionInfo";
import Title from "@/components/Title";
import Card from "@/components/card/card";
import { useGlobalContext } from "@/context/global";
import { useRouter } from "next/navigation";

const savedSectionInfo = {
  title: "Save and vote for your favorite Locations for the Perfect Trip!",
  content: [
    "Discover amazing destinations and make them part of your travel plans:",
    "• Save Locations: Browse through our extensive list of stunning places and save your favorites.",
    "• Easy Access: Keep all your top picks in one place for quick and easy access.",
    "• Vote and Choose: When it's time to plan, add your saved locations to a trip group and let your friends vote. The location with the most votes will be your next adventure!",
    "Enhance your travel planning experience by saving your favorite spots today. Your dream trip is just a few votes away!",
  ],
};

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

  return (
    <main className="flex flex-col h-screen">
      <Title text="Saved" />
      <SectionInfo {...savedSectionInfo} />
      {savedLocations?.length <= 0 ? (
        <EmptyContentModal
          isOpen={savedLocations.length <= 0}
          onClose={() => setIsEmptyModalOpen(false)}
          title="Saved Destinations"
          message="No saved destinations yet. Start exploring to find your top destinations"
          buttonText="View locations"
          onRedirect={handleRedirect}
        />
      ) : (
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
      )}
    </main>
  );
}
