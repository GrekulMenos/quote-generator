"use client";

import { getDataProps } from "@/types/getDataProps";

const MenuSettings = ({ getData, arrayColorsBG, setColor }: getDataProps) => {
  return (
    <div className="text-white">
      <button
        onClick={() => getData()}
        className="p-4 bg-white text-purple-500 rounded-md"
      >
        Generate Qoute
      </button>
      <div className="flex space-x-4">
        {arrayColorsBG.map((colors) => (
          <div
            onClick={() => setColor(colors)}
            className="rounded-sm mt-5 w-[40px] h-[40px] cursor-pointer hover:opacity-75 transition-opacity duration-200"
            style={{ backgroundColor: `${colors}` }}
            key={colors}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default MenuSettings;
