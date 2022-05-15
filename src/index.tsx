import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Header from './components/pageBlocks/Header';
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";
import Procedure from './components/pageBlocks/Procedure';

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/"
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <Procedure/>
  </React.StrictMode>
);


