import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cancelReservation } from '../../Redux/Reservation/reservationSlice';

const ReservationCard = ({ reservation }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (id) => {
    dispatch(cancelReservation(id));
  };
  useEffect(() => {
    if (!localStorage.getItem('userId')) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className="max-w-sm bg-white cursor-pointer border-gray-300 shadow-lg rounded-lg border grid place-items-center hover:-translate-y-1 duration-200">
      <a href={`/car/details/${reservation.car.id}`}>
        <div>
          <img
            src={reservation.car.image_url}
            alt={reservation.car.name}
            className="mx-auto object-cover rounded-lg"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-center">
            <h5 className="mb-2 text-xl font-bold uppercase  tracking-tight ">
              {reservation.car.name}
            </h5>
          </div>
          <div className="border-dotted border-gray-400 w-[100%] flex items-center justify-center text-gray-400 font-bold">
            . . . . . . . . . . . .
          </div>
          <div className="grid place-items-center">
            <p className=" font-normal text-gray-400 text-center text-sm ">
              Here you have the
              {' '}
              {reservation.car.name}
              {' '}
              reserved for you on
              {' '}
              {reservation.date}
              . It is a &nbsp;
              {reservation.car.color}
              {' '}
              car and the model is &nbsp;
              {reservation.car.model}
              .
            </p>
            <div className="w-full">
              <div className="flex justify-between mt-5 bg-gray-300 p-2">
                <p className="font-medium text-sm">Name</p>
                <p className="font-medium text-sm">{reservation.car.name}</p>
              </div>
              <div className="flex justify-between p-2">
                <p className="font-medium text-sm">Model</p>
                <p className="font-medium text-sm">{reservation.car.model}</p>
              </div>
              <div className="flex justify-between  bg-gray-300 p-2">
                <p className="font-medium text-sm">Reservation Date</p>
                <p className="font-medium text-sm">{reservation.date}</p>
              </div>
              <div className="flex justify-between p-2">
                <p className="font-medium text-sm">Payment</p>
                <p className="font-medium text-sm">
                  $
                  {reservation.car.price}
                </p>
              </div>

            </div>
          </div>
        </div>
      </a>
      <div className="text-center m-2">
        <button type="button" className="bg-custom-green text-white rounded py-2 px-5 hover:bg-custom-green-light transition duration-300" onClick={() => handleSubmit(reservation.id)}>Cancel Booking</button>
      </div>
    </div>
  );
};
ReservationCard.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    city: PropTypes.string,
    car_id: PropTypes.number,
    user_id: PropTypes.number,
    car: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      model: PropTypes.string,
      color: PropTypes.string,
      price: PropTypes.string,
      image_url: PropTypes.string,
    }),
  }).isRequired,
};

export default ReservationCard;
