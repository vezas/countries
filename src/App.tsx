import { FC } from 'react';
import { Layout } from 'components/Layout/Layout';
import { Dashboard } from 'components/Dashboard/Dashboard';
import 'index.scss';

export const App: FC = () => {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
};
