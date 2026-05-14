"use client";

import { useState } from "react";

export default function IdeasPage() {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState("");

  const [type, setType] =
    useState("reel");

  async function generate() {
    setLoading(true);

    const response = await fetch(
      "/api/generate",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          type,
        }),
      }
    );

    const data =
      await response.json();

    setResult(data.result);

    setLoading(false);
  }

  return (
    <main className="min-h-screen p-4 pb-24">
      {/* HERO CARD */}

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
        {/* HEADER */}

        <div className="flex items-center gap-4">
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
            🐶
          </div>

          <div>
            <h1 className="text-3xl font-bold text-black/90">
              Coach Teddy
            </h1>

            <p className="mt-1 text-black/70">
              Create viral running
              content ✨
            </p>
          </div>
        </div>

        {/* FORM */}

        <div className="mt-8">
          <label className="font-semibold text-black/80">
            Content Type
          </label>

          <select
            className="
              w-full
              mt-3

              bg-white/80
              backdrop-blur-xl

              border border-white/50

              rounded-2xl

              p-4

              text-gray-900
              font-medium

              shadow-sm

              outline-none
            "
            value={type}
            onChange={(e) =>
              setType(e.target.value)
            }
          >
            <option
              value="reel"
              className="text-black"
            >
              Reel Ideas
            </option>

            <option
              value="hooks"
              className="text-black"
            >
              Viral Hooks
            </option>

            <option
              value="caption"
              className="text-black"
            >
              Captions
            </option>
          </select>

          {/* BUTTON */}

          <button
            onClick={generate}
            className="
              mt-6
              w-full

              bg-gradient-to-r
              from-orange-400
              to-pink-300

              text-white

              py-4
              rounded-2xl

              font-semibold

              shadow-lg

              transition
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            {loading
              ? "🐶 Teddy is sniffing trends..."
              : "Sprint Ideas ✨"}
          </button>
        </div>
      </div>

      {/* RESULTS */}

      {result && (
        <div
          className="
            mt-6

            bg-white/85
            backdrop-blur-xl

            border border-white/40

            rounded-[32px]

            p-6

            shadow-[0_8px_30px_rgba(0,0,0,0.08)]

            text-gray-900

            whitespace-pre-wrap

            leading-relaxed

            text-[15px]

            font-medium
          "
        >
          {result}
        </div>
      )}
    </main>
  );
}