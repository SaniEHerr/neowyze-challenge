// import Filters from "../../_components/Filters"
import CharactersCards from "../../_components/CharactersCards"
// import Pagination from "../../_components/Pagination"

async function getCharacters(page: number, eye_color: string | undefined) {
  try {
    let url = `http://localhost:3000/api/characters?page=${page}`;
    if (eye_color) {
      url += `&eye_color=${eye_color}`;
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
  const page = typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const eye_color = typeof searchParams.eye_color === 'string' ? searchParams.eye_color : undefined;

  const { total_characters, total_pages, current_page, next_page, previous_page, unique_eye_colors, results } = await getCharacters(page, eye_color);

  return (
    <div className="max-w-[1420px] mx-auto py-7">
      
      {/* <Filters 
        eye_colors={eye_colors}
        selectedEyeColor={eye_color}
      /> */}

      <div className="flex flex-col gap-8">
        <h2 className="text-4xl text-center font-bold font-starjhol underline">Characters</h2>
        <CharactersCards 
          results={results}
        />
      </div>
      
      {/* <Pagination 
        total_pages={total_pages}
        page={page}
        eye_color={eye_color}
      /> */}

    </div>
  )
}

export default CharactersPage