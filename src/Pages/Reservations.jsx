import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { fetchReservations } from '../Redux/Reservation/reservationSlice';
import ReservationCard from '../Components/Reservation/ReservationCard';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state) => state.reservations.reservations);
  const loading = useSelector((state) => state.reservations.loading);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      navigate('/');
    }
    dispatch(fetchReservations());
  }, [dispatch]);

  return (
    <div className="mx-2 max-h-[47.1rem] pb-3 overflow-y-scroll">
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
        <div className="flex flex-col  justify-center mx-3 mt-8 max-h-full">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="uppercase font-extrabold text-2xl lg:text-4xl tracking-wider">
              bookings
            </h1>
            <p className="text-gray-400 font-semibold">
              Here are all the bookings you have made.
            </p>
          </div>
          {reservations.length === 0 ? (
            <p className="text-center text-gray-400 mt-4">
              You have no bookings at the moment.
            </p>
          ) : (
            <div className="grid grid-cols-1 mx-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {reservations.map((reservation) => (

                <ReservationCard
                  key={reservation.id}
                  reservation={reservation}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Reservations;
