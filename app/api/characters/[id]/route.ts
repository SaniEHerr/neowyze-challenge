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

    // Destructuring id from params
    const { id } = params;
    
    // Defining a generic image URL
    const genericImageUrl = '/character-image.jpg';

    // Fetching data from the API based on the provided character id
    const response: Response = await fetch(`https://swapi.dev/api/people/${id}`);
    const data: CharacterDetailData = await response.json();

    // Filtering properties with values "n/a" or "unknown"
    const filteredProperties: Partial<FilteredCharacterData> = {};
    Object.entries(data).forEach(([key, value]) => {
      if (value !== "n/a" && value !== "unknown") {
        filteredProperties[key as keyof FilteredCharacterData] = value as string;
      }
    });

    // Extracting filtered properties
    const { name, eye_color, hair_color, skin_color, birth_year, height, mass, url }: FilteredCharacterData = filteredProperties as FilteredCharacterData;

    // Getting the character ID from the URL
    const characterUrl: URL = new URL(url);
    const characterId: string = characterUrl.pathname.split('/').filter((segment: string) => segment !== "").pop() || '';

    // Building the character details object with filtered properties
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

    // Return JSON response with prepared data
    return NextResponse.json( characterDetails );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}