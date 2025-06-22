import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

const Root = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
