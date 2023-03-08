import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeContextProvider } from 'store/theme-context';
import 'index.scss';
import { App } from 'App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeContextProvider>
);
