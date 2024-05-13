import { CharacterData, FilmDetails, SWAPICharacterResponse, SWAPIFilmByIdResponse } from "@/app/interfaces/Film";
import { NextResponse } from "next/server";

type ServerError = {
  message: string;
};

export async function GET(request: Request, { params }: { params: { id: string } }): Promise<NextResponse> {
  try {
    const { id } = params;

    const characterGenericImage = '/character-image.jpg';
    const filmGenericImage = '/film-image.jpg';

    const response = await fetch(`https://swapi.dev/api/films/${id}`);
    const filmData: SWAPIFilmByIdResponse = await response.json();

    const { title, episode_id, director, characters } = filmData;

    const charactersData: CharacterData[] = await Promise.all(characters.map(async (characterUrl: string) => {
      const characterResponse = await fetch(characterUrl);
      const characterData: SWAPICharacterResponse = await characterResponse.json();

      const characterUrlObj = new URL(characterUrl);
      const characterId = characterUrlObj.pathname.split('/').filter((segment: string) => segment !== "").pop();

      return { characterId: characterId || '', name: characterData.name, image: characterGenericImage };
    }));

    const filmDetails: FilmDetails = {
      title,
      episode_id,
      director,
      image: filmGenericImage,
      characters: charactersData,
    };

    return NextResponse.json(filmDetails);
  } catch (error) {
    const serverError: ServerError = { message: error instanceof Error ? error.message : "An unknown error occurred" };
    return NextResponse.json(serverError, { status: 500 });
  }
}