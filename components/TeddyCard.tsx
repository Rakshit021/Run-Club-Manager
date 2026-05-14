"use client";

import { motion } from "framer-motion";

type Trend = {
  title: string;
  views: string;
  category: string;
};

export default function TeddyCard({
  trend,
}: {
  trend: Trend;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="
        bg-white/45
        backdrop-blur-xl
        rounded-[28px]
        border border-white/30
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        p-5
      "
    >
      <div className="flex justify-between gap-4">
        {/* CONTENT */}

        <div className="flex-1">
          <span
            className="
              bg-orange-100/70
              text-orange-700
              px-3
              py-1
              rounded-full
              text-xs
              backdrop-blur-sm
              border border-orange-200/40
            "
          >
            {trend.category}
          </span>

          <h3 className="mt-4 text-lg font-semibold text-gray-900 leading-snug">
            {trend.title}
          </h3>

          <p className="mt-3 text-gray-600">
            🔥 {trend.views} views
          </p>
        </div>

        {/* TEDDY ICON */}

        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-white/40
            backdrop-blur-md
            border border-white/40
            flex
            items-center
            justify-center
            text-4xl
            shadow-sm
          "
        >
          🐶
        </div>
      </div>

      {/* BUTTONS */}

      <div className="flex gap-3 mt-6">
        <button
          className="
            flex-1
            bg-white/40
            backdrop-blur-md
            text-gray-800
            py-3
            rounded-2xl
            font-medium
            border border-white/40
            transition
            hover:scale-[1.02]
          "
        >
          🔖 Save
        </button>

        <button
          className="
            flex-1
            bg-orange-100/70
            backdrop-blur-md
            text-orange-700
            py-3
            rounded-2xl
            font-medium
            border border-orange-200/40
            transition
            hover:scale-[1.02]
          "
        >
          ✨ Remix
        </button>
      </div>
    </motion.div>
  );
}