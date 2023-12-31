import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ColorRing } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import CarCard from '../Components/Car/CarCard';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Car.css';

const Car = () => {
  const cars = useSelector((state) => state.cars.cars);
  const loading = useSelector((state) => state.cars.loading);
  const navigate = useNavigate();

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
  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      navigate('/');
    }
  });
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
            {cars.length === 0 ? (
              <div className="grid place-items-center gap-4">
                <p className="text-center text-gray-400 mt-4">
                  You have no cars at the moment, please click the button below
                  to add one.
                </p>
                <Link
                  to="/car/add"
                  className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300 block text-center"
                >
                  Add Car
                </Link>
              </div>
            ) : (
              <Swiper
                slidesPerView={3}
                breakpoints={breakpoints}
                navigation
                modules={[Navigation]}
                className="my-4"
              >
                {cars
                  && cars.map((car) => (
                    <SwiperSlide className="w-[70%] mx-auto" key={car.id}>
                      <CarCard car={car} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Car;
