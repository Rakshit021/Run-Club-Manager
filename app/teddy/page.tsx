"use client";

import { useState } from "react";

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
    <main className="min-h-screen bg-[#fff9f5] flex flex-col">
      {/* HEADER */}

      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-lg border-b border-orange-100">
        <div className="px-4 py-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-2xl">
            🐶
          </div>

          <div>
            <h1 className="font-bold text-lg">
              Coach Teddy
            </h1>

            <p className="text-sm text-gray-500">
              Your running club assistant
            </p>
          </div>
        </div>
      </div>

      {/* CHAT */}

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((message, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-3xl px-4 py-3 whitespace-pre-wrap ${
              message.role === "user"
                ? "ml-auto bg-orange-400 text-white"
                : "bg-white shadow-sm"
            }`}
          >
            {message.content}
          </div>
        ))}

        {loading && (
          <div className="bg-white shadow-sm rounded-3xl px-4 py-3 w-fit">
            🐶 Teddy is thinking...
          </div>
        )}
      </div>

      {/* INPUT */}

      <div className="sticky bottom-0 bg-white border-t border-orange-100 p-4">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            placeholder="Ask Teddy for reel ideas..."
            className="flex-1 border border-orange-100 rounded-2xl px-4 py-3 outline-none"
          />

          <button
            onClick={sendMessage}
            disabled={loading}
            className="bg-gradient-to-r from-orange-400 to-orange-300 text-white px-5 rounded-2xl font-medium"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}