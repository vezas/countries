import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper, DetailTextGroup } from 'lib/components';
import styles from './DetailCard.module.scss';

interface DetailCardProps {
  name: string;
  svg: string;
  alt: string;
  population: number;
  region: string;
  capital?: string;
  cca2: string;
}

export const DetailCard: FC<DetailCardProps> = ({
  name,
  svg,
  alt,
  population,
  region,
  capital,
  cca2
}) => {
  return (
    <CardWrapper className={styles.card}>
      <Link className={styles.link} to={`country/${cca2}`}>
        <img className={styles.flag} src={svg} alt={alt} />
        <h2 className={styles.name}>{name}</h2>
        <div className={styles.detailsGroup}>
          <DetailTextGroup title='Population' detailData={population.toLocaleString('en-US')} />
          <DetailTextGroup title='Region' detailData={region} />
          <DetailTextGroup title='Capital' detailData={capital} />
        </div>
      </Link>
    </CardWrapper>
  );
};
