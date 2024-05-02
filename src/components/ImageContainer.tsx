"use client";

import { useState } from "react";
import MenuSettings from "./MenuSettings";
import QuoteImage from "./QuoteImage";
import { DataProps, getDataProps } from "@/types/getDataProps";
import { arrayColorsBG } from "@/utils/bgArray";

const ImageContainer = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [color, setColor] = useState<string[] | string>("white");

  const getData = async () => {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=success`,
      {
        headers: { "X-Api-Key": `biw3Cc+5APzPC95syqlRKg==GPILym2r03XXO9If` },
      }
    );

    const data = await res.json();
    setData(data[0]);
  };

  return (
    <div className="flex justify-between max-w-6xl   mx-auto">
      <QuoteImage color={color} data={data} />
      <MenuSettings
        arrayColorsBG={arrayColorsBG}
        setColor={setColor}
        getData={getData}
      />
    </div>
  );
};

export default ImageContainer;
