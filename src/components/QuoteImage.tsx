"use client";

import { DataProps } from "@/types/getDataProps";
import { category } from "@/utils/bgArray";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const QuoteImage = ({ data, color, category }: DataProps) => {
  const t = useTranslations("TitleQuotesT");

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className=" min-w-[500px] min-h-[500px] flex flex-col justify-between items-center  p-2 m-2  border rounded-md "
    >
      <div className="space-x-5">
        <Link href={"/en"}>En</Link>
        <Link href={"/ua"}>Ua</Link>
      </div>

      <div className="mb-auto">
        <p className="max-w-[450px] fond-bold text-[25px] text-center">
          {data.category}
        </p>
      </div>
      <div>
        <p className="max-w-[450px] fond-bold text-[25px] text-center">
          {data.quote || data === undefined
            ? `${data.quote}`
            : `${t("generate")}`}
        </p>
      </div>

      <div className="mt-auto">
        <span>{data.author}</span>
      </div>
    </div>
  );
};

export default QuoteImage;
