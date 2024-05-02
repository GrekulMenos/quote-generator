export interface getDataProps {
  getData: () => Promise<void>;
  arrayColorsBG: string[];
  setColor: (colors: string) => void;
  setCategory: (category: string) => void;
}

export interface DataProps {
  color: string[] | string;
  data: {
    quote: string;
    author: string;
    category: string;
  };
  category: string;
}
