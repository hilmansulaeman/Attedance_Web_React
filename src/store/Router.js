import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../component/Main';
import App from '../App';

export const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Main />} /> 
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
