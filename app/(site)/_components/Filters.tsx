"use client"

import { useRouter } from "next/navigation";

interface FiltersProps {
  eye_colors       : string[];
  genders          : string[];
  selectedEyeColor : any,
  selectedGender   : any,
}

const Filters = ({ eye_colors, genders, selectedEyeColor, selectedGender }: FiltersProps) => {
  const router = useRouter();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedColor = event.target.value;
    const queryParams: any = {
      page: 1,
      eye_color: selectedColor,
      gender: selectedGender || ""
    };
    router.push(`/characters?${new URLSearchParams(queryParams).toString()}`);
  };
  
  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value;
    const queryParams: any = {
      page: 1,
      eye_color: selectedEyeColor || "",
      gender: selectedGender
    };
    router.push(`/characters?${new URLSearchParams(queryParams).toString()}`);
  };

  return (
    <div className="flex justify-start flex-col sm:flex-row gap-4">
      <select
        name="eye_color"
        className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-2 appearance-none border border-none text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none font-semibold focus:bg-yellow-300 focus:text-black focus:border-gray-500 transition-all duration-150"
        value={selectedEyeColor || ""}
        onChange={handleFilterChange}
      >
        <option style={{ fontWeight: 600 }} value="">Select an eye color</option>
        {eye_colors && eye_colors.map((color: string, index: any) => (
          <option key={index} style={{ fontWeight: 600 }} value={color}>{color}</option>
        ))}
      </select>

      <select
        name="gender"
        className="bg-zinc-700 bg-opacity-60 backdrop-filter backdrop-blur-sm p-2 appearance-none border border-none text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none font-semibold focus:bg-yellow-300 focus:text-black focus:border-gray-500 transition-all duration-150"
        value={selectedGender || ""}
        onChange={handleGenderChange}
      >
        <option style={{ fontWeight: 600 }} value="">Select a gender</option>
        {genders && genders.map((gender: string, index: any) => (
          <option key={index} style={{ fontWeight: 600 }} value={gender}>{gender}</option>
        ))}
      </select>
    </div>
  )
}

export default Filters