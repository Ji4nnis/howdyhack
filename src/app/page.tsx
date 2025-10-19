"use client";

import { useState } from "react";

export default function Home() {
  const [output, setOutput] = useState("Click to generate playlist idea...");

  const prompt =
    "Use Spotify data and questionnaire responses to generate a playlist with the perfect vibe for this skater.You are an assistant that generates JSON. You always return JSON with no additional text. Please Generate a list of 5 songs in JSON format. The songs should relate to this image. Use the format like this example Example: {'recommendations': ['Song - Artist', 'Song - Artist', ...]}.";

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
        try {
          // Parse the output as JSON if it's a string
          const playlist = typeof data.output === 'string' ? JSON.parse(data.output) : data.output;
          if (playlist.recommendations && Array.isArray(playlist.recommendations)) {
            setOutput(playlist.recommendations.join('\n'));
          } else {
            setOutput('Invalid response format. Expected {recommendations: [...]}');
          }
        } catch (e) {
          setOutput('Error parsing playlist: ' + data.output);
        }
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

