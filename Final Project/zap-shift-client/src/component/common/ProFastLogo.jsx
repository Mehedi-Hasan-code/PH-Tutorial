import React from 'react';
import logo from '../../assets/logo.png';
const ProFastLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-2" src={logo} alt="ProFast Logo" />
      <h1 className="text-3xl font-bold -ml-3">ProFast</h1>
    </div>
  );
};

export default ProFastLogo;
