"use client";

import BackButton from "@/components/BackButton";
import Title from "@/components/Title";
import EmptyContentModal from "@/components/empty/EmptyContentModal";
import GroupDetailInfo from "@/components/groups/GroupDetailInfo";
import LocationCards from "@/components/groups/LocationCards";
import UserCards from "@/components/groups/UserCards";
import ConfirmationDialog from "@/components/modal/ConfirmationDialog";
import { useGlobalContext } from "@/context/global";
import {
  faExclamationTriangle,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GroupDetails({ params: { groupId } }) {
  const [showModal, setShowModal] = useState(false);
  const [draggedItem, setDraggedItem] = useState(null);
  const [touchMovePoint, setTouchMovePoint] = useState(null);
  const router = useRouter();
  const { getGroup, updateGroupVoting, setGroups } = useGlobalContext();
  const group = getGroup(Number(groupId));

  const handleOnDrag = (e, username) => {
    setDraggedItem(username);
    e.dataTransfer.setData("application/json", JSON.stringify(username));
  };

  const handleOnDrop = (e, itemId) => {
    const dataString = e.dataTransfer.getData("application/json");
    const username = JSON.parse(dataString);

    const userVote = group.voting[itemId]?.find(
      (vote) => vote.username === username
    );

    if (userVote && userVote.votes >= 3) {
      setShowModal(true);
      return;
    }

    updateGroupVoting(group.id, itemId, username);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleTouchStart = (e, username) => {
    setDraggedItem(username);
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
      const itemId = dropTarget?.closest("[data-itemid]")?.dataset?.itemid;

      if (itemId) {
        const dataString = JSON.stringify(draggedItem);
        const username = JSON.parse(dataString);

        const userVote = group.voting[itemId]?.find(
          (vote) => vote.username === username
        );

        if (userVote && userVote.votes >= 3) {
          setShowModal(true);
          return;
        }

        updateGroupVoting(group.id, itemId, username);
      }
    }
    setDraggedItem(null);
    setTouchMovePoint(null);
  };

  const handleRedirect = () => {
    router.push(`/groups`);
  };

  if (!group) {
    return (
      <EmptyContentModal
        onClose={() => setIsEmptyModalOpen(false)}
        title="Group"
        message="Group not found. Create a new group to get started."
        buttonText="Create Group"
        onRedirect={handleRedirect}
      />
    );
  }

  return (
    <main className="flex flex-col h-screen">
      <BackButton title="Go back" />
      <Title text="Group Detail" />
      <div className="flex flex-col flex-1 gap-4 overflow-auto">
        <GroupDetailInfo group={group} />
        <LocationCards
          group={group}
          handleOnDrag={handleOnDrag}
          handleOnDrop={handleOnDrop}
          handleDragOver={handleDragOver}
        />
        <div className="mt-4">
          {group?.items.length > 0 && (
            <>
              <div className="flex items-center mb-2">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="mr-1 text-blue-500"
                />
                <span className="text-gray-700">
                  You have 3 votes available. Drag and drop the star once or
                  multiple times on top of the location to vote.
                </span>
              </div>
              <div className="flex items-center text-red-600 mb-2">
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className="mr-1"
                />
                <span>You can&apos;t undo your votes.</span>
              </div>
            </>
          )}
          <UserCards
            group={group}
            handleOnDrag={handleOnDrag}
            handleTouchStart={handleTouchStart}
            handleTouchMove={handleTouchMove}
            handleTouchEnd={handleTouchEnd}
          />
        </div>
      </div>
      <ConfirmationDialog
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Vote limit"
        description="You have already voted three times"
        onConfirm={() => setShowModal(false)}
      />
    </main>
  );
}
