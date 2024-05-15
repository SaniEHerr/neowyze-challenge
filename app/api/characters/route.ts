import { Character, SwapiResponse, ResponseData, CharacterData } from '@/app/interfaces/Character';
import { NextResponse } from 'next/server';

interface FilteredCharacterData {
  character_id : string;
  name         : string;
  eye_color    : string;
  gender       : string;
  image        : string;
}

// This function fetches and returns all eye colors of characters
async function fetchAllEyeColors() {
  // Create a set to store all eye colors
  const allEyeColors = new Set<string>();
  
  // Set the URL for the first page of the API
  let nextPage: string | null = 'https://swapi.dev/api/people';

  // Start a loop to iterate through all pages of the API
  while (nextPage) {
    const response = await fetch(nextPage);
    const data: SwapiResponse = await response.json();
    
    // Iterate through the results of the response to retrieve eye colors
    data.results.forEach((character: Character) => {
      // Filter out characters whose eye color value is not "n/a" or "unknown"
      if (character.eye_color !== "n/a" && character.eye_color !== "unknown") {
        const individualColors = character.eye_color.split(',').map((color: string) => color.trim());
        individualColors.forEach((color: string) => allEyeColors.add(color));
      }
    });
    
    // Update the URL for the next page of the API
    nextPage = data.next;
  }
  
  // Convert the set of eye colors into an array
  return Array.from(allEyeColors);
}

async function fetchAllGenders() {
  // Create a set to store all genders
  const allGenders = new Set<string>();
  
  // Set the URL for the first page of the API
  let nextPage: string | null = 'https://swapi.dev/api/people';

  // Start a loop to iterate through all pages of the API
  while (nextPage) {
    const response = await fetch(nextPage);
    const data: SwapiResponse = await response.json();
    
    // Iterate through the results of the response to retrieve genders
    data.results.forEach((character: Character) => {
      // Filter out characters whose gender value is not "n/a" or "unknown"
      if (character.gender !== "n/a" && character.gender !== "unknown") {
        allGenders.add(character.gender);
      }
    });
    
    // Update the URL for the next page of the API
    nextPage = data.next;
  }
  
  // Convert the set of genders into an array
  return Array.from(allGenders);
}

export async function GET(request: Request): Promise<NextResponse> {
  try {
    // Get all eye colors.
    const eyeColors = await fetchAllEyeColors();
    const genders = await fetchAllGenders();

    // Set a generic URL for the character image
    const genericImageUrl = '/character-image.jpg';

    // Parse the URL of the request to get "page" and "eye color" parameters 
    const url = new URL(request.url);
    const limit: number = 10;
    const page: number = parseInt(url.searchParams.get('page') || '1');
    const eyeColor: string | null = url.searchParams.get('eye_color');
    const gender: string | null = url.searchParams.get('gender');

    // Initialize variables to store all characters and the total character count
    const allCharacters: Character[] = [];
    let totalCharacters = 0;

    // Set the URL for the first page of the API to get all characters
    let nextPage: string | null = `https://swapi.dev/api/people/`;

    // Start a loop to iterate through all pages of the API and get all characters
    while (nextPage) {
      const response = await fetch(nextPage);
      const data: SwapiResponse = await response.json();

      // Add characters from this page to the array of all characters
      allCharacters.push(...data.results);

      // Update the total character count
      totalCharacters += data.results.length;

      // Update the URL for the next page of the API
      nextPage = data.next;
    }

    // Filtrar personajes basados en eye_color si se proporciona
    let filteredCharacters = allCharacters;
    if (eyeColor) {
      filteredCharacters = filteredCharacters.filter((character: Character) => {
        // Verificar si alguno de los eye_colors del personaje coincide con el color especificado
        return character.eye_color.split(',').some((color: string) => color.trim() === eyeColor);
      });
    }

    // Filtrar personajes basados en gender si se proporciona
    if (gender) {
      filteredCharacters = filteredCharacters.filter((character: Character) => {
        // Verificar si el gender del personaje coincide con el gender especificado
        return character.gender === gender;
      });
    }

    // Calculate the total pages based on the limit of characters per page
    const total_pages = Math.ceil(filteredCharacters.length / limit);
    // Determine the current page and ensure it does not exceed the total pages
    const currentPage = Math.min(page, total_pages);

    // Calculate the indices of characters to be displayed on the current page
    const startIndex = (currentPage - 1) * limit;
    const endIndex = Math.min(startIndex + limit, filteredCharacters.length);

    // Map filtered character data for presentation
    const charactersData: CharacterData[] = filteredCharacters.slice(startIndex, endIndex).map((character: Character) => {
      // Extract the character ID from its URL
      const url: URL = new URL(character.url);
      const characterId = url.pathname.split('/').filter(segment => segment !== "").pop() || "";

      // Filter character properties
      const filteredProperties: Partial<FilteredCharacterData> = {
        character_id: characterId,
        name: character.name,
        eye_color: character.eye_color,
        gender: character.gender,
        image: genericImageUrl,
      };

      // Remove properties with "n/a" and "unknown" values
      Object.keys(filteredProperties).forEach(key => {
        if (filteredProperties[key as keyof FilteredCharacterData] === "n/a" || filteredProperties[key as keyof FilteredCharacterData] === "unknown") {
          delete filteredProperties[key as keyof FilteredCharacterData];
        }
      });

      // Return filtered character properties
      return filteredProperties as FilteredCharacterData;
    });

    // Prepare response data with pagination and character information
    const responseData: ResponseData = {
      total_characters: filteredCharacters.length,
      total_pages,
      current_page: currentPage,
      next_page: currentPage < total_pages ? `/characters?page=${currentPage + 1}&eye_color=${eyeColor}&gender=${gender}` : null,
      previous_page: currentPage > 1 ? `/characters?page=${currentPage - 1}&eye_color=${eyeColor}&gender=${gender}` : null,
      eye_colors: eyeColors,
      genders: genders,
      results: charactersData,
    };

    // Return JSON response with prepared data.
    return NextResponse.json(responseData);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}