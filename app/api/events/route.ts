import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const events = [
  {
    name: "Delhi Half Marathon",
    date: "May 24",
    location: "Jawaharlal Nehru Stadium",
  },

  {
    name: "Sunday Sunrise Community Run",
    date: "May 18",
    location: "Lodhi Garden",
  },

  {
    name: "Women’s Social 5K",
    date: "May 21",
    location: "Nehru Park",
  },
];

export async function GET() {
  try {
    const prompt = `
You are Teddy, Aditi's adorable Shih Tzu
running assistant.

For each running event below,
generate:
- a cozy one-line vibe
- a short Instagram reel idea

Return ONLY valid JSON.

Format:

[
  {
    "name": "...",
    "date": "...",
    "location": "...",
    "vibe": "...",
    "reelIdea": "..."
  }
]

Events:
${JSON.stringify(events)}
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

    const enrichedEvents =
      JSON.parse(cleaned);

    return NextResponse.json({
      events: enrichedEvents,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to fetch events",
      },
      {
        status: 500,
      }
    );
  }
}