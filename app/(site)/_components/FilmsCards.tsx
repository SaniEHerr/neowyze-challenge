"use client"

import { Film } from '@/app/interfaces/Film';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

interface FilmsCardsProps {
  films: Film[];
}

const FilmsCards = ({ films }: FilmsCardsProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md1:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {films.map((film: Film, index: number) => (
        <div
          key={film.film_id}
          className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg flex flex-col justify-between gap-3"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <h2 className="text-xl font-bold truncate text-center">{film.title}</h2>

          <div className="mx-auto rounded-xl">
            <Image
              src={film.image}
              width={204}
              height={300.42}
              priority
              alt="Film image"
            />
          </div>

          <p className="text-center font-bold">EPISODE {film.episode_id}</p>
            
          {hoveredIndex === index && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-lg transition-opacity duration-300">
              <Link href={`/films/${film.film_id}`} key={film.title}>
                <p className="text-white hover:text-[#FFE81F] transition-colors duration-200 text-lg font-bold hover:underline p-2">VIEW MORE</p>
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FilmsCards