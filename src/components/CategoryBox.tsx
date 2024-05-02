"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CategoryProps } from "@/types/interfaces";
import { category } from "@/utils/bgArray";

const CategoryBox = ({ setCategory }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);

  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <Listbox.Button className="mt-4 border p-3 rounded-md w-full bg-purple-700 font-bold">
        {selectedCategory.category}
      </Listbox.Button>
      <Listbox.Options className="cursor-pointer  mt-4 p-3 rounded-md w-full  font-bold">
        {category.map((categoryItem) => (
          <Listbox.Option
            onClick={() => setCategory(categoryItem.category)}
            className="border m-2 p-2 rounded-md bg-blue-600 text-center"
            key={categoryItem.id}
            value={categoryItem}
          >
            {categoryItem.category}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};

export default CategoryBox;
