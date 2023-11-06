import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ColorRing } from 'react-loader-spinner';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCars } from '../../Redux/Car/carSlice';
import {
  addReservation,
  resetState,
} from '../../Redux/Reservation/reservationSlice';
import '../../index.css';

const ReservationForm = () => {
  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  const [minDate] = useState(getCurrentDate());
  const userID = localStorage.getItem('userId');
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.reservations.status);
  const message = useSelector((state) => state.reservations.message);
  const loading = useSelector((state) => state.reservations.loading);
  const cars = useSelector((state) => state.cars.cars);
  const [formData, setFormData] = useState({
    city: '',
    date: '',
    user_id: '',
    car_id: '',
  });
  const handleChange = (e) => {
    // Get the selected city and date
    const { name } = e.target;
    const { value } = e.target;
    let carId = null;
    if (!id) {
      setFormData({
        ...formData,
        user_id: parseInt(userID, 10),
        [name]: value,
      });
    } else {
      carId = parseInt(id, 10);
      setFormData({
        ...formData,
        user_id: parseInt(userID, 10),
        car_id: carId,
        [name]: value,
      });
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addReservation(formData));
  };

  useEffect(() => {
    dispatch(fetchCars());
    if (!loading) {
      if (status === 'booked') {
        dispatch(resetState());
        navigate(`/thankyou/${message}`);
      } else if (status === 'Not booked') {
        dispatch(resetState());
        navigate(`/sorry/${message}`);
      }
    }
  }, [dispatch, loading, status, navigate, message]);
  return (
    <div
      className="h-screen  flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://purepng.com/public/uploads/large/purepng.com-suzukisuzukisuzuki-carsuzuki-automobilessuzuki-carsvehicles-1701527677135nhb1t.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex h-screen  lg:items-center   md:items-center justify-center bg-custom-green bg-opacity-95 w-full">
        <div className="lg:w-2/3 w-4/5">
          <h2 className="lg:text-2xl md:text-lg text-base  mt-14 lg:w-3/4 font-bold text-center mx-auto text-white tracking-widest uppercase lg:mb-4  md:mb-4 mb-2 lg:pb-4 pb-2 font-sans border-b">
            Book a Car for a day
          </h2>
          <p className="text-center text-white text-sm lg:text-base md:text-base lg:m-4  md:mb-4">
            You have the flexibility to reserve any of our available cars for an
            entire day in the city of your choice. We invite you to specify both
            the city where you&apos;d like to make your reservation and the
            desired date for your car booking
          </p>
          <form onSubmit={handleFormSubmit}>
            <div
              className={` grid  ${
                id
                  ? 'justify-center grid-cols-2'
                  : 'justify-between grid-cols-3'
              }`}
            >
              <div className="col-span-3 lg:col-span-1 md:col-span-1 bg-custom-green border my-1 border-white rounded-full flex justify-center mx-2">
                <select
                  required
                  name="city"
                  onChange={handleChange}
                  className="bg-custom-green cursor-pointer text-white rounded-full px-2 w-11/12 outline-none lg:p-4 p-2"
                >
                  <option disabled selected value="">
                    Select a city
                  </option>
                  <option value="New york">New york</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Seattle">Seattle</option>
                  <option value="San Diego">San Diego</option>
                  <option value="San Francisco">San Francisco</option>
                  <option value="Las Vegas">Las Vegas</option>
                  <option value="Los Angeles">Los Angeles</option>
                </select>
              </div>
              {!id && (
                <div className=" col-span-3 lg:col-span-1 md:col-span-1 bg-custom-green border my-1 border-white rounded-full flex justify-center mx-2">
                  <select
                    required
                    name="car_id"
                    onChange={handleChange}
                    className="bg-custom-green cursor-pointer text-white rounded-full px-2 w-11/12 outline-none lg:p-4 p-2"
                  >
                    <option disabled selected value="">
                      Select a car
                    </option>
                    {cars
                      && cars.length > 0
                      && cars.map((car) => (
                        <option key={car.id} value={car.id}>
                          {car.color}
                          {' '}
                          {car.name}
                          {' '}
                          -
                          {' '}
                          {car.model}
                        </option>
                      ))}
                  </select>
                </div>
              )}
              <input
                type="date"
                name="date"
                required
                min={minDate}
                onChange={handleChange}
                className="bg-white mx-2 lg:col-span-1 md:col-span-1 focus:bg-custom-green col-span-3 focus:text-white my-1 text-custom-green rounded-full  border outline-none lg:p-4 p-2"
              />
            </div>
            {loading && (
              <div className="flex justify-center">
                <ColorRing
                  visible
                  height="50"
                  width="50"
                  className="m-2"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    '#8EB904',
                    '#8EB904',
                    '#8EB904',
                    '#8EB904',
                    '#8EB904',
                    '#8EB904',
                  ]}
                />
              </div>
            )}
            {status === 'Not booked' && (
              <p className="font-semibold text-center uppercase text-red-600 mt-4">
                {message}
              </p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-white lg:m-4 md:m-4 m-2 lg:p-5 p-3 text-sm lg:text-base  font-medium text-custom-green  py-3  rounded-full hover:bg-custom-green-light hover:text-white focus:outline-none"
              >
                CONFIRM BOOKING
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
