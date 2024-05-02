"use client";

import { DataProps } from "@/types/getDataProps";
import Image from "next/image";

const QuoteImage = ({ data, color }: DataProps) => {
  console.log(data.category);
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className=" min-w-[500px] min-h-[500px] flex flex-col justify-between items-center  p-2 m-2  border rounded-md "
    >
      <div className="mb-auto">
        <p className="max-w-[450px] fond-bold text-[25px] text-center">
          {data.category}
        </p>
      </div>
      <div>
        <p className="max-w-[450px] fond-bold text-[25px] text-center">
          {data.quote}
        </p>
      </div>

      <div className="mt-auto">
        <span>{data.author}</span>
      </div>
    </div>
  );
};

export default QuoteImage;
