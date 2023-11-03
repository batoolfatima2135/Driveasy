import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../Redux/Car/carSlice';
import CarCard from './CarCard';

const DeleteCar = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const loading = useSelector((state) => state.cars.loading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="mx-2 max-h-[47.1rem] pb-3 overflow-y-scroll">
      {loading ? (
        <div className="col-span-8 flex h-screen justify-center items-center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
          {cars.map((car) => (
            <CarCard key={car.id} car={car} isDeleteRoute />
          ))}
        </div>
      )}
    </div>
  );
};

export default DeleteCar;
