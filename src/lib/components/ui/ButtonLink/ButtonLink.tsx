import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import styles from './ButtonLink.module.scss';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ to, children, className }) => (
  <Link className={clsx(styles.buttonLink, className)} to={to}>
    {children}
  </Link>
);
