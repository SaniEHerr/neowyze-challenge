import GoBack from "@/app/(site)/_components/GoBack";
import { capitalizeFirstLetter } from "@/app/utils/capitalizeFirstLetter";
import { BASE_API_URL } from "@/app/utils/constants";
import Image from "next/image";
import { notFound } from 'next/navigation';

async function getCharacterDetails(characterId: string) {
  try {
    const response = await fetch(`${BASE_API_URL}/api/characters/${characterId}`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    return { error: 'Error fetching character details' };
  }
}

interface CharacterParams {
  characterId: string;
}

const CharacterByIdPage = async ({params}: { params: CharacterParams }) => {
  if (!BASE_API_URL) {
    return null
  }

  const { name, birth_year, height, mass, eye_color, hair_color, skin_color, image  } = await getCharacterDetails(params.characterId)

  if (!name) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-4">
      <GoBack />
      <div className="flex flex-col md:flex-row gap-8 items-center bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
        <div className="flex flex-col gap-3">
          {name && <h1 className="text-xl font-bold truncate text-center">{name}</h1>}
          {image && 
            <Image
              src={image}
              width={204}
              height={362}
              priority
              alt="Character picture"
            />
          }
        </div>

        <div className="flex flex-col items-center gap-2">
          {birth_year && <p className="font-semibold">Birth year: <span className='font-normal'>{birth_year}</span></p>}
          {height && <p className="font-semibold">Height: <span className='font-normal'>{height} cm</span></p>}
          {mass && <p className="font-semibold">Mass: <span className='font-normal'>{mass} kg</span></p>}
          {eye_color && <p className="font-semibold">Eye color: <span className='font-normal'> {capitalizeFirstLetter(eye_color)}</span></p>}
          {hair_color && <p className="font-semibold">Hair color: <span className='font-normal'>{capitalizeFirstLetter(hair_color)}</span></p>}
          {skin_color && <p className="font-semibold">Skin color: <span className='font-normal'>{capitalizeFirstLetter(skin_color)}</span></p>}
        </div>
      </div>
    </div>
  )
}

export default CharacterByIdPage