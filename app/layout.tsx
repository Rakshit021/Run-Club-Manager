import "./globals.css";

export const metadata = {
  title: "Aditi Run Club",
  description:
    "Built for Aditi and Teddy 🐶",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-x-hidden">

        {/* BACKGROUND IMAGE */}

        <div
  className="fixed inset-0 -z-20 bg-[#f8ede3] bg-contain bg-top bg-no-repeat"
          style={{
            backgroundImage:
              "url('/img1.png')",
          }}
        />

        {/* OVERLAY */}

        <div className="fixed inset-0 -z-10 bg-black/25" />

        {/* APP */}

        <div className="relative z-10">
          {children}
        </div>

      </body>
    </html>
  );
}