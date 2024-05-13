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

    <div>
      <h1>{filmDetails.title}</h1>
      <p>Episode: {filmDetails.episode_id}</p>
      <p>Director: {filmDetails.director}</p>
      <Image
        src={filmDetails.image}
        width={204}
        height={301}
        alt="Film image"
      />
      <h2>Characters:</h2>
      <ul className="flex flex-wrap gap-4">

        {filmDetails.characters.map((character: CharacterData, index: any) => {
          const customUrl = `/characters/${character.characterId}`;

          return (
            <div className="flex" key={index}>
              <li className="bg-red-400 flex flex-col">
                <div className="rounded-full overflow-hidden w-11 h-11">
                  <Image
                    src={character.image}
                    width={204}
                    height={362}
                    alt="Character picture"
                  />
                </div>
                <Link href={customUrl}>
                  {character.name}
                </Link>
                <div>
                  <Link href={customUrl}>Details</Link> 
                </div>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  )
}

export default FilmByIdPage