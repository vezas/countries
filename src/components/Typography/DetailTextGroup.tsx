import { FC } from 'react';
import styles from 'components/Typography/DetailTextGroup.module.scss';

interface DetailTextGroupProps {
  title: string;
  detailData: string | number | undefined;
}

export const DetailTextGroup: FC<DetailTextGroupProps> = ({ title, detailData }) => (
  <p className={styles.detailGroup}>
    <span className={styles.detailHeader}>{title}: </span>
    <span className={styles.detailInfo}>{detailData || 'none'}</span>
  </p>
);
