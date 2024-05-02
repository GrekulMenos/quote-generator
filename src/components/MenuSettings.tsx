"use client";

import { getDataProps } from "@/types/getDataProps";
import CategoryBox from "./CategoryBox";
import Dowloand from "./Dowloand";

const MenuSettings = ({
  getData,
  arrayColorsBG,
  setColor,
  setCategory,
  data,
}: getDataProps) => {
  return (
    <div className="text-white">
      <button
        onClick={() => getData()}
        className="p-4 bg-white text-purple-500 rounded-md border-none outline-none"
      >
        Generate Qoute
      </button>
      <h2 className="mt-4">Color Theme</h2>
      <div className="flex space-x-4">
        {arrayColorsBG.map((colors) => (
          <div
            onClick={() => setColor(colors)}
            className="rounded-sm mt-3 w-[40px] h-[40px] cursor-pointer hover:opacity-75 transition-opacity duration-200"
            style={{ backgroundColor: `${colors}` }}
            key={colors}
          ></div>
        ))}
      </div>
      <CategoryBox setCategory={setCategory} />
      <Dowloand data={data} />
    </div>
  );
};

export default MenuSettings;
