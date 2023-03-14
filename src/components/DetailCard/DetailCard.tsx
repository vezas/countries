import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CardWrapper } from 'components/CardWrapper';
import styles from 'components/DetailCard/DetailCard.module.scss';

interface DetailCardProps {
  name: string;
  svg: string;
  alt: string;
  population: number;
  region: string;
  capital?: string;
  cioc: string;
}

export const DetailCard: FC<DetailCardProps> = ({
  name,
  svg,
  alt,
  population,
  region,
  capital,
  cioc
}) => {
  return (
    <CardWrapper className={styles.card}>
      <Link className={styles.link} to={`country/${cioc}`}>
        <img className={styles.flag} src={svg} alt={alt} />
        <h2 className={styles.name}>{name}</h2>
        <div>
          <p className={styles.detailGroup}>
            <span className={styles.detailHeader}>Population: </span>
            <span className={styles.detailInfo}>{population.toLocaleString('en-US')}</span>
          </p>
          <p className={styles.detailGroup}>
            <span className={styles.detailHeader}>Region: </span>
            <span className={styles.detailInfo}>{region}</span>
          </p>
          <p className={styles.detailGroup}>
            <span className={styles.detailHeader}>Capital: </span>
            <span className={styles.detailInfo}>{capital || 'none'}</span>
          </p>
        </div>
      </Link>
    </CardWrapper>
  );
};
