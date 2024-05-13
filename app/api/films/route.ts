import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Setting a variable to store the URL of a generic film image
    const genericImageUrl = '/film-image.jpg';
    
    // Fetching data from the Star Wars API (SWAPI) films endpoint and Parsing the JSON response
    const response = await fetch('https://swapi.dev/api/films');
    const data = await response.json();    

    // Mapping over the results from the SWAPI films data
    const filmsData = data.results.map((film: any) => {
      // Extracting the film ID from the film URL
      const url    = new URL(film.url);
      const film_id = url.pathname.split('/').filter(segment => segment !== "").pop();

      // Constructing an object that contains the required data
      return {
        title      : film.title,
        episode_id : film.episode_id,
        film_id    : film_id,
        image      : genericImageUrl,
      };
    });

    // Returning a JSON response with the films data
    return NextResponse.json({ films: filmsData });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}