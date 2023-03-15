import { FC, ReactNode } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import styles from 'components/ui/ButtonLink/ButtonLink.module.scss';

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
