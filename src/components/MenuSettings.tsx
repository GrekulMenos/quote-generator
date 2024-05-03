"use client";

import { getDataProps } from "@/types/getDataProps";
import CategoryBox from "./CategoryBox";
import Dowloand from "./Dowloand";
import { useState } from "react";
import FormatList from "./FormatList";

const MenuSettings = ({
  getData,
  arrayColorsBG,
  setColor,
  setCategory,
  data,
}: getDataProps) => {
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [formatType, setFormatType] = useState("pdf");

  return (
    <div className="text-white max-w-7xl">
      <button
        onClick={() => {
          getData();
          setDisabledBtn(false);
        }}
        className="p-4 bg-white text-purple-500 font-bold hover:bg-black hover:transition-colors duration-200 rounded-md border-none outline-none"
      >
        Generate Quote
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
      <div>
        <CategoryBox setCategory={setCategory} />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="mt-5">Dowloand in all formats (pdf)</h2>
        <FormatList setFormatType={setFormatType} />
        <Dowloand
          formatType={formatType}
          disabledBtn={disabledBtn}
          setDisabledBtn={setDisabledBtn}
          data={data}
        />
      </div>
    </div>
  );
};

export default MenuSettings;
