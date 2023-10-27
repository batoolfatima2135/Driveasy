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

const SideBar = () => {
  // Dynamically create a FontAwesome icon element
  //   const dynamicIcon = React.createElement(FontAwesomeIcon, { icon: faBars });
  const modelIcon = React.createElement(FontAwesomeIcon, { icon: faCar });
  const lifestyleIcon = React.createElement(FontAwesomeIcon, {
    icon: faCalendar,
  });
  const shopIcon = React.createElement(FontAwesomeIcon, {
    icon: faCalendarCheck,
  });
  const driveIcon = React.createElement(FontAwesomeIcon, { icon: faPlus });

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
      link: '/',
      icon: driveIcon,
    },
  ];

  const [open, setOpen] = useState(true);

  // Function to handle sidebar open/close
  const toggleSidebar = () => {
    setOpen(!open);
  };

  // Close the sidebar on mobile screens (< 768px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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
      className={`bg-[#fff] min-h-screen ${
        open ? 'w-72' : 'w-16'
      } duration-500 shadow-lg shadow-gray-500 px-2`}
    >
      <div className="py-3 px-3 flex justify-end">
        <FontAwesomeIcon
          icon={faBarsStaggered}
          className="cursor-pointer"
          onClick={toggleSidebar}
        />
      </div>
      <div className="mt-4 flex flex-col gap-4 relative">
        {
          // Create menu items dynamically
          menus.map((menu, index) => (
            <Link
              to={menu.link}
              key={menu.name}
              className="flex items-center text-sm gap-3.5 py-3 px-3 font-extrabold uppercase hover:bg-[#98c00b] hover-text-[#fff] rounded-md transition duration-300  hover:text-white"
            >
              {menu.icon}
              <h2
                style={{
                  transitionDelay: `${index + 3}00ms`,
                }}
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
    </div>
  );
};

export default SideBar;
