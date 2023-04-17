import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App/App';
import { $films } from './store/store';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App  />
  </React.StrictMode>
);
