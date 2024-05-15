import Filters from "@/app/(site)/_components/Filters";
import CharactersCards from "@/app/(site)/_components/CharactersCards";
import Pagination from "@/app/(site)/_components/Pagination";
import GoBack from "../../_components/GoBack";
import { BASE_API_URL } from "@/app/utils/constants";

async function getCharacters(page: number, eye_color: string | undefined, gender: string | undefined) {
  try {
    let url = `https://neowyze-challenge-ijoe9lzmu-sanieherrs-projects.vercel.app/api/characters?page=${page}`;
    if (eye_color) {
      url += `&eye_color=${eye_color}`;
    }
    if (gender) {
      url += `&gender=${gender}`;
    }
    
    const response = await fetch(url);
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching characters:', error);
    return { error: 'Error fetching characters' };
  }
}

const CharactersPage = async ({searchParams}: {searchParams: { [key: string]: string | string [] |undefined }} ) => {
  if (!BASE_API_URL) {
    return null
  }

  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const eye_color = typeof searchParams.eye_color === 'string' ? searchParams.eye_color : undefined;
  const gender = typeof searchParams.gender === 'string' ? searchParams.gender : undefined;
  
  const { total_characters, total_pages, current_page, next_page, previous_page, eye_colors, genders, results } = await getCharacters(page, eye_color, gender);  

  return (
    <div className="max-w-[1420px] mx-auto flex flex-col gap-10">

      <div className="flex flex-col gap-7">
        <h2 className="text-4xl text-center font-bold font-starjhol underline">Characters</h2>
        
        <GoBack />

        <Filters
          eye_colors={eye_colors}
          genders={genders}
          selectedEyeColor={eye_color}
          selectedGender={gender}
        />
      </div>

      <div className="flex flex-col gap-8">
        <CharactersCards
          results={results}
        />
      </div>
      
      <Pagination
        total_pages={total_pages}
        page={page}
        eye_color={eye_color}
        gender={gender}
      />

    </div>
  )
}

export default CharactersPage