import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from 'store/theme-context';
import { DataContextProvider } from 'store/data-context';
import 'index.scss';
import { App } from 'App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeContextProvider>
    <DataContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataContextProvider>
  </ThemeContextProvider>
);
