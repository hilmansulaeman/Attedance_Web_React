import React from 'react';
import './App.css';
// import { Sidebar } from "./component/Sidebar";
import Sidebar from './component/Sidebar';

const App = () => {
  return (
    <div className='flex'>
      <div className='basis-[15%] h-[120vh]'>
        <Sidebar />
      </div>
      <div className='basis-[85%] border'>d</div>
    </div>
  )
}

export default App