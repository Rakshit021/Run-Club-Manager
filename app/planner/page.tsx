"use client";

import { useState } from "react";

type DayPlan = {
  day: string;
  idea: string;
};

export default function PlannerPage() {
  const [loading, setLoading] =
    useState(false);

  const [plan, setPlan] =
    useState<DayPlan[]>([]);

  async function generatePlan() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/planner",
        {
          method: "POST",
        }
      );

      const data =
        await response.json();

      setPlan(data.plan);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#fff9f5] pb-32">
      {/* HEADER */}

      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-orange-100">
        <div className="px-4 py-4">
          <h1 className="text-2xl font-bold">
            📅 Weekly Plan
          </h1>

          <p className="text-gray-500 mt-1">
            Teddy helps plan your week
          </p>
        </div>
      </div>

      {/* GENERATE BUTTON */}

      <div className="px-4 mt-6">
        <button
          onClick={generatePlan}
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-400 to-orange-300 text-white py-4 rounded-3xl font-semibold shadow-sm"
        >
          {loading
            ? "🐶 Teddy is planning..."
            : "✨ Generate Weekly Plan"}
        </button>
      </div>

      {/* PLAN CARDS */}

      <div className="px-4 mt-8 space-y-4">
        {plan.map((item) => (
          <div
            key={item.day}
            className="bg-white rounded-3xl p-5 shadow-sm"
          >
            <h2 className="font-bold text-lg">
              {item.day}
            </h2>

            <p className="text-gray-600 mt-2">
              {item.idea}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}