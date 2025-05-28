import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen max-w-[1600px] mx-auto">
      <Navbar />
      <div className="mt-20 grow flex flex-col">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
