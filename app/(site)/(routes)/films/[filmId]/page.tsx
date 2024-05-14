import { CharacterData, FilmDetails } from "@/app/interfaces/Film";
import Image from "next/image";
import Link from "next/link";

async function getFilmDetails(filmId: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/films/${filmId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching film details:', error);
    return { error: 'Error fetching film details' };
  }
}

interface FilmParams {
  filmId: string;
}

const FilmByIdPage = async ({params}: { params: FilmParams }) => {
  const filmDetails: FilmDetails = await getFilmDetails(params.filmId)
  
  return (
    <div className="flex flex-col gap-10 py-7">
      <div className="flex flex-col justify-center items-center gap-4 bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
        <div className="flex flex-col justify-center items-center gap-1">
          <h1 className="text-4xl font-bold font-starjedi text-center">{filmDetails.title}</h1>
          <p className="font-bold text-2xl font-starjedi">Episode {filmDetails.episode_id}</p>
          <p className="text-xl">Directed by <span className="font-bold">{filmDetails.director}</span></p>
        </div>

        <Image
          src={filmDetails.image}
          width={204}
          height={301}
          alt="Film image"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-bold font-starjedi text-center">Characters</h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3">
          {filmDetails.characters.map((character: CharacterData, index: any) => {
            const customUrl = `/characters/${character.characterId}`;

            return (
              <li key={index} className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={character.image}
                      width={64}
                      height={64}
                      alt="Character picture"
                    />
                  </div>

                  <div className="ml-4">
                    <Link href={customUrl}>
                      <p className="text-white font-bold">{character.name}</p>
                    </Link>
                    
                    <Link href={customUrl}>
                      <p className="text-gray-400 hover:text-gray-300 hover:underline">More Info</p>
                    </Link>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default FilmByIdPage