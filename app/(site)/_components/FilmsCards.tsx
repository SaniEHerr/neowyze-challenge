import { Film } from '@/app/interfaces/Film';
import Image from 'next/image'
import Link from 'next/link'

interface FilmsCardsProps {
  films: any;
}

const FilmsCards = ({ films }: FilmsCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {films.map((film: Film) => (
        <Link href={`/films/${film.film_id}`} key={film.title} className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg flex flex-col justify-between gap-3">
          <h2 className="text-xl font-bold truncate text-center">{film.title}</h2>
          <div className="mx-auto rounded-xl">
            <Image
              src={film.image}
              width={204}
              height={301}
              alt="Film image"
            />
          </div>
          <p className="text-center font-bold">EPISODE {film.episode_id}</p>
        </Link>  
      ))}
    </div>
  )
}

export default FilmsCards