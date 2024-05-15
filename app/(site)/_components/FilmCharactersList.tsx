import { CharacterData } from "@/app/interfaces/Film";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface FilmCharactersListProps  {
  characters : CharacterData[];
}

const FilmCharactersList = ({ characters }: FilmCharactersListProps) => {

  if (!characters) {
    notFound();
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3">
      {characters.map((character: CharacterData, index: any) => {

        return (
          <li key={index} className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-4 rounded-lg">
            <div className="flex items-center">
              <div className="w-auto h-16 rounded-full overflow-hidden">
                <Image
                  src={character.image}
                  width={64}
                  height={64}
                  priority
                  alt="Character picture"
                />
              </div>

              <div className="ml-4">
                <p className="text-white font-bold">{character.name}</p>
                
                <Link href={`/characters/${character.characterId}`}>
                  <p className="text-gray-400 hover:text-[#FFE81F] transition-colors duration-200 hover:underline">More Info</p>
                </Link>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  )
}

export default FilmCharactersList