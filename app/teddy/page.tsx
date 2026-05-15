"use client";

import {
  useEffect,
  useState,
} from "react";


type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function TeddyPage() {

  const [input, setInput] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        role: "assistant",
        content:
          "🐶 Hi Aditi! I'm Teddy. What are we creating today?",
      },
    ]);

  useEffect(() => {
  const params =
    new URLSearchParams(
      window.location.search
    );

  const prompt =
    params.get("prompt");

  if (prompt) {
    setInput(prompt);

    autoSendPrompt(prompt);
  }
}, []);

  /* AUTO SEND FUNCTION */

  async function autoSendPrompt(
    prompt: string
  ) {
    const userMessage: Message = {
      role: "user",
      content: prompt,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);

    setInput("");

    try {
      setLoading(true);

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            messages: updatedMessages,
          }),
        }
      );

      const data =
        await response.json();

      setMessages([
        ...updatedMessages,

        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  /* NORMAL SEND */

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
    };

    const updatedMessages = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedMessages);

    setInput("");

    try {
      setLoading(true);

      const response = await fetch(
        "/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            messages: updatedMessages,
          }),
        }
      );

      const data =
        await response.json();

      setMessages([
        ...updatedMessages,

        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col px-4 pb-28">
      {/* HEADER */}

      <div
        className="
          sticky
          top-0
          z-20
          pt-4
        "
      >
        <div
          className="
            bg-white/20
            backdrop-blur-xl

            border border-white/30

            rounded-[28px]

            px-5
            py-4

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
              🐶
            </div>

            {/* TEXT */}

            <div>
              <h1 className="font-bold text-2xl text-black/90">
                Coach Teddy
              </h1>

              <p className="text-sm text-black/70">
                Your running club
                companion ✨
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CHAT */}

      <div className="flex-1 overflow-y-auto py-6 space-y-4">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-[28px] px-5 py-4 whitespace-pre-wrap leading-relaxed shadow-sm ${
              message.role === "user"
                ? `
                  ml-auto

                  bg-gradient-to-r
                  from-orange-400
                  to-pink-300

                  text-white
                `
                : `
                  bg-white/80
                  backdrop-blur-xl

                  border border-white/40

                  text-gray-900
                `
            }`}
          >
            {message.content}
          </div>
        ))}

        {/* LOADING */}

        {loading && (
          <div
            className="
              bg-white/80
              backdrop-blur-xl

              border border-white/40

              text-gray-900

              rounded-[28px]

              px-5
              py-4

              w-fit

              shadow-sm
            "
          >
            🐶 Teddy is thinking...
          </div>
        )}
      </div>

      {/* INPUT */}

      <div
        className="
          sticky
          bottom-20
          z-20
        "
      >
        <div
          className="
            bg-white/30
            backdrop-blur-xl

            border border-white/30

            rounded-[28px]

            p-3

            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          "
        >
          <div className="flex gap-3">
           <input
  value={input}
  onChange={(e) =>
    setInput(e.target.value)
  }
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  }}
  placeholder="Ask Teddy for reel ideas..."
  className="
    flex-1

    bg-white/70

    border border-white/50

    rounded-2xl

    px-4
    py-3

    outline-none

    text-gray-900
    placeholder:text-gray-500
  "
/>

            <button
              onClick={sendMessage}
              disabled={loading}
              className="
                bg-gradient-to-r
                from-orange-400
                to-pink-300

                text-white

                px-6

                rounded-2xl

                font-medium

                transition
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}