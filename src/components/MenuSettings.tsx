"use client";

import { getDataProps } from "@/types/getDataProps";
import CategoryBox from "./CategoryBox";
import Dowloand from "./Dowloand";
import { useState } from "react";

const MenuSettings = ({
  getData,
  arrayColorsBG,
  setColor,
  setCategory,
  data,
}: getDataProps) => {
  const [disabledBtn, setDisabledBtn] = useState(true);

  return (
    <div className="text-white">
      <button
        onClick={() => {
          getData();
          setDisabledBtn(false);
        }}
        className="p-4 bg-white text-purple-500 font-bold hover:bg-black hover:transition-colors duration-200 rounded-md border-none outline-none"
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
      <Dowloand
        disabledBtn={disabledBtn}
        setDisabledBtn={setDisabledBtn}
        data={data}
      />
    </div>
  );
};

export default MenuSettings;
