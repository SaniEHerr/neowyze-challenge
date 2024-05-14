
const Pagination = () => {
  return (
    <div className="flex justify-center space-x-4 mt-8">
      <button 
        className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Prev
      </button>

        <button
          className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-700"
        >
          1
        </button>

      <button 
        className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-700"
      >
        Next
      </button>
    </div>
  )
}

export default Pagination