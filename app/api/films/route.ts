import { Film, SWAPIResponse } from "@/app/interfaces/Film";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Setting a variable to store the URL of a generic film image
    const genericImageUrl: string = '/film-image.jpg';
    
    // Fetching data from the Star Wars API (SWAPI) films endpoint and Parsing the JSON response
    const response: Response = await fetch('https://swapi.dev/api/films');
    const data: SWAPIResponse = await response.json();    

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

    // Returning a JSON response with the films data
    return NextResponse.json({ films: filmsData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}