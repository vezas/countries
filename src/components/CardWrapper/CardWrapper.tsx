import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import styles from 'components/CardWrapper/CardWrapper.module.scss';

interface CardWrapperProps {
  children: ReactNode;
  className?: string;
}

export const CardWrapper: FC<CardWrapperProps> = ({ children, className }) => (
  <div className={clsx(styles.cardWrapper, className && className)}>{children}</div>
);
