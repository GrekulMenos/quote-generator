import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { MdFormatAlignJustify } from "react-icons/md";
import { FormatListProps } from "@/types/interfaces";

import { formatItem } from "@/utils/bgArray";

const FormatList = ({ setFormatType }: FormatListProps) => {
  const [selectedPerson, setSelectedPerson] = useState(formatItem[0]);
  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <Listbox.Button className="flex items-center justify-between p-2 border rounded-md cursor-pointer">
        {selectedPerson.type}
        <MdFormatAlignJustify width={50} height={50} />
      </Listbox.Button>
      <Listbox.Options>
        {formatItem.map((format) => (
          <Listbox.Option
            onClick={() => setFormatType(format.type)}
            className="p-2 cursor-pointer text-center"
            key={format.id}
            value={format}
          >
            {format.type}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default FormatList;
