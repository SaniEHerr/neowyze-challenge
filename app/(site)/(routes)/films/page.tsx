import { Film } from "@/app/interfaces/Film";
import Image from "next/image";
import Link from "next/link";

async function getFilms() {
  try {
    const response = await fetch('http://localhost:3000/api/films');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return { error: 'Error fetching characters' };
  }
}

const FilmsPage = async () => {
  const { films } = await getFilms();
  
  return (
    <div className="max-w-[1420px] mx-auto py-7">
      <h1 className="text-4xl text-center font-bold mb-8 font-starjhol underline">Episodes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {films.map((film: Film) => (
          <Link href={`/films/${film.film_id}`} key={film.title} className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg flex flex-col justify-between gap-2">
            <h2 className="text-xl font-bold truncate ">{film.title}</h2>
            <Image
              src={film.image}
              width={204}
              height={301}
              alt="Film image"
            />
            <p>Episode: {film.episode_id}</p>
          </Link>  
        ))}
      </div>
    </div>
  )
}

export default FilmsPage