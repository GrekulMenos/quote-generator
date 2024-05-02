"use client";

import { useState } from "react";
import { Listbox } from "@headlessui/react";
import { CategoryProps } from "@/types/interfaces";
import { category } from "@/utils/bgArray";

const CategoryBox = ({ setCategory }: CategoryProps) => {
  const [selectedCategory, setSelectedCategory] = useState(category[0]);

  return (
    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
      <h2 className="mt-4">Change Category for Quote</h2>
      <Listbox.Button className="mt-4 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-3 rounded-md w-full  font-bold bg-purple-500 hover:transition-colors duration-300">
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
