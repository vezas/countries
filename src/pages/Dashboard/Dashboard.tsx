import { FC, useContext } from 'react';
import { DetailCard } from 'components/DetailCard/DetailCard';
import { DataContext } from 'store/data-context';
import { FilterBar } from 'components/FilterBar';
import styles from 'pages/Dashboard/Dashboard.module.scss';

export const Dashboard: FC = () => {
  const { filteredData } = useContext(DataContext);
  return (
    <>
      <FilterBar />
      <main className={styles.content}>
        {filteredData.map(({ name, svg, alt, population, region, capital, cioc }) => (
          <DetailCard
            key={name}
            cioc={cioc}
            name={name}
            svg={svg}
            alt={alt}
            population={population}
            region={region}
            capital={capital}
          />
        ))}
      </main>
    </>
  );
};
