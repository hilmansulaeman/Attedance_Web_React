import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router } from "./store/Router"; // Use curly braces and the correct name

const root = ReactDOM.createRoot(document.getElementById(`root`));
root.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>
);
 