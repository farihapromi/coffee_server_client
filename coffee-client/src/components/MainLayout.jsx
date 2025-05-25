// components/MainLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content */}
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
