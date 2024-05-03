export const arrayColorsBG: string[] = ["white", "red", "green", "purple"];

interface categoryProps {
  id: number;
  category: string;
}

interface formatTypeProps {
  id: number;
  type: string;
}

export const category: categoryProps[] = [
  { id: 1, category: "success" },
  { id: 2, category: "history" },
  { id: 3, category: "home" },
  { id: 4, category: "hope" },
  { id: 5, category: "legal" },
];

export const formatItem: formatTypeProps[] = [
  { id: 1, type: "pdf" },
  { id: 2, type: "doc" },
  { id: 3, type: "html" },
  { id: 4, type: "docx" },
];
