import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Dashboard, dashboardLoader, DetailPage, detailPageLoader } from 'pages';
import { ThemeContextProvider } from 'lib/stores';
import { Layout } from 'lib/components';
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
    children: routes.map(({ path, element, loader }) => ({
      path,
      element,
      loader,
      errorElement: <ToastContainer />
    }))
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
