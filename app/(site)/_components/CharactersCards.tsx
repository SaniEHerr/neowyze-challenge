
const CharactersCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div
          className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm shadow-md rounded-lg overflow-hidden"
        >
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Name</h2>
            <div>Image</div>
            <p>Eye color</p> 
            <p>Gender</p> 
          </div>
        </div>
    </div>
  )
}

export default CharactersCards