import FilmCharactersList from "@/app/(site)/_components/FilmCharactersList";
import FilmDetailsCard from "@/app/(site)/_components/FilmDetailsCard";
import { FilmDetails } from "@/app/interfaces/Film";
import { notFound } from "next/navigation";

async function getFilmDetails(filmId: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/films/${filmId}`);
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
  const filmDetails: FilmDetails = await getFilmDetails(params.filmId)

  if (!filmDetails.characters) {
    notFound();
  }
  
  return (
    <div className="flex flex-col gap-10 py-7">
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
  )
}

export default FilmByIdPage