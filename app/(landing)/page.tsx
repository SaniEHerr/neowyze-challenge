"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [hoveredFilm, setHoveredFilm] = useState(false);
  const [hoveredCharacter, setHoveredCharacter] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFilmHover = () => {
    if (!isMobile) {
      setHoveredFilm(!hoveredFilm);
    }
  };

  const handleCharacterHover = () => {
    if (!isMobile) {
      setHoveredCharacter(!hoveredCharacter);
    }
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-center gap-8 mx-auto font-starjedi py-4 px-0">
      <Link href="/films">
        <div
          className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-5 text-4xl flex justify-center items-center w-[291px] md:w-[300px] h-[200px] md:h-[400px] hover:bg-zinc-600 transition duration-300 ease-in-out rounded-md"
          onMouseEnter={handleFilmHover}
          onMouseLeave={handleFilmHover}
        >
          <p>
            {hoveredFilm || isMobile ? (isMobile ? "Tap" : "Click") + " for know more about films" : "Films"}
          </p>
        </div>
      </Link>

      <Link href="/characters">
        <div
          className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-5 text-4xl flex justify-center items-center w-[291px] md:w-[300px] h-[200px] md:h-[400px] hover:bg-zinc-600 transition duration-300 ease-in-out rounded-md"
          onMouseEnter={handleCharacterHover}
          onMouseLeave={handleCharacterHover}
        >
          <p>
            {hoveredCharacter || isMobile ? (isMobile ? "Tap" : "Click") + " for know more about characters" : "Characters"}
          </p>
        </div>
      </Link>
    </main>
  );
}