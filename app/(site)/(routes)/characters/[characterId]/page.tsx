import Image from "next/image";

async function getCharacterDetails(characterId: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/characters/${characterId}`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching character details:', error);
    return { error: 'Error fetching character details' };
  }
}

const CharacterByIdPage = async ({params}: any) => {

  const { name, birth_year, height, mass, eye_color, hair_color, skin_color, image  } = await getCharacterDetails(params.characterId)

  return (
    <div className="py-7">
      <div className="flex flex-col md:flex-row gap-8 items-center bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
        <div className="flex flex-col gap-3">
          {name && <h1 className="text-xl font-bold truncate text-center">{name}</h1>}
          {image && 
            <Image
              src={image}
              width={204}
              height={362}
              alt="Character picture"
            />
          }
        </div>

        <div className="flex flex-col items-center">
          {birth_year && <p className="font-semibold">Birth year: <span className='font-normal'>{birth_year}</span></p>}
          {height && <p className="font-semibold">Height: <span className='font-normal'>{height} cm</span></p>}
          {mass && <p className="font-semibold">Mass: <span className='font-normal'>{mass} kg</span></p>}
          {eye_color && <p className="font-semibold">Eye color: <span className='font-normal'>{eye_color}</span></p>}
          {hair_color && <p className="font-semibold">Hair color: <span className='font-normal'>{hair_color}</span></p>}
          {skin_color && <p className="font-semibold">Skin color: <span className='font-normal'>{skin_color}</span></p>}
        </div>
      </div>
    </div>
  )
}

export default CharacterByIdPage