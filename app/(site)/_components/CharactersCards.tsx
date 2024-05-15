import { CharacterData } from '@/app/interfaces/Character';
import Image from 'next/image';
import Link from 'next/link'
import { capitalizeFirstLetter } from '@/app/utils/capitalizeFirstLetter';

interface CharactersCardsProps {
  results : CharacterData[];
}

const CharactersCards = ({ results }: CharactersCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      {results.length === 0 ? (
        <p className="col-span-full text-center text-2xl font-bold bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-lg mx-auto p-6">Sorry, there are no characters that match your search.</p>
      ) : (
        results.map((character: CharacterData) => (
          <div key={character.name} className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-md rounded-lg overflow-hidden p-4 flex flex-col justify-between gap-3">
            <div className='flex flex-col gap-3 items-center'>
              <h2 className="text-2xl font-bold text-center truncate">{character.name}</h2>
              <Image
                src={character.image}
                width={204}
                height={285.25}
                priority
                alt="Character picture"
              />
              <div className='flex flex-col items-center text-lg'>
                {character.eye_color && 
                  <p className="font-semibold">Eye color: 
                    <span className='font-normal'> {capitalizeFirstLetter(character.eye_color)} </span>
                  </p>
                }
                
                {character.gender && 
                  <p className="font-semibold">Gender: 
                    <span className='font-normal'> {capitalizeFirstLetter(character.gender)} </span>
                  </p>
                }
              </div>
            </div>

            <div className='flex justify-center'>
              <Link href={`/characters/${character.character_id}`}>
                <p className='text-base hover:text-[#FFE81F] transition-colors duration-200 font-semibold md:font-normal underline md:no-underline hover:underline hover:font-semibold'>Know more</p>
              </Link>
            </div>
          </div>
        ))
      )}

    </div>
  )
}

export default CharactersCards