import React from 'react';
import { useParams } from 'react-router-dom';

const Sorry = () => {
  const { status } = useParams();

  return (

    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-custom-green">SORRY! 😔</h1>
      <h2 className="font-semibold capitalize text-center p-3">
        {status}
        {' '}
        😞
      </h2>
      <div className="m-10">
        <a href="/cars" className=" mx-2 bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300">Go to Mainpage</a>
        <a href="/car/add" className="bg-custom-green  mx-2 text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300">Add More Cars </a>
        <a href="/reserve" className="bg-custom-green  mx-2 text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300">Book another car</a>

      </div>
    </div>
  );
};

export default Sorry;
