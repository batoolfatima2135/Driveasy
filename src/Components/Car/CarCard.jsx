import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagramSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { deleteCar } from '../../Redux/Car/carSlice';

const CarCard = ({ car, isDeleteRoute }) => {
  const twitterIcon = React.createElement(FontAwesomeIcon, { icon: faTwitter });
  const facebookIcon = React.createElement(FontAwesomeIcon, {
    icon: faFacebookF,
  });
  const instagramIcon = React.createElement(FontAwesomeIcon, {
    icon: faInstagramSquare,
  });

  const socials = [
    {
      name: 'twitter',
      link: `/car/details/${car.id}`,
      icon: twitterIcon,
    },
    {
      name: 'facebook',
      link: `/car/details/${car.id}`,
      icon: facebookIcon,
    },
    {
      name: 'instagram',
      link: `/car/details/${car.id}`,
      icon: instagramIcon,
    },
  ];

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteCar(id));
  };

  if (isDeleteRoute) {
    return (
      <div className="max-w-sm bg-white rounded-lg border-gray-800 shadow-md grid place-items-center hover:-translate-y-1 duration-300">
        <Link to={`/car/details/${car.id}`}>
          <div className="h-20">
            <img
              src={car.image_url}
              alt={car.name}
              className="mx-auto h-20 object-cover"
            />
          </div>
          <div className="p-5">
            <div className="flex items-center justify-center">
              <h5 className="mb-2 text-xl font-bold uppercase  tracking-tight ">
                {car.name}
              </h5>
            </div>
            <div className="border-dotted border-gray-400 w-[100%] flex items-center justify-center text-gray-400 font-bold">
              . . . . . . . . . . . .
            </div>
            <div className="grid place-items-center">
              <p className="mb-3 font-normal text-gray-400 text-center text-sm mt-10">
                Here we have the
                {' '}
                {car.name}
                {' '}
                for you. It is a
                {' '}
                {car.color}
                {' '}
                car and
                the model is
                {' '}
                {car.model}
                .
              </p>
              <div className="w-full">
                <div className="flex justify-between mt-5 bg-gray-300 p-2">
                  <p className="font-medium text-sm">Name</p>
                  <p className="font-medium text-sm">{car.name}</p>
                </div>
                <div className="flex justify-between p-2">
                  <p className="font-medium text-sm">Model</p>
                  <p className="font-medium text-sm">{car.model}</p>
                </div>
                <div className="flex justify-between p-2">
                  <p className="font-medium text-sm">Payment</p>
                  <p className="font-medium text-sm">
                    $
                    {car.price}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="flex items-center justify-center gap-6 mt-6"
              aria-label="social"
            >
              {socials.map((social) => (
                <div
                  key={social.name}
                  href={social.link}
                  className="text-gray-400 h-6 w-6  rounded-full border border-gray-300 items-center justify-center flex "
                  aria-label={social.name}
                >
                  {social.icon}
                </div>
              ))}
            </div>
          </div>
        </Link>
        {isDeleteRoute && (
          <div className="flex justify-center items-center z-50 pb-4">
            <button
              type="button"
              className="border border-red-700 hover:bg-red-700 text-red-700 w-[8rem] hover:text-white font-bold py-2 px-4 rounded mt-[5px] duration-300"
              onClick={() => handleDelete(car.id)}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    );
  }
  return (
    <Link to={`/car/details/${car.id}`}>
      <div
        className={`max-w-sm bg-white rounded-lg h-[400px] lg:h-[400px] grid place-items-center hover:shadow-md ${
          isDeleteRoute
            ? 'max-w-sm bg-white  border-gray-800 shadow-md rounded-lg h-[400px] lg:h-[400px] grid place-items-center hover:translate-y-4 duration-300'
            : ''
        }`}
      >
        <div>
          <img
            src={car.image_url}
            alt={car.name}
            className="mx-auto object-cover"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-center">
            <h5 className="mb-2 text-xl font-bold uppercase  tracking-tight ">
              {car.name}
            </h5>
          </div>
          <div className="border-dotted border-gray-400 w-[100%] flex items-center justify-center text-gray-400 font-bold">
            . . . . . . . . . . . .
          </div>
          <div className="grid place-items-center">
            <p className="mb-3 font-normal text-gray-400 text-center text-sm mt-10">
              Here we have the
              {' '}
              {car.name}
              {' '}
              for you. It is a
              {' '}
              {car.color}
              {' '}
              car and
              the model is
              {' '}
              {car.model}
              .
            </p>
          </div>
          <div
            className="flex items-center justify-center gap-6 mt-6"
            aria-label="social"
          >
            {socials.map((social) => (
              <div
                key={social.name}
                href={social.link}
                className="text-gray-400 h-6 w-6  rounded-full border border-gray-300 items-center justify-center flex "
                aria-label={social.name}
              >
                {social.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  isDeleteRoute: PropTypes.bool,
};

CarCard.defaultProps = {
  isDeleteRoute: false,
};

export default CarCard;
