import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

const CarCard = ({ car }) => {
  const twitterIcon = React.createElement(FontAwesomeIcon, { icon: faTwitter });
  const facebookIcon = React.createElement(FontAwesomeIcon, {
    icon: faFacebookF,
  });

  //   const socials = [
  //     {
  //       name: 'twitter',
  //       link: '/',
  //       icon: twitterIcon,
  //     },
  //     {
  //       name: 'facebook',
  //       link: '/',
  //       icon: facebookIcon,
  //     },
  //   ];
  return (
    <Link to={`/car/${car.id}`}>
      <div className="car-card h-[500px] lg:h-[600px] pb-10">
        <div className="w-full h-[30%] lg:[50%]">
          <img
            src="https://img.freepik.com/free-vector/white-convertible-car-isolated-white-vector_53876-66815.jpg"
            alt={car.name}
            className="w-full h-[100%] object-cover rounded-md"
          />
        </div>
        <div className="w-full h-[70%] lg:h-[50%] flex flex-col justify-center items-center">
          <h1 className="text-2xl font-bold">{car.name}</h1>
          <div className="dot-line text-center w-[80%] mx-auto text-gray-500 text-lg font-bold ">
            . . . . . . . . . . . . . .
          </div>
          {/* <ul className="flex justify-center p-3 mt-10">
            {socials.map((social) => (
              <li
                key={social.name}
                className="inline-block mx-2 rounded-full border-2 border-gray-300 p-2 me-5"
              >
                <Link className="text-2xl text-gray-400" to={social.link}>
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </Link>
  );
};

CarCard.propTypes = {
  car: PropTypes.object.isRequired,
};

export default CarCard;
