"use client";

import { useEffect, useState } from "react";
import MenuSettings from "./MenuSettings";
import QuoteImage from "./QuoteImage";
import { DataProps, getDataProps } from "@/types/getDataProps";
import { arrayColorsBG } from "@/utils/bgArray";
import toast, { Toaster } from "react-hot-toast";

const ImageContainer = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [color, setColor] = useState<string[] | string>("white");
  const [category, setCategory] = useState<string>("success");

  const getData = async () => {
    const res = await fetch(
      `https://api.api-ninjas.com/v1/quotes?category=${category}`,
      {
        headers: { "X-Api-Key": `biw3Cc+5APzPC95syqlRKg==GPILym2r03XXO9If` },
      }
    );
    if (res.ok) {
      toast.success("success");
    } else {
      toast.error("Error!");
    }

    const data = await res.json();
    setData(data[0]);
  };

  return (
    <div className="flex justify-between max-w-7xl    mx-auto">
      <QuoteImage color={color} category={category} data={data} />
      <MenuSettings
        data={data}
        setCategory={setCategory}
        arrayColorsBG={arrayColorsBG}
        setColor={setColor}
        getData={getData}
      />
      <Toaster toastOptions={{ duration: 3000 }} position="bottom-center" />
    </div>
  );
};

export default ImageContainer;
