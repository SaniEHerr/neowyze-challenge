import CharactersCards from "../../_components/CharactersCards"
import Filters from "../../_components/Filters"
import Pagination from "../../_components/Pagination"

const CharactersPage = () => {
  
  return (
    <div className="max-w-[1420px] mx-auto py-7">
      
      <Filters />

      <div className="flex flex-col gap-8">
        <h2 className="text-4xl text-center font-bold font-starjhol underline">Characters</h2>
        <CharactersCards />
      </div>
      
      <Pagination />

    </div>
  )
}

export default CharactersPage