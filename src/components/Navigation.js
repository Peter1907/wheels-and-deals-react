import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <div className="fixed top-0 bottom-0 text-left navigation hidden border-r border-gray-300 float-left py-8 w-[250px] bg-slate-100 h-screen lg:block">
    <NavLink to="/">
      <img className="w-24 mx-auto" src="./logo.svg" alt="logo" />
    </NavLink>
    <ul className="flex flex-col mt-16 ml-4">
      <NavLink to="/cars" activeClassName="bg-green">
        <li className="cursor-pointer py-4 text-xl font-semibold pl-8">CARS</li>
      </NavLink>
      <li className="cursor-pointer py-4 text-xl font-semibold pl-8">RESERVE</li>
      <li className="cursor-pointer py-4 text-xl font-semibold pl-8">MY RESERVATIONS</li>
      <NavLink to="/new-car">
        <li className="cursor-pointer py-4 text-xl font-semibold pl-8">ADD CAR</li>
      </NavLink>
      <li className="cursor-pointer py-4 text-xl font-semibold pl-8">DELETE CAR</li>
    </ul>
  </div>
);

export default Navigation;
