"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Results() {
  const [output, setOutput] = useState("Generating your perfect playlist...");
  const [answers, setAnswers] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedAnswers = localStorage.getItem("quizAnswers");
      if (storedAnswers) {
        try {
          setAnswers(JSON.parse(storedAnswers));
        } catch (err) {
          console.error("Failed to parse quizAnswers:", err);
          setOutput("Error loading your quiz results.");
        }
      } else {
        setOutput("No quiz results found. Please complete the quiz first!");
      }
    }
  }, []);

  useEffect(() => {
    if (!answers) return;

    const prompt = `
      Use Spotify data and questionnaire responses to generate a playlist 
      with the perfect vibe for this skater. 
      You are an assistant that generates a list of songs based on these quiz results: 
      ${JSON.stringify(answers)}.
      Please return JSON in this format:
      {"recommendations": ["Song - Artist", "Song - Artist", ...]} 
      Take into account the length of time the skateboarder will be skating. ONE LINE OF TEXT ONLY PLEASE. ALSO IF IT EXCEEDS 13 songs, only show 12 songs, and END WITH "... and more! (you're skating for too long!!!)" 
    `;

    const generateText = async () => {
      try {
        const response = await fetch("/api/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prompt }),
        });

        const data = await response.json();

        if (!response.ok) {
          setOutput(`Error: ${data.error || "Failed to generate playlist."}`);
          return;
        }

        const playlist =
          typeof data.output === "string" ? JSON.parse(data.output) : data.output;

        if (
          playlist?.recommendations &&
          Array.isArray(playlist.recommendations)
        ) {
          setOutput(playlist.recommendations.join("\n"));
        } else {
          setOutput(
            "Invalid response format. Expected {recommendations: [...]}."
          );
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setOutput("Something went wrong while generating your playlist.");
      }
    };

    generateText();
  }, [answers]);

  return (
    <div className='col-start col-span-3 row-start row-span-3'>
      <img src={"/Radical.png"} className='object-cover absolute z-[-10] bkg'/>
      <div
        className="absolute z-10 text-center text-white drop-shadow-lg max-w-2xlg"
        style={{ top: "30%", right: "10%", left: "40%" }}
      >
        <p className="--color-7 resultBody-text">
          You have really gnarly taste, dude! I thought you’d enjoy some awesome, groovy music. Check this out:
        </p>
      </div>
      <div
        className="absolute z-10 text-center drop-shadow-lg w-full"
        style={{ bottom: "15%", top: "57%" }}
      >
        <pre className="whitespace-pre-line mono text-lg leading-relaxed">
          {output}
        </pre>
      </div>
    </div>
  );
}