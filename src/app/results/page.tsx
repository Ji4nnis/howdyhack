import Link from "next/link";
import React from 'react';
import Image from 'next/image';
export default function Quiz() {
    return (
        <div className="relative min-h-screen w-full flex items-center justify-center">
      <Image
        src="/skatebkgQuiz.jpg"
        alt="Skate background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-blue-500/70 rounded-3xl"></div>
