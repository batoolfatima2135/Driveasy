import React from 'react';
import { useParams } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const Thankyou = () => {
  const { width, height } = useWindowSize();
  const { status } = useParams();

  return (

    <div className="min-h-screen flex flex-col items-center justify-center w-100">
      <h1 className="text-3xl lg:text-4xl font-bold text-custom-green">THANK YOU! </h1>
      <h2 className="font-semibold capitalize text-center">
        {status}
        {' '}
        🎉🎊
      </h2>
      <Confetti
        width={width}
        height={height}
      />
      <div className="m-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="my-1 mx-1">
          <a href="/cars" className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300 block text-center">
            View Cars
          </a>
        </div>
        <div className="my-1 mx-1">
          <a href="/car/add" className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300 block text-center">
            Add More Cars
          </a>
        </div>
        <div className="my-1 mx-1">
          <a href="/reserve" className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300 block text-center">
            Book Car
          </a>
        </div>
        <div className="my-1 mx-1">
          <a href="/reservations" className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300 block text-center">
            View Bookings
          </a>
        </div>
      </div>

    </div>
  );
};

export default Thankyou;
