import { Film } from "@/app/interfaces/Film";
import FilmsCards from "../../_components/FilmCard";

async function getFilms() {
  try {
    const response = await fetch('http://localhost:3000/api/films');
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return { error: 'Error fetching characters' };
  }
}

const FilmsPage = async () => {
  const { films } = await getFilms();
  
  return (
    <div className="max-w-[1420px] mx-auto py-7">
      <h1 className="text-4xl text-center font-bold mb-8 font-starjhol underline">Episodes</h1>

      <FilmsCards
        films={films}
      />
    </div>
  )
}

export default FilmsPage