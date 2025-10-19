"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function QuizPage() {
  const router = useRouter();

  const [answers, setAnswers] = useState({
    companion: "",
    time: "",
    duration: "",
    trick: "",
    color: "",
  });

  const handleChange = (field: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [field]: value }));
  };

  const handleDoubleClick = () => {
    // Save answers and redirect
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
    router.push("/results");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <Image
        src="/alternative.png"
        alt="Skate background"
        fill
        className="object-cover -z-10"
      />

      <div className="relative z-10 w-4/5 max-w-5xl p-10 text-black font-sans">
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Left column */}
          <div className="space-y-6 -translate-y-[8px]">
            <div className="p-4 rounded-md shadow-md">
              <h2 className="question-text mb-1">Who will be your companion?</h2>
              <select
                className="dropdown-text w-1/2 border border-gray-300 rounded-md p-1"
                onChange={(e) => handleChange("companion", e.target.value)}
              >
                <option value="">Select</option>
                <option value="Yourself">Yourself</option>
                <option value="Friends">Friends</option>
              </select>
            </div>

            <div className="p-4 rounded-md shadow-md">
              <h2 className="question-text mb-1">When will you skate?</h2>
              <select
                className="dropdown-text w-1/2 border border-gray-300 rounded-md p-1"
                onChange={(e) => handleChange("time", e.target.value)}
              >
                <option value="">Select</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
                <option value="Night">Night</option>
              </select>
            </div>

            <div className="p-4 rounded-md shadow-md">
              <h2 className="question-text mb-1">How long will you skate?</h2>
              <input
                type="text"
                placeholder="e.g. 2 hours"
                className="dropdown-text w-1/2 border border-gray-300 rounded-md p-1"
                onChange={(e) => handleChange("duration", e.target.value)}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6 translate-y-[195px]">
            <div className="p-4 rounded-md shadow-md">
              <h2 className="question-text mb-1">What is your favorite trick?</h2>
              <select
                className="dropdown-text w-1/2 border border-gray-300 rounded-md p-1"
                onChange={(e) => handleChange("trick", e.target.value)}
              >
                <option value="">Select</option>
                <option value="Ollie">Ollie</option>
                <option value="Nollie">Nollie</option>
                <option value="Backside">Backside</option>
                <option value="Kickflip">Kickflip</option>
                <option value="Heelflip">Heelflip</option>
                <option value="Tic Tacs">Tic Tacs</option>
              </select>
            </div>

            <div
              className="p-4 rounded-md shadow-md cursor-pointer"
              onDoubleClick={handleDoubleClick}
            >
              <h2 className="question-text mb-1">What is your favorite color?</h2>
              <select
                className="dropdown-text w-1/2 border border-gray-300 rounded-md p-1"
                onChange={(e) => handleChange("color", e.target.value)}
              >
                <option value="">Select</option>
                <option value="Red">Red</option>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="White">White</option>
                <option value="Black">Black</option>
                <option value="Purple">Purple</option>
                <option value="Pink">Pink</option>
                <option value="Yellow">Yellow</option>
              </select>
              <p className="text-sm italic text-[#0C415C] mt-1">
                Double-click this section after finishing the quiz to get your result
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
