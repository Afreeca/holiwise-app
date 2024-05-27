"use client";

import SectionInfo from "@/components/SectionInfo/SectionInfo";
import Title from "@/components/Title";
import Card from "@/components/card/card";
import DroppableArea from "@/components/dragAndDrop/DroppableArea";
import EmptyContent from "@/components/empty/EmptyContent";
import EmptyContentModal from "@/components/empty/EmptyContentModal";
import Slide from "@/components/slide/Slide";
import { useGlobalContext } from "@/context/global";
import { savedSectionInfo } from "@/utils/constants";
import { DndContext, DragOverlay } from "@dnd-kit/core";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function Saved() {
  const [activeItem, setActiveItem] = useState(null);
  const { savedLocations, groups, addGroupItem } = useGlobalContext();
  const router = useRouter();

  const handleRedirect = useCallback(() => {
    router.push(`/`);
  }, [router]);

  const handleDragStart = (event) => {
    setActiveItem(event.active.data.current);
  };

  const handleDragEnd = (event) => {
    const { over } = event;
    if (over && over.id) {
      addGroupItem(over.id, activeItem);
    }
    setActiveItem(null);
  };

  if (savedLocations?.length <= 0) {
    return (
      <EmptyContentModal
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
      <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-shrink flex flex-wrap">
            {groups.length <= 0 ? (
              <EmptyContent
                title="No groups found"
                text="You haven't created any groups yet. Start planning your next trip by creating groups!"
              />
            ) : (
              <div className="mb-2">
                <Slide>
                  {groups.map((group) => (
                    <DroppableArea key={group.id} group={group} />
                  ))}
                </Slide>
              </div>
            )}
          </div>
          <span className="text-gray-700">
            Sure, let's plan the trip of a lifetime! Drag and drop your dream
            location, and let's get ready to vote! 🌍✈️
          </span>
          <div className="flex-1 overflow-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {savedLocations.map((location) => (
                <Card key={location.id} location={location} />
              ))}
            </div>
          </div>
        </div>
        <DragOverlay>
          {activeItem ? <Card location={activeItem} small /> : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
}
