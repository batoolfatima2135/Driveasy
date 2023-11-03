import React from 'react';
import PropTypes from 'prop-types';

const ReservationCard = ({ reservation }) => (
  <div className="max-w-sm bg-white  border-gray-800 shadow-md rounded-lg h-[400px] lg:h-[400px] grid place-items-center hover:translate-y-4 duration-300">
    <div>
      <img
        src={reservation.car.image_url}
        alt={reservation.car.name}
        className="mx-auto object-cover"
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
        <p className="mb-3 font-normal text-gray-400 text-center text-sm mt-10">
          Here you have the
          {' '}
          {reservation.car.name}
          {' '}
          reserved for you for &#8358
          {' '}
          {reservation.date}
          . It is a &nbsp;
          {reservation.car.color}
          {' '}
          car and the model is
          {reservation.car.model}
          .
        </p>
      </div>
    </div>
  </div>
);

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
      image_url: PropTypes.string,
    }),
  }).isRequired,
};

export default ReservationCard;
