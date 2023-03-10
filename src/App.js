import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './components/Home/Home';
import Cars from './components/pages/Cars';
import Login from './components/Registration/Login';
import SignUp from './components/Registration/SignUp';
import NewCar from './components/NewCar/NewCar';
import NewReservation from './components/NewReservation/NewReservation';
import Details from './components/pages/Details';
import ReservedCars from './components/Reservation/reservedCars';

const App = () => {
  const signed = useSelector((state) => state.loginUsers.signed);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/new-car"
          element={signed ? <NewCar /> : <Login />}
        />
        <Route
          path="/new-reservation"
          element={signed ? <NewReservation /> : <Login />}
        />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/reserved" element={<ReservedCars />} />
      </Routes>
    </div>
  );
};

export default App;
