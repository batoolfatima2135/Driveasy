import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ColorRing } from 'react-loader-spinner';
import CarCard from './CarCard';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../Car.css';
import { fetchCars } from '../../Redux/Car/carSlice';

export default function Car() {
  const cars = useSelector((state) => state.cars.cars);
  const loading = useSelector((state) => state.cars.loading);

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
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <div className="mx-2">
      {loading ? (
        <div className="col-span-8 flex h-screen justify-center items-center">
          <ColorRing
            visible
            height="80"
            width="80"
            className="text-center"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={[
              '#8eb904',
              '#a5d606',
              '#8eb904',
              '#a5d606',
              '#8eb904',
              '#a5d606',
            ]}
          />
        </div>
      ) : (
        <div className="flex flex-col  justify-center h-screen mr-3 ">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="uppercase font-extrabold text-2xl lg:text-4xl tracking-wider">
              latest models
            </h1>
            <p className="text-gray-400 font-semibold">
              Please select a Car Model
            </p>
          </div>
          <div className="w-full mx-auto">
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              breakpoints={breakpoints}
              navigation
              modules={[Navigation]}
              className="my-4"
            >
              {cars.map((car) => (
                <SwiperSlide className="w-[70%] mx-auto" key={car.id}>
                  <CarCard car={car} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </div>
  );
}
