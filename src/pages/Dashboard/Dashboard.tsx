import { FC, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DetailCard, FilterBar } from 'lib/components';
import { countriesApi } from 'lib/services';
import styles from './Dashboard.module.scss';

interface IData {
  name: { common: string };
  flags: { svg: string; alt: string };
  population: number;
  region: string;
  capital: string;
  cca2: string;
}

export const Dashboard: FC = () => {
  const [query, setQuery] = useState('');
  const categories = ['name', 'region'];

  const data = useLoaderData() as IData[];
  const transformedData = data.map(
    ({ name: { common }, flags: { svg }, flags: { alt }, population, region, capital, cca2 }) => {
      return {
        name: common,
        svg,
        alt,
        population,
        region,
        capital,
        cca2
      };
    }
  );

  const filteredData = transformedData.filter((country) => {
    return categories.some((category) =>
      country[category as 'name' | 'region'].toLowerCase().includes(query.trim().toLowerCase())
    );
  });

  return (
    <>
      <main className={styles.content}>
        <FilterBar setQuery={setQuery} />
        <div className={styles.cardsGroup}>
          {filteredData.map(({ name, svg, alt, population, region, capital, cca2 }) => (
            <DetailCard
              key={name}
              cca2={cca2}
              name={name}
              svg={svg}
              alt={alt}
              population={population}
              region={region}
              capital={capital}
            />
          ))}
        </div>
      </main>
    </>
  );
};

export const loader = () => countriesApi.get('/all');
