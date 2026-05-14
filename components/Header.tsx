export default function Header() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div
        className="
          bg-white/20
          backdrop-blur-xl
          border border-white/30
          rounded-[28px]
          px-5
          py-4
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        "
      >
        <div className="flex items-center justify-between">
          {/* LEFT */}

          <div>
            <p className="text-sm text-gray-700">
              Good evening ✨
            </p>

            <h1
              className="
                text-2xl
                font-bold
                text-gray-900
                leading-tight
              "
            >
              Aditi & Teddy 🐶
            </h1>
          </div>

          {/* RIGHT */}

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-white/30
              backdrop-blur-md
              border border-white/40
              flex
              items-center
              justify-center
              text-3xl
              shadow-sm
            "
          >
            🐾
          </div>
        </div>
      </div>
    </header>
  );
}