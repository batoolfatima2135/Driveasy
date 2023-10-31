import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faCalendarCheck,
  faCalendar,
  faPlus,
  faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faGooglePlus,
  faLinkedinIn,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../../Assets/image/logo192.png';

const SideBar = () => {
  const modelIcon = React.createElement(FontAwesomeIcon, { icon: faCar });
  const lifestyleIcon = React.createElement(FontAwesomeIcon, {
    icon: faCalendar,
  });
  const shopIcon = React.createElement(FontAwesomeIcon, {
    icon: faCalendarCheck,
  });
  const driveIcon = React.createElement(FontAwesomeIcon, { icon: faPlus });

  const twitterIcon = React.createElement(FontAwesomeIcon, { icon: faTwitter });
  const facebookIcon = React.createElement(FontAwesomeIcon, {
    icon: faFacebookF,
  });
  const gmailIcon = React.createElement(FontAwesomeIcon, {
    icon: faGooglePlus,
  });
  const linkedinIcon = React.createElement(FontAwesomeIcon, {
    icon: faLinkedinIn,
  });
  const pintrestIcon = React.createElement(FontAwesomeIcon, {
    icon: faPinterestP,
  });

  const menus = [
    {
      name: 'cars',
      link: '/cars',
      icon: modelIcon,
    },
    {
      name: 'book car',
      link: '/',
      icon: lifestyleIcon,
    },
    {
      name: 'my bookings',
      link: '/',
      icon: shopIcon,
    },
    {
      name: 'add car',
      link: '/car/add',
      icon: driveIcon,
    },
  ];

  const socials = [
    {
      name: 'twitter',
      link: '/',
      icon: twitterIcon,
    },
    {
      name: 'facebook',
      link: '/',
      icon: facebookIcon,
    },
    {
      name: 'google',
      link: '/',
      icon: gmailIcon,
    },
    {
      name: 'linkedin',
      link: '/',
      icon: linkedinIcon,
    },
    {
      name: 'pintrest',
      link: '/',
      icon: pintrestIcon,
    },
  ];

  const dynamicDate = new Date().getFullYear();

  const [open, setOpen] = useState(true);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div
      className={`bg-[#fff] h-screen ${
        open ? 'w-72 lg:relative fixed' : 'w-16'
      } duration-500 shadow-lg shadow-gray-500 px-2 flex flex-col justify-between`}
      style={{ zIndex: 1000 }}
    >
      <div className="">
        <div className="py-3 px-3 flex justify-end">
          <FontAwesomeIcon
            icon={faBarsStaggered}
            className="cursor-pointer block lg:hidden"
            onClick={toggleSidebar}
          />
        </div>
        <img
          src={logo}
          alt="logo"
          className={`w-[10rem] h-20 mx-auto ${
            !open && 'opacity-0 translate-x-28 overflow-hidden'
          }`}
        />
      </div>
      <div
        className={`flex flex-col gap-4 relative ${
          open ? 'ml-[3rem]' : 'ml-[0.1rem]'
        }`}
      >
        {
          // Create menu items dynamically
          menus.map((menu) => (
            <Link
              to={menu.link}
              key={menu.name}
              className="flex items-center text-[#525252] text-sm gap-3.5 py-3 px-3 font-extrabold uppercase hover:bg-[#98c00b] hover-text-[#fff] rounded-md transition  hover:text-white"
            >
              {menu.icon}
              <h2
                className={`whitespace-pre duration-500 ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {menu.name}
              </h2>
            </Link>
          ))
        }
      </div>
      <div className=" flex-col gap-[3px] relative items-center justify-center pb-5">
        <div className="flex  items-center justify-center">
          {
            // Create social links dynamically
            socials.map((social) => (
              <Link
                to={social.link}
                key={social.name}
                className={`whitespace-pre  flex items-center text-[#525252] text-sm gap-3.5 py-3 px-3 font-extrabold uppercase hover:bg-[#98c00b] hover-text-[#fff] rounded-md transition duration-300  hover:text-white ${
                  !open && 'opacity-0 translate-x-28 overflow-hidden'
                }`}
              >
                {social.icon}
              </Link>
            ))
          }
        </div>
        <p
          className={`whitespace-pre duration-500 flex items-center justify-center text-sm ${
            !open && 'opacity-0 translate-x-28 overflow-hidden'
          }`}
        >
          &copy;
          {dynamicDate}
          All Rights Reserved.
          <span className="text-[#98c00b] italic">DrivEasy</span>
        </p>
      </div>
    </div>
  );
};
export default SideBar;
