import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Layout/Header';
import styles from 'components/Layout/Layout.module.scss';

export const Layout: FC = () => (
  <>
    <Header />

    <Outlet />
  </>
);
