import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Routing from './routing/routing.jsx';
import "bootstrap-icons/font/bootstrap-icons.css"
import './bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);


