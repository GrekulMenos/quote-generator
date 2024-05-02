import { Data } from "@/types/getDataProps";
import { jsPDF } from "jspdf";

const Dowloand = ({ data }: Data) => {
  const dowloandPDF = () => {
    const doc = new jsPDF();

    doc.text(`${data.category}`, 5, 10);
    doc.text(`${data.quote}`, 5, 25, { maxWidth: 200 });
    doc.text(`${data.author}`, 5, 50);
    doc.save("dowloand.pdf");
  };

  return (
    <div>
      <h2 className="mt-5">Dowloand in all formats</h2>
      <button
        disabled={data.category ? false : true}
        className="cursor-pointer w-full bg-[#3c4146] rounded-md p-3 text-center text-[#d7e2e9] font-bold mt-4"
        onClick={() => dowloandPDF()}
      >
        Dowloand
      </button>
    </div>
  );
};

export default Dowloand;
