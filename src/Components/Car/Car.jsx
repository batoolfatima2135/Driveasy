import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { fetchCars } from '../../Redux/Car/carSlice';
import CarCard from './CarCard';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../Car.css';

export default function Car() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars);
  const loading = useSelector((state) => state.cars.loading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const breakpoints = {
    // Extra small screens (phones)
    320: {
      slidesPerView: 1,
    },
    // Small screens (tablets)
    768: {
      slidesPerView: 2,
    },
    // Medium screens (desktops)
    1024: {
      slidesPerView: 3,
    },
    // Large screens (large desktops)
    1440: {
      slidesPerView: 3,
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-10 ">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="uppercase font-extrabold text-2xl lg:text-4xl tracking-wider">
          latest models
        </h1>
        <p className="text-gray-400 font-semibold">please select a car model</p>
      </div>
      <div className="w-full mx-auto">
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          breakpoints={breakpoints}
          navigation
          modules={[Navigation]}
          className=""
        >
          {cars.map((car) => (
            <SwiperSlide className="w-[70%] mx-auto" key={car.id}>
              <CarCard car={car} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
