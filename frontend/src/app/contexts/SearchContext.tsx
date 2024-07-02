import React, { createContext, useState, useContext, ReactNode } from "react";
import { Dayjs } from "dayjs";

interface Movement {
  movementDate: Dayjs;
  description: string;
}

interface IReturnedData {
  cnj: string;
  court: string;
  startDate: Dayjs | null;
  defendant: string;
  plaintiff: string;
  movements: Movement[];
}

interface SearchContextProps {
  cnj: string;
  setCnj: React.Dispatch<React.SetStateAction<string>>;
  court: string;
  setCourt: React.Dispatch<React.SetStateAction<string>>;
  plaintiff: string;
  setPlaintiff: React.Dispatch<React.SetStateAction<string>>;
  defendant: string;
  setDefendant: React.Dispatch<React.SetStateAction<string>>;
  startDate: Dayjs | null;
  setStartDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  endDate: Dayjs | null;
  setEndDate: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  warning: boolean;
  setWarning: React.Dispatch<React.SetStateAction<boolean>>;
  returnedData: IReturnedData[] | null;
  setReturnedData: React.Dispatch<React.SetStateAction<IReturnedData[] | null>>;
}

const defaultState: SearchContextProps = {
  cnj: "",
  setCnj: () => {},
  court: "",
  setCourt: () => {},
  plaintiff: "",
  setPlaintiff: () => {},
  defendant: "",
  setDefendant: () => {},
  startDate: null,
  setStartDate: () => {},
  endDate: null,
  setEndDate: () => {},
  warning: false,
  setWarning: () => {},
  returnedData: null,
  setReturnedData: () => {},
};

const SearchContext = createContext<SearchContextProps>(defaultState);

interface SearchProviderProps {
  children: ReactNode;
}

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [cnj, setCnj] = useState<string>("");
  const [court, setCourt] = useState<string>("");
  const [plaintiff, setPlaintiff] = useState<string>("");
  const [defendant, setDefendant] = useState<string>("");
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [warning, setWarning] = useState<boolean>(false);
  const [returnedData, setReturnedData] = useState<IReturnedData[] | null>(null);

  const value = {
    cnj,
    setCnj,
    court,
    setCourt,
    plaintiff,
    setPlaintiff,
    defendant,
    setDefendant,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    warning,
    setWarning,
    returnedData,
    setReturnedData,
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
