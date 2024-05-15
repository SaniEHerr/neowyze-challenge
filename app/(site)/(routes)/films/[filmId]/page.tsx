import FilmCharactersList from "@/app/(site)/_components/FilmCharactersList";
import FilmDetailsCard from "@/app/(site)/_components/FilmDetailsCard";
import GoBack from "@/app/(site)/_components/GoBack";
import { FilmDetails } from "@/app/interfaces/Film";
import { BASE_API_URL } from "@/app/utils/constants";
import { notFound } from "next/navigation";

async function getFilmDetails(filmId: string) {
  try {
    const response = await fetch(`/api/films/${filmId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error('Error fetching film details:', error);
    return { error: 'Error fetching film details' };
  }
}

interface FilmParams {
  filmId: string;
}

const FilmByIdPage = async ({params}: { params: FilmParams }) => {
  if (!BASE_API_URL) {
    return null
  }
  
  const filmDetails: FilmDetails = await getFilmDetails(params.filmId)

  if (!filmDetails.characters) {
    notFound();
  }
  
  return (
    <div className="flex flex-col">
      <GoBack />
      <div className="flex flex-col gap-10">
        <FilmDetailsCard 
          title={filmDetails.title}
          director={filmDetails.director}
          episode_id={filmDetails.episode_id}
          image={filmDetails.image}
        />

        <div className="flex flex-col gap-4 mx-auto">
          <h2 className="text-2xl font-bold font-starjedi text-center">Characters</h2>
          
          <FilmCharactersList 
            characters={filmDetails.characters}
          />
        </div>
      </div>
    </div>
  )
}

export default FilmByIdPage