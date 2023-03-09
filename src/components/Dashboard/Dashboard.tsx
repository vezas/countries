import { FC, useContext } from 'react';
import { DetailCard } from 'components/DetailCard/DetailCard';
import { DataContext } from 'store/data-context';

export const Dashboard: FC = () => {
  const { filteredData } = useContext(DataContext);
  return (
    <>
      {filteredData.map(({ name, svg, alt, population, region, capital }) => (
        <DetailCard
          key={name}
          name={name}
          svg={svg}
          alt={alt}
          population={population}
          region={region}
          capital={capital}
        />
      ))}
    </>
  );
};
