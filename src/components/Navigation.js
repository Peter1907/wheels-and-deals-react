import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { allowDelete } from '../redux/reducers/cars';

const Navigation = () => {
  const dispatch = useDispatch();

  const displayMessage = () => {
    const messageContainer = document.querySelector('.message-container');
    messageContainer.classList.remove('hidden');
    setTimeout(() => {
      messageContainer.classList.add('hidden');
    }, 4000);
  };

  const activateDelete = () => {
    dispatch(allowDelete());
    displayMessage();
  };

  return (
    <div className="fixed top-0 bottom-0 text-left navigation hidden border-r border-gray-300 float-left py-8 w-[250px] bg-slate-100 h-screen lg:block">
      <NavLink to="/">
        <img className="w-24 mx-auto" src={logo} alt="logo" />
      </NavLink>
      <ul className="flex flex-col mt-16 ml-4">
        <NavLink to="/cars">
          <li className="cursor-pointer py-4 text-xl font-semibold pl-8">CARS</li>
        </NavLink>
        <NavLink
          to="/new-reservation"
          onClick={() => sessionStorage.removeItem('id')}
        >
          <li className="cursor-pointer py-4 text-xl font-semibold pl-8">NEW RESERVATION</li>
        </NavLink>
        <NavLink to="/reserved">
          <li className="cursor-pointer py-4 text-xl font-semibold pl-8">MY RESERVATIONS</li>
        </NavLink>
        <NavLink to="/new-car">
          <li className="cursor-pointer py-4 text-xl font-semibold pl-8">ADD CAR</li>
        </NavLink>
        <li className="cursor-pointer py-4 text-xl font-semibold pl-8">
          <button
            type="button"
            onClick={activateDelete}
          >
            DELETE CAR
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
