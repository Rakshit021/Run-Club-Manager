import Link from "next/link";

const actions = [
  {
    emoji: "🐶",
    title: "Coach Teddy",
    href: "/teddy",
  },

  {
    emoji: "🎬 ✍️",
    title: "Reel + Hooks Generator",
    href: "/ideas",
  },

  {
    emoji: "🏃",
    title: "Delhi Runs",
    subtitle: "Upcoming events",
    href: "/events",
  },

  {
    emoji: "📅",
    title: "Weekly Plan",
    href: "/planner",
  },
];

export default function QuickActions() {
  return (
    <section className="px-4 mt-8">
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="
              bg-white/30
              backdrop-blur-xl
              border border-white/30
              rounded-3xl
              shadow-[0_8px_30px_rgba(0,0,0,0.06)]
              p-5
              transition
              hover:scale-[1.03]
              active:scale-[0.98]
            "
          >
            {/* EMOJI */}

            <div className="text-4xl">
              {action.emoji}
            </div>

            {/* TITLE */}

            <h3 className="mt-4 font-semibold text-lg text-gray-900 leading-snug">
              {action.title}
            </h3>

            {/* SUBTITLE */}

            {"subtitle" in action && (
              <p className="mt-2 text-sm text-gray-600">
                {action.subtitle}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}