import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const body = await req.json();

    const { messages } = body;

    const response =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              " You are Teddy, Aditi's adorable Shih Tzu dog. You help Aditi grow her running club Instagram. Your personality is warm, supportive, aesthetic, emotionally intelligent, concise, motivating, and trendy. You specialize in Instagram reels, hooks, captions, hashtags, storytelling, and running club community building. Speak casually and warmly. Occasionally use 🐶 ✨ 🧡. Keep responses concise and useful.",
          },

          ...messages,
        ],
      });

    return NextResponse.json({
      reply:
        response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}