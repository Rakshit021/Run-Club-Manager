"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TeddyCard from "../components/TeddyCard";
import QuickActions from "../components/QuickActions";
import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import TrendCard from "@/components/TrendCard";

type Trend = {
  hook: string;
  views: string;
  image: string;
  hashtags: string[];
};
const imageMap: Record<string, string> = {
  "girls-running-sunrise":
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200",

  "cozy-run-club":
    "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1200",

  "morning-jog":
    "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=1200",

  "dogs-running":
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1200",

  "scenic-running-route":
    "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200",
};
export default function HomePage() {
  const [trends, setTrends] =
    useState<Trend[]>([]);

  useEffect(() => {
    async function loadTrends() {
      try {
        const response = await fetch(
          "/api/trends"
        );

        const data =
          await response.json();

        setTrends(data.trends || []);
      } catch (error) {
        console.error(error);
      }
    }

    loadTrends();
  }, []);

  return (
    <main className="min-h-screen pb-28">
      <Header />

      {/* HERO */}

      <section className="px-4 mt-6">
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
    {/* SMALL LABEL */}

    <div
      className="
        inline-flex
        items-center
        gap-2
        bg-white/30
        backdrop-blur-md
        border border-white/40
        rounded-full
        px-4
        py-2
        text-sm
        text-gray-800
      "
    >
      🐶 Teddy is online
    </div>

    {/* TITLE */}

    <h2
      className="
        text-4xl
        font-bold
        text-gray-900
        mt-5
        leading-tight
      "
    >
      Good Evening,
      <br />
      Aditi ✨
    </h2>

    {/* DESCRIPTION */}

    <p
      className="
        mt-4
        text-gray-700
        text-lg
        leading-relaxed
      "
    >
      Teddy found fresh running
      inspiration and trending
      Delhi runs for today 🏃
    </p>

    {/* BUTTON */}

    <button
      className="
        mt-6
        bg-white/30
        backdrop-blur-md
        border border-white/40
        text-gray-900
        px-6
        py-4
        rounded-2xl
        font-semibold
        transition
        hover:scale-[1.02]
      "
    >
      Start Your Next Run Story ✨
    </button>
  </div>
</section>

      {/* QUICK ACTIONS */}

      <QuickActions />

      {/* TRENDING FEED */}

      <section className="px-4 mt-10 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">
              Trending Today ✨
            </h2>

            <p className="text-gray-500 mt-1">
              Teddy picked these for Aditi
            </p>
          </div>
        </div>

        {trends.map((trend) => (
          <TrendCard
            key={trend.hook}
            hook={trend.hook}
            views={trend.views}
image={
      imageMap[trend.image] ||
      imageMap["girls-running-sunrise"]
    }
                hashtags={trend.hashtags}
          />
        ))}
      </section>

      {/* FLOATING TEDDY BUTTON */}

      <motion.div
  animate={{
    y: [0, -8, 0],
    scale: [1, 1.04, 1],
  }}
  transition={{
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="fixed bottom-24 right-5 z-50"
>
  {/* GLOW */}

  <div
    className="
      absolute
      inset-0
      rounded-full
      bg-orange-300/30
      blur-2xl
      scale-125
    "
  />

  {/* BUTTON */}

  <Link
    href="/teddy"
    className="
      relative

      w-16
      h-16

      rounded-full

      bg-white/25
      backdrop-blur-xl

      border border-white/30

      flex
      items-center
      justify-center

      text-3xl

      shadow-[0_8px_30px_rgba(0,0,0,0.12)]

      transition
      hover:scale-110
      active:scale-95
    "
  >
    🐾
  </Link>
</motion.div>

      <BottomNav />
    </main>
  );
}