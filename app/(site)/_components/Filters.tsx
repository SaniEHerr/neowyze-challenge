
const Filter = () => {
  return (
    <div className="flex justify-end mb-4">
      <select
        name="eye_color" 
        className="bg-gray-700 text-white p-2 rounded-md"
      >
        <option value="">Selecciona un color de ojos</option>
        <option>Blue</option>
      </select>
    </div>
  )
}

export default Filter