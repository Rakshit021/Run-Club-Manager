import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

type Trend = {
  hook: string;
  views: string;
  image: string;
  hashtags: string[];
};

export async function GET() {
  try {
    const prompt = `
Generate 5 trending Instagram reel ideas
for a cozy aesthetic women owned running club.

Return ONLY valid JSON.

Format:

[
  {
    "hook": "...",
    "views": "...",
    "image": "...",
    "hashtags": ["...", "..."]
  }
]

Image must ONLY be one of these exact values:

- girls-running-sunrise
- cozy-run-club
- morning-jog
- dogs-running
- scenic-running-route

Hooks should feel viral, emotional,
and Gen Z creator style.
`;

    const response =
      await openai.chat.completions.create({
        model: "gpt-4o-mini",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const text =
      response.choices[0].message.content || "[]";

    const cleaned = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const trends: Trend[] =
  JSON.parse(cleaned);

    return NextResponse.json({
      trends,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch trends",
      },
      {
        status: 500,
      }
    );
  }
}