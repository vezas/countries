import { FC, ReactNode } from 'react';
import { Header } from 'components/Layout/Header';
import { FilterBar } from 'components/Layout/FilterBar';
import styles from 'components/Layout/Layout.module.scss';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <FilterBar />
    <main className={styles.content}>{children}</main>
  </>
);
