"use client";

import { useEffect, useState } from "react";

type Event = {
  name: string;
  date: string;
  location: string;
  vibe: string;
  reelIdea: string;
};

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    async function loadEvents() {
      const response = await fetch("/api/events");
      const data = await response.json();
      setEvents(data.events || []);
    }

    loadEvents();
  }, []);

  return (
<main className="min-h-screen px-4 py-8">
  <div
    className="
      bg-white/20
      backdrop-blur-xl

      border border-white/30

      rounded-[32px]

      p-6

      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
    "
  >
    <div className="flex items-center gap-4">
      {/* ICON */}

      <div
        className="
          w-14
          h-14

          rounded-2xl

          bg-white/40
          backdrop-blur-md

          border border-white/40

          flex
          items-center
          justify-center

          text-3xl
        "
      >
        🏃
      </div>

      {/* TEXT */}

      <div>
        <h1 className="text-3xl font-bold text-black/90">
          Upcoming Runs
        </h1>

        <p className="mt-1 text-black/70">
          Teddy found these for Aditi ✨
        </p>
      </div>
    </div>
  </div>

      <div className="mt-8 space-y-5">
        {events.map((event) => (
          <div
            key={event.name}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >
            <h2 className="text-xl font-semibold">
              {event.name}
            </h2>

            <p className="text-gray-500 mt-1">
              📍 {event.location}
            </p>

            <p className="text-gray-500">
              🗓️ {event.date}
            </p>

            <div className="mt-4 bg-orange-50 p-3 rounded-xl">
              🐶 {event.vibe}
            </div>

            <p className="mt-3 text-sm text-gray-600">
              ✨ {event.reelIdea}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}