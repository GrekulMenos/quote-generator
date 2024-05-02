export interface getDataProps {
  getData: () => Promise<void>;
  arrayColorsBG: string[];
  setColor: (colors: string) => void;
  setCategory: (category: string) => void;
  data: {
    quote: string;
    author: string;
    category: string;
  };
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

export interface DowloandProps {
  setDisabledBtn: (bol: boolean) => void;
  disabledBtn: boolean;
  data: {
    quote: string;
    author: string;
    category: string;
  };
}
