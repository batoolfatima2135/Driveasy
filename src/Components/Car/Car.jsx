import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { fetchCars } from '../../Redux/Car/carSlice';
import CarCard from './CarCard';

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

  return (
    <div className="pt-10 flex justify-end">
      <div className="w-[100%] lg:w-[80%] h-[115vh]">
        <h1 className=" font-extrabold text-2xl lg:text-4xl text-center tracking-wider">
          LATEST MODELS
        </h1>
        <h2 className="font-semibold  text-gray-500 text-center my-5">
          Please select a Yacht
        </h2>
        <div className="mt-10">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {cars.map((car) => (
              <SwiperSlide className="w-[70%] mx-auto" key={car.id}>
                <CarCard car={car} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
