import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Quiz() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center">
      <Image
        src="/skatebkgQuiz.jpg"
        alt="Skate background"
        fill
        className="object-cover -z-10"
      />
      <div className="absolute inset-0 bg-blue-500/70 rounded-3xl"></div>

      <div className="relative z-10 w-4/5 max-w-5xl p-10 text-black font-sans">
        <div className="bg-[url('/paperGrid.png')] bg-cover bg-center rounded-lg p-6 shadow-md mb-6 inline-block">
          <h1 className="text-3xl font-extrabold text-blue-900">
            What type of skater are you?
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left column */}
          <div className="space-y-6">

            <Image
              src="/note_6-removebg-preview.jpg"
              alt=""
              fill
              className="object-contain"
            />

            <div className="bg-[url('/linedPaper.png')] bg-cover p-4 rounded-md shadow-md">
              <h2 className="font-bold text-blue-900 mb-1">
                Who will be your companion?
              </h2>
              <p className="text-sm italic mb-2">Note: This is a dropdown</p>
              <select className="w-full border rounded p-1">
                <option>Yourself</option>
                <option>Friends</option>
              </select>
            </div>

            <div className="bg-[url('/linedPaper.png')] bg-cover p-4 rounded-md shadow-md">
              <h2 className="font-bold text-blue-900 mb-1">
                When will you skate?
              </h2>
              <p className="text-sm italic mb-2">Note: This is a dropdown</p>
              <select className="w-full border rounded p-1">
                <option>Morning</option>
                <option>Afternoon</option>
                <option>Evening</option>
                <option>Night</option>
              </select>
            </div>

            <div className="bg-[url('/linedPaper.png')] bg-cover p-4 rounded-md shadow-md">
              <h2 className="font-bold text-blue-900 mb-1">
                How long will you skate?
              </h2>
              <p className="text-sm italic mb-2">
                Note: This is a space for entering time
              </p>
              <input
                type="text"
                placeholder="e.g. 2 hours"
                className="w-full border rounded p-1"
              />
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-6">


            <Image
              src="/note 7.jpg"
              alt=""
              fill
              className="object-contain"
            />

            <div className="bg-[url('/linedPaper.png')] bg-cover p-4 rounded-md shadow-md">
              <h2 className="font-bold text-blue-900 mb-1">
                What is your favorite trick?
              </h2>
              <p className="text-sm italic mb-2">Note: This is a dropdown</p>
              <select className="w-full border rounded p-1">
                <option>Ollie</option>
                <option>Nollie</option>
                <option>Backside</option>
                <option>Kickflip</option>
                <option>Heelflip</option>
                <option>Tic Tacs</option>
              </select>
            </div>

            <div className="bg-[url('/linedPaper.png')] bg-cover p-4 rounded-md shadow-md">
              <h2 className="font-bold text-blue-900 mb-1">
                What is your favorite color?
              </h2>
              <p className="text-sm italic mb-2">Note: This is a dropdown</p>
              <select className="w-full border rounded p-1">
                <option>Red</option>
                <option>Blue</option>
                <option>Green</option>
                <option>White</option>
                <option>Black</option>
                <option>Purple</option>
                <option>Pink</option>
                <option>Yellow</option>
              </select>
            </div>

            <div className="bg-yellow-200 p-4 rounded-md shadow-md transform rotate-2 hover:rotate-0 transition-transform">
              <button className="text-blue-900 font-bold text-lg">
                Let’s find out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
