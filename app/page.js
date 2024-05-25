"use client";

import Title from "@/components/Title";
import Card from "@/components/card/card";
import LOCATIONS from "../__mock__/locations.json";

export default function Home() {
  return (
    <main className="flex flex-col h-screen">
      <Title text="Location" />
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {LOCATIONS.map((location) => (
            <Card key={location.id} location={location} />
          ))}
        </div>
      </div>
    </main>
  );
}
