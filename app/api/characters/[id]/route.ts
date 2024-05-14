import { CharacterDetailData, CharacterDetails } from "@/app/interfaces/Character";
import { NextResponse } from "next/server";

interface FilteredCharacterData {
  name       : string;
  eye_color  : string;
  hair_color : string;
  skin_color : string;
  birth_year : string;
  height     : string;
  mass       : string;
  url        : string;
}

export async function GET(request: Request, { params }: { params: {id: string} }) {
  try {
    const { id } = params;

    const genericImageUrl = '/character-image.jpg';

    const response: Response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data: CharacterDetailData = await response.json();

    // Filtrar propiedades con valores "n/a" o "unknown"
    const filteredProperties: Partial<FilteredCharacterData> = {};
    Object.entries(data).forEach(([key, value]) => {
      if (value !== "n/a" && value !== "unknown") {
        filteredProperties[key as keyof FilteredCharacterData] = value as string;
      }
    });

    // Extracción de propiedades filtradas
    const { name, eye_color, hair_color, skin_color, birth_year, height, mass, url }: FilteredCharacterData = filteredProperties as FilteredCharacterData;

    // Obtener el ID del personaje
    const characterUrl: URL = new URL(url);
    const characterId: string = characterUrl.pathname.split('/').filter((segment: string) => segment !== "").pop() || '';

    // Construir el objeto de detalles del personaje con las propiedades filtradas
    const characterDetails: CharacterDetails = {
      characterId,
      name,
      birth_year,
      height,
      mass,
      eye_color,
      hair_color,
      skin_color,
      image: genericImageUrl
    };

    return NextResponse.json( characterDetails );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}