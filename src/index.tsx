import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeContextProvider } from 'store/theme-context';
import { Dashboard, loader as dashboardLoader } from 'pages/Dashboard';
import { DetailPage, loader as detailPageLoader } from 'pages/DetailPage';
import { Layout } from 'components/Layout';
import 'react-toastify/dist/ReactToastify.css';
import 'index.scss';

const routes = [
  {
    path: '/',
    element: <Dashboard />,
    loader: dashboardLoader
  },
  {
    path: '/country/:name',
    element: <DetailPage />,
    loader: detailPageLoader
  }
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map(({ path, element, loader }) => {
      return { path, element, loader, errorElement: <ToastContainer /> };
    })
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ThemeContextProvider>
);
