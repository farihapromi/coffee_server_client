// components/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './header';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
      <Header/>
      <div className="flex-grow">
        <Outlet />
      </div>
      
   <div className='mt-10'>
        <Footer />

   </div>
  
    </div>
  );
};

export default MainLayout;
