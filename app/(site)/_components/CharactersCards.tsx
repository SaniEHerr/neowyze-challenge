import { CharacterData } from '@/app/interfaces/Character';
import Image from 'next/image';
import Link from 'next/link'

interface CharactersCardsProps {
  results : CharacterData[];
}

const CharactersCards = ({ results }: CharactersCardsProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {results.map((character: CharacterData) => (
        <Link
          href={`/characters/${character.character_id}`}
          key={character.name}
          className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-md rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{character.name}</h2>
            <Image
              src={character.image}
              width={204}
              height={362}
              alt="Character picture"
            />
            {character.eye_color && <p className="">Eye color: {character.eye_color}</p>}
            {character.gender && <p className="">Gender: {character.gender}</p>}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CharactersCards