import FilmsCards from "@/app/(site)/_components/FilmsCards";
import GoBack from "../../_components/GoBack";
import { BASE_API_URL } from "@/app/utils/constants";

async function getFilms() {
  try {
    const response = await fetch(`/api/films`);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return { error: 'Error fetching characters' };
  }
}

const FilmsPage = async () => {
  if (!BASE_API_URL) {
    return null
  }
  
  const { films } = await getFilms();
  
  return (
    <div className="max-w-[1420px] mx-auto flex flex-col gap-8">
      <div className="flex flex-col gap-7">
        <h1 className="text-4xl text-center font-bold font-starjhol underline">Episodes</h1>
        <GoBack />

      </div>
      <FilmsCards
        films={films}
      />
    </div>
  )
}

export default FilmsPage