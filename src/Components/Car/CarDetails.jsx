import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarDetails } from '../../Redux/Car/carDetailsSlice';

export default function CarDetails() {
  const car = useSelector((state) => state.car.carDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarDetails(1));
  }, [dispatch]);
  return (
    <div className="grid grid-cols-9 p-4 mt-5">
      <div className="col-span-1">
        <p>{car}</p>
      </div>
      <div className="col-span-8 lg:col-span-5 flex flex-col justify-center align-middle">
        <img src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg" alt="car" />
        <button type="button" className=" flex justify-end rounded-l-none rounded-r-full bg-custom-green p-1 lg:p-3 lg:w-20 w-11">
          <img src={`${process.env.PUBLIC_URL}/icon.PNG`} className="mx-1 mt-1" width={20} alt="icon" />
        </button>
      </div>

      <div className="col-span-9 lg:col-span-3 flex lg:justify-start justify-center align-middlemt-5 pt-5">
        <div className="w-5/6 lg:w-4/6">
          <h1 className="text-center lg:text-right text-2xl font-bold ">MERCEDES-201</h1>
          <p className="text-center lg:text-right text-xs font-bold mb-5">50% off on any purchase!</p>
          <div className="flex justify-between mt-5 bg-gray-300 p-2 px-4">
            <p className="font-medium text-sm">Name</p>
            <p className="font-medium text-sm">mercedees</p>
          </div>
          <div className="flex justify-between  p-2 px-4">
            <p className="font-medium text-sm">Model</p>
            <p className="font-medium text-sm">MBE-201</p>
          </div>
          <div className="flex justify-between  bg-gray-300 p-2 px-4">
            <p className="font-medium text-sm">Color</p>
            <p className="font-medium text-sm">white</p>
          </div>
          <div className="flex justify-between  p-2 px-4">
            <p className="font-medium text-sm">Price</p>
            <p className="font-medium text-sm">$40.2</p>
          </div>
          <p className="m-2">
            <b>5.9% APR</b>
            {' '}
            Representative
          </p>
          <p className="text-left lg:text-right">
            <a className="font-bold text-xs -tracking-widest" href="/">
              {' '}
              DISCOVER MORE MODELS
              <b className="text-yellow-500 text-lg"> &gt; </b>
            </a>
          </p>
          <div className="flex justify-center lg:justify-end my-2">
            <img src={`${process.env.PUBLIC_URL}/colors.png`} alt="colors" />
          </div>
          <div className="flex justify-center lg:justify-end mt-5 pt-5 mr-7">
            <button type="button" className="rounded-full flex px-4 justify-center align-middle p-3 font-semibold bg-custom-green hover:bg-custom-green-light text-white w-3/5">
              Reserve
              <img src={`${process.env.PUBLIC_URL}/arrow.png`} className="mx-1 mt-1" width={17} alt="colors" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}