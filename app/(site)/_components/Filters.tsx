"use client"

import { useRouter } from "next/navigation";

interface FiltersProps {
  eye_colors : string[];
  selectedEyeColor : any,
}

const Filters = ({ eye_colors, selectedEyeColor }: FiltersProps) => {
  const router = useRouter();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = event.target.value;
    router.push(`/characters?page=1&eye_color=${selectedColor}`);
  };

  return (
    <div className="flex justify-start flex-col sm:flex-row gap-4">
      <select
        name="eye_color"
        className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-2 appearance-none border border-none text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none font-semibold focus:bg-yellow-300 focus:text-black focus:border-gray-500 transition-all duration-150"
        value={selectedEyeColor || ""}
        onChange={handleFilterChange}
      >
        <option style={{ fontWeight: 600 }} value="">Selecciona un color de ojos</option>
        {eye_colors && eye_colors.map((color: string, index: any) => (
          <option key={index} style={{ fontWeight: 600 }} value={color}>{color}</option>
        ))}
      </select>
    </div>
  )
}

export default Filters