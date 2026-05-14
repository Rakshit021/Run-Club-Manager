// src/app/api/generate/route.ts

import { NextRequest, NextResponse } from "next/server";

import { openai } from "@/lib/openai";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { type } = body;

    let prompt = "";

    if (type === "reel") {
      prompt = `
Generate 3 viral Instagram reel ideas
for Aditi's women's running club.

Include:
- emotional hooks
- cinematic moments
- community vibes
- dog moments with Teddy the Shih Tzu
- trending captions
- hashtags
`;
    }

    if (type === "hooks") {
      prompt = `
Generate 15 viral hooks
for a girls running club Instagram.

The brand personality is:
warm,
motivational,
feminine,
community driven,
dog-friendly.
`;
    }

    if (type === "caption") {
      prompt = `
Generate an emotional Instagram caption
for Aditi's run club.

Include:
- storytelling
- motivation
- emojis
- CTA
- hashtags
`;
    }

    const response =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              "You are an elite Instagram growth strategist.",
          },

          {
            role: "user",
            content: prompt,
          },
        ],
      });

    return NextResponse.json({
      result:
        response.choices[0].message.content,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Generation failed",
      },
      { status: 500 }
    );
  }
}
