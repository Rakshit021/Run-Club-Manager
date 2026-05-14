"use client";

import { motion } from "framer-motion";

type Props = {
  image: string;
  hook: string;
  views: string;
  hashtags?: string[];
};

export default function TrendCard({
  image,
  hook,
  views,
  hashtags = [],
}: Props) {
  function handleRemix() {
    const prompt = encodeURIComponent(
      `Remix this Instagram hook: ${hook}`
    );

    window.location.href =
      `/teddy?prompt=${prompt}`;
  }

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="
        bg-white/45
        backdrop-blur-xl
        rounded-[28px]
        border border-white/30
        shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        overflow-hidden
      "
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden rounded-t-[28px]">
        <img
          src={image}
          alt={hook}
          className="
            w-full
            h-72
            object-cover
          "
        />

        {/* IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* VIEWS */}

        <div
          className="
            absolute
            top-4
            left-4
            bg-black/40
            text-white
            text-sm
            px-3
            py-1
            rounded-full
            backdrop-blur-md
          "
        >
          🔥 {views}
        </div>
      </div>

      {/* CONTENT */}

      <div className="p-5">
        <h2 className="text-xl font-semibold leading-snug text-gray-900">
          {hook}
        </h2>

        {/* HASHTAGS */}

        <div className="flex flex-wrap gap-2 mt-4">
          {hashtags.map((tag) => (
            <span
              key={tag}
              className="
                text-xs
                bg-orange-50/70
                text-orange-700
                px-2
                py-1
                rounded-full
                backdrop-blur-sm
              "
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* BUTTONS */}

        <div className="flex gap-3 mt-5">
          <button
            onClick={handleRemix}
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
        </div>
      </div>
    </motion.div>
  );
}