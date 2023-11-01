import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagramSquare,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const CarCard = ({ car }) => {
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
  return (
    <Link to={`/car/details/${car.id}`}>
      <div className="max-w-sm bg-white border-none rounded-lg h-[400px] lg:h-[400px] grid place-items-center hover:border-gray-500 hover:shadow-md">
        <div className="h-[80%] w-full lg:h-[50%]">
          <img
            src={car.image_url}
            alt={car.name}
            className="w-[100px] h-[100px] mx-auto object-cover"
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
              <a
                key={social.name}
                href={social.link}
                className="text-gray-400 h-6 w-6  rounded-full border border-gray-300 items-center justify-center flex "
                aria-label={social.name}
              >
                {social.icon}
              </a>
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
  }).isRequired,
};

export default CarCard;
