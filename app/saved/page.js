"use client";

import DroppableArea from "@/components/DroppableArea";
import EmptyContentModal from "@/components/EmptyConten";
import Title from "@/components/Title";
import Card from "@/components/card/card";
import { useGlobalContext } from "@/context/global";
import { useRouter } from "next/navigation";

const EmptyGroups = () => {
  return (
    <div className="mb-6 border-dashed border-2 border-gray-300 p-4 mt-4 bg-gray-100 relative">
      <div className="text-center">
        <p className="text-xl font-semibold">No groups found</p>
        <p className="text-gray-500">
          You haven't created any groups yet. Start planning your next trip by
          creating groups!
        </p>
      </div>
    </div>
  );
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
              <EmptyGroups />
            ) : (
              groups.map((group, index) => (
                <div key={index} className="w-auto ">
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
