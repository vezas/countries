import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from 'components/ui/ButtonLink.module.scss';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
}

export const ButtonLink: FC<ButtonLinkProps> = ({ to, children }) => (
  <Link className={styles.buttonLink} to={to}>
    {children}
  </Link>
);
