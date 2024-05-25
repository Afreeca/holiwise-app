"use client";

import Title from "@/components/Title";

export default function nextTrip() {
  return (
    <main className="flex flex-col h-screen">
      <Title text="Next Trip" />
      <div className="flex-1 overflow-auto"></div>
    </main>
  );
}
