import { Film, SWAPIFilmResponse } from "@/app/interfaces/Film";
import { NextResponse } from "next/server";

type ServerError = {
  message : string;
};

export async function GET(): Promise<NextResponse> {
  try {
    // Setting a variable to store the URL of a generic film image
    const genericImageUrl: string = '/film-image.jpg';
    
    // Fetching data from the Star Wars API (SWAPI) films endpoint and Parsing the JSON response
    const response: Response = await fetch('https://swapi.dev/api/films');
    const data: SWAPIFilmResponse = await response.json();    

    // Mapping over the results from the SWAPI films data
    const filmsData: Film[] = data.results.map((film): Film => {
      // Extracting the film ID from the film URL
      const url: string | undefined = film.url;
      const film_id: string = url ? new URL(url).pathname.split('/').filter(segment => segment !== "").pop() || '' : '';

      // Constructing an object that contains the required data
      return {
        title: film.title,
        episode_id: film.episode_id,
        film_id,
        image: genericImageUrl,
      };
    });

    // Return JSON response with the films data
    return NextResponse.json({ films: filmsData });
  } catch (error) {
    const serverError: ServerError = { message: error instanceof Error ? error.message : "An unknown error occurred" };
    return NextResponse.json(serverError, { status: 500 });
  }
}