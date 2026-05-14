import Link from "next/link";

import {
  Home,
  Sparkles,
  Calendar,
  MessageCircle,
} from "lucide-react";

export default function BottomNav() {
  return (
    <nav
      className="
        fixed
        bottom-0
        left-0
        right-0

        z-50

        px-4
        pb-4
      "
    >
      <div
        className="
          bg-white/25
          backdrop-blur-xl

          border border-white/30

          rounded-[28px]

          shadow-[0_8px_30px_rgba(0,0,0,0.08)]

          py-4

          flex
          justify-around
          items-center
        "
      >
        {/* HOME */}

        <Link
          href="/"
          className="
            flex
            flex-col
            items-center
            gap-1

            text-gray-800
            text-sm

            transition
            hover:scale-105
          "
        >
          <Home size={20} />
          Home
        </Link>

        {/* IDEAS */}

        <Link
          href="/ideas"
          className="
            flex
            flex-col
            items-center
            gap-1

            text-gray-800
            text-sm

            transition
            hover:scale-105
          "
        >
          <Sparkles size={20} />
          Ideas
        </Link>

        {/* TEDDY CHAT */}

        <Link
          href="/teddy"
          className="
            flex
            flex-col
            items-center
            gap-1

            text-gray-900
            text-sm
            font-medium

            transition
            hover:scale-105
          "
        >
          <div
            className="
              w-12
              h-12

              rounded-2xl

              bg-white/40
              backdrop-blur-md

              border border-white/40

              flex
              items-center
              justify-center

              shadow-sm
            "
          >
            🐶
          </div>

          Teddy
        </Link>

        {/* PLANNER */}

        <Link
          href="/planner"
          className="
            flex
            flex-col
            items-center
            gap-1

            text-gray-800
            text-sm

            transition
            hover:scale-105
          "
        >
          <Calendar size={20} />
          Planner
        </Link>
      </div>
    </nav>
  );
}