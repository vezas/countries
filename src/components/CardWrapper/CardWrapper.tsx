import { FC, ReactNode } from 'react';
import styles from 'components/CardWrapper/CardWrapper.module.scss';

interface CardWrapperProps {
  children: ReactNode;
}

export const CardWrapper: FC<CardWrapperProps> = ({ children }) => (
  <div className={styles.cardWrapper}>{children}</div>
);
