import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
  try {
    const prompt = `
Create a 7-day Instagram content plan
for Aditi's running club.

Tone:
- warm
- aesthetic
- motivating
- community-focused

Include:
- reel ideas
- Teddy-themed content
- emotional storytelling
- beginner-friendly ideas

Return ONLY valid JSON in this format:

[
  {
    "day": "Monday",
    "idea": "..."
  }
]
`;

    const response =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      });

    const text =
      response.choices[0].message.content;

    const plan = JSON.parse(text);

    return NextResponse.json({
      plan,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to generate plan",
      },
      {
        status: 500,
      }
    );
  }
}