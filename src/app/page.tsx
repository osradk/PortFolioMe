
"use client"
import type { NextPage } from 'next';
import Link from 'next/link';
import { useEffect } from 'react';

const WelcomePage: NextPage = () => {
  useEffect(() => {
    const styleSheet = document.styleSheets[0];
    const fadeInScaleUp = `
      @keyframes fadeInScaleUp {
        0% {
          opacity: 0;
          transform: scale(0.9);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
    `;
    styleSheet.insertRule(fadeInScaleUp, styleSheet.cssRules.length);
  }, []);

  return (
    <div className="relative flex h-screen items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 overflow-hidden">
      <div className="z-10 text-center animate-fadeInScaleUp">
        <h1 className="text-4xl text-white mb-4 text-shadow"> Hello, I'm <span className="text-[#d6ae57] font-bold">Osra Almousavi</span>.</h1>
        <p className="text-xl text-white mb-8 text-shadow">I'm a web developer.</p>
        <Link href="/home">
          <span className="inline-block bg-transparent border border-[#d6ae57] text-white py-2 px-6 rounded-full hover:bg-[#d6ae57] hover:text-gray-200 transition duration-500 ease-in-out text-shadow shadow-lg shadow-cyan-500/50">
            View my work
          </span>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
