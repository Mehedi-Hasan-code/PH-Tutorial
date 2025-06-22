import React from 'react';
import { Outlet } from 'react-router';
import ProFastLogo from '../component/common/ProFastLogo';
import authImage from '../assets/authImage.png'
const Auth = () => {
  return (
    <>
      <ProFastLogo />
      <AuthBasicLayOut />
    </>
  );
};

export default Auth;

const AuthBasicLayOut = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row-reverse">
        <div className='flex-1 flex justify-center lg:justify-start'>
          <img
          src={authImage}
        />
        </div>
        <div className='flex-1 w-full'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
