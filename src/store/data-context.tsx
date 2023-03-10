import {
  FC,
  createContext,
  ReactNode,
  useState,
  useEffect,
  ChangeEventHandler,
  ChangeEvent,
  useMemo,
  SetStateAction
} from 'react';
import { countriesApi } from 'services/api.service';

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
  searchCountryByRegion: (e: ChangeEvent<HTMLSelectElement>) => void;
  filteredData: CountriesData[];
}

export const DataContext = createContext<IDataContext>({
  data: [],
  searchCountry: (e: ChangeEvent<HTMLInputElement>) => {
    return;
  },
  searchCountryByRegion: (e: ChangeEvent<HTMLSelectElement>) => {
    return;
  },
  filteredData: []
});

interface IDataContextProvider {
  children: ReactNode;
}

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

export const DataContextProvider: FC<IDataContextProvider> = ({ children }) => {
  const [data, setData] = useState<CountriesData[]>([]);
  const [query, setQuery] = useState('');

  const categories = ['name', 'region'];

  const filteredData = useMemo(() => {
    return data.filter((country) =>
      categories.some((category) =>
        country[category as 'region' | 'name'].toLowerCase().includes(query.trim().toLowerCase())
      )
    );
  }, [data, query]);

  const searchCountry = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.value);
  };

  const searchCountryByRegion = (e: ChangeEvent<HTMLSelectElement>) => {
    setQuery(e.target.value);
    e.target.value = '';
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
    <DataContext.Provider value={{ data, filteredData, searchCountry, searchCountryByRegion }}>
      {children}
    </DataContext.Provider>
  );
};
