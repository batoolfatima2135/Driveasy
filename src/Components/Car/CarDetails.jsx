import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarDetails } from '../../Redux/Car/carSlice';

export default function CarDetails() {
  const car = useSelector((state) => state.car.carDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarDetails(1));
  }, [dispatch]);
  return (
    <div>{car && <p>{car.name}</p>}</div>
  );
}
