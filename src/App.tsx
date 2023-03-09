import { FC } from 'react';
import data from 'data/data.json';
import { Layout } from 'components/Layout/Layout';
import { DetailCard } from 'components/DetailCard/DetailCard';
import 'index.scss';

export const App: FC = () => {
  return (
    <>
      <Layout>
        <></>
        {data.map(({ name, flags: { svg }, demonym, population, region, capital }) => (
          <DetailCard
            key={name}
            name={name}
            svg={svg}
            demonym={demonym}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </Layout>
    </>
  );
};
