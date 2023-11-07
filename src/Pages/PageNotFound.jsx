import React from 'react';
import { Link } from 'react-router-dom';
import myimage from '../Assets/image/404 error with people holding the numbers-bro.png';

const PageNotFound = () => {
  const userID = localStorage.getItem('userId');

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <img
        src={myimage}
        alt="404"
        className="w-[900px] lg:h-[550px] object-cover"
      />
      {userID ? (
        <Link
          to="/cars"
          className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300 block text-center"
        >
          Homepage
        </Link>
      ) : (
        <Link
          to="/"
          className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300 block text-center"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default PageNotFound;
