import React from 'react';
import './App.css';
// import { Sidebar } from "./component/Sidebar";
import Sidebar from './component/Sidebar';
import { Dashboard } from './component/Dashboard';
import { Outlet } from 'react-router-dom';
import { Button } from './component/Button';

const App = () => {
  return (
    <div className='flex'>
      <div className='basis-[15%] h-[120vh]'>
        <Sidebar />
      </div>
      <div className='basis-[85%] border'>
        <Dashboard />
        <div>
        <Outlet> </Outlet>
      </div>
      </div>
    </div>
  )
}

export default App