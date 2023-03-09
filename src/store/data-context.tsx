import {
  FC,
  createContext,
  ReactNode,
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  useMemo
} from 'react';
import { countriesApi } from 'services/api.service';

interface CountriesData {
  name: string;
  svg: string;
  alt: string;
  population: number;
  region: string;
  capital: string;
}

interface ApiResponse {
  name: { common: string };
  flags: { svg: string; alt: string };
  population: number;
  region: string;
  capital: string;
}

interface IDataContext {
  data: {
    name: string;
    svg: string;
    alt: string;
    population: number;
    region: string;
    capital: string;
  }[];
  searchCountry: (e: ChangeEvent<HTMLInputElement>) => void;
  filteredData: CountriesData[];
}

interface IDataContextProvider {
  children: ReactNode;
}

export const DataContext = createContext<IDataContext>({
  data: [],
  searchCountry: (e: ChangeEvent<HTMLInputElement>) => {
    return;
  },
  filteredData: []
});

export const DataContextProvider: FC<IDataContextProvider> = ({ children }) => {
  const [data, setData] = useState<CountriesData[]>([]);
  const [query, setQuery] = useState('');

  const filteredData = useMemo(() => {
    return data.filter(({ name }) => name.toLowerCase().includes(query.trim().toLocaleLowerCase()));
  }, [data, query]);

  const searchCountry = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  const fetchCountries: () => Promise<void> = async () => {
    const data: ApiResponse[] = await countriesApi.get('/all');
    const fetchedCountries = data.map(
      ({ name: { common }, flags: { svg }, flags: { alt }, population, region, capital }) => {
        return {
          name: common,
          svg,
          alt,
          population,
          region,
          capital
        };
      }
    );
    setData(fetchedCountries);
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <DataContext.Provider value={{ data, filteredData, searchCountry }}>
      {children}
    </DataContext.Provider>
  );
};
