"use client";

import { useState } from "react";

export default function Home() {
  const [output, setOutput] = useState("Click to generate playlist idea...");

  const prompt =
    "Use Spotify data and questionnaire responses to generate a playlist with the perfect vibe for this skater.";

  const generateText = async () => {
    setOutput(" Generating your perfect playlist...");
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        setOutput("Server returned invalid JSON.");
        return;
      }

      if (response.ok) {
        setOutput(data.output);
      } else {
        setOutput(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error(error);
      setOutput("Something went wrong.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">SkateBeatz</h1>
      <button
        onClick={generateText}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Generate Playlist
      </button>
      <p className="mt-6 text-center max-w-xl">{output}</p>
    </main>
  );
}