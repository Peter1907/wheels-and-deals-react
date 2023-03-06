import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const crossIcon = <FontAwesomeIcon icon={faXmark} />
  return (
    <div className="fixed top-0 bottom-0 text-left navigation hidden border-r border-gray-300 float-left py-8 w-[250px] bg-slate-100 h-screen lg:block">
      <div id="mobile-menu" className="lg:hidden">
        {crossIcon}
      </div>
      <NavLink to="/">
        <img className="w-24 mx-auto" src="./logo.svg" alt="logo" />
      </NavLink>
      <ul className="flex flex-col mt-16 ml-4">
        <NavLink to="/cars">
          <li className="cursor-pointer py-4 text-xl font-semibold pl-8">CARS</li>
        </NavLink>
        <NavLink to="/new-reservation">
          <li className="cursor-pointer py-4 text-xl font-semibold pl-8">NEW RESERVATION</li>
        </NavLink>
        <NavLink to="/reserved">
          <li className="cursor-pointer py-4 text-xl font-semibold pl-8">MY RESERVATIONS</li>
        </NavLink>      
        <NavLink to="/new-car">
          <li className="cursor-pointer py-4 text-xl font-semibold pl-8">ADD CAR</li>
        </NavLink>
        <li className="cursor-pointer py-4 text-xl font-semibold pl-8">DELETE CAR</li>
      </ul>
    </div>
  );
}

export default Navigation;
