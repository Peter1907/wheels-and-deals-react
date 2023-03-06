import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const MobileNavigation = () => {
  const crossIcon = <FontAwesomeIcon icon={faXmark} />;
  const hamburguerIcon = <FontAwesomeIcon icon={faBars} />;
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mobile-menu lg:hidden">
      <button
        type="button"
        className="menu-btn absolute top-4 left-4 text-xl z-30"
        onClick={() => setShowMenu(true)}
      >
        {hamburguerIcon}
      </button>
      {showMenu && (
        <div className="menu fixed inset-0 bg-white z-30 pt-20">
          <button
            type="button"
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-3xl"
          >
            {crossIcon}
          </button>
          <NavLink to="/">
            <img className="w-24 mx-auto" src="./logo.svg" alt="logo" />
          </NavLink>
          <ul className="flex items-stretch text-center flex-col mt-16 px-4">
            <NavLink to="/cars">
              <li className="cursor-pointer py-4 text-xl font-semibold">CARS</li>
            </NavLink>
            <NavLink to="/new-reservation">
              <li className="cursor-pointer py-4 text-xl font-semibold">NEW RESERVATION</li>
            </NavLink>
            <NavLink to="/reserved">
              <li className="cursor-pointer py-4 text-xl font-semibold">MY RESERVATIONS</li>
            </NavLink>
            <NavLink to="/new-car">
              <li className="cursor-pointer py-4 text-xl font-semibold">ADD CAR</li>
            </NavLink>
            <li className="cursor-pointer py-4 text-xl font-semibold">DELETE CAR</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
