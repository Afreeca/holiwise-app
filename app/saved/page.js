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
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function Saved() {
  const { savedLocations, groups, addGroupItem } = useGlobalContext();
  const router = useRouter();
  const [draggedItem, setDraggedItem] = useState(null);
  const [touchMovePoint, setTouchMovePoint] = useState(null);

  const handleRedirect = useCallback(() => {
    router.push(`/`);
  }, [router]);

  const handleOnDrag = (e, data) => {
    setDraggedItem(data);
    e.dataTransfer.setData("application/json", JSON.stringify(data));
  };

  const handleTouchStart = (e, data) => {
    setDraggedItem(data);
    setTouchMovePoint(null);
    e.target.style.opacity = 0.5;
  };

  const handleTouchMove = (e) => {
    setTouchMovePoint({ x: e.touches[0].clientX, y: e.touches[0].clientY });
  };

  const handleTouchEnd = () => {
    if (touchMovePoint && draggedItem) {
      const dropTarget = document.elementFromPoint(
        touchMovePoint.x,
        touchMovePoint.y
      );
      const groupId = dropTarget?.closest("[data-groupid]")?.dataset?.groupid;
      if (groupId) {
        addGroupItem(Number(groupId), draggedItem);
      }
    }
    setDraggedItem(null);
    setTouchMovePoint(null);
  };

  const handleOnDrop = (e, groupId) => {
    e.preventDefault();
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
                  <DroppableArea
                    key={group.id}
                    group={group}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleOnDrop(e, group.id)}
                  />
                ))}
              </Slide>
            </div>
          )}
        </div>

        <div className="flex-1 overflow-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {savedLocations.map((location) => (
              <Card
                key={location.id}
                location={location}
                onDragStart={(e) => handleOnDrag(e, location)}
                onTouchStart={(e) => handleTouchStart(e, location)}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
