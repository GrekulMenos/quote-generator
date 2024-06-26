import { DowloandProps } from "@/types/getDataProps";
import { jsPDF } from "jspdf";
import { useState } from "react";

const Dowloand = ({
  data,
  disabledBtn,
  setDisabledBtn,
  formatType,
}: DowloandProps) => {
  const [format, setFormat] = useState<string>("pdf");

  const dowloandPDF = () => {
    const doc = new jsPDF();

    doc.text(`${data.category}`, 5, 10);
    doc.text(`${data.quote}`, 5, 25, { maxWidth: 200 });
    doc.text(`${data.author}`, 5, 50);
    doc.save(`dowloand.${formatType}`);
  };

  return (
    <div className="">
      <button
        disabled={disabledBtn}
        className={`cursor-pointer w-full ${
          disabledBtn
            ? "bg-red-800"
            : "bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 "
        } rounded-md p-3 text-center  text-[#d7e2e9] font-bold mt-4`}
        onClick={() => dowloandPDF()}
      >
        Dowloand
      </button>
      <div></div>
    </div>
  );
};

export default Dowloand;
