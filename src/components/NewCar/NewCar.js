import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCar } from '../../redux/reducers/cars';

const logo = './logo.svg';

function NewCar() {
  const dispatch = useDispatch();

  const [carData, setCarData] = useState({
    name: '',
    description: '',
    photo: '',
    price: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar(carData));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  return (
    <section className="flex flex-col items-center justify-center bg-[url('/src/assets/new-car-background.jpg')] bg-center bg-cover h-screen w-screen bg-orange bg-blend-multiply">
      <Link to="/cars" className="w-16 z-10 self-center mt-4 sm:w-20 absolute top-1">
        <img src={logo} alt="logo" />
      </Link>
      <div className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white fixed top-3 left-3">User Diego</div>
      <h1 className="text-4xl font-bold text-white">ADD A NEW CAR</h1>
      <span className="block h-0.5 w-1/2 bg-white m-2.5" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" placeholder="Name" type="text" name="name" id="name" value={carData.name} onChange={handleInputChange} />
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" placeholder="Description" type="text" name="description" id="description" value={carData.description} onChange={handleInputChange} />
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" placeholder="Photo" type="text" name="photo" id="photo" value={carData.photo} onChange={handleInputChange} />
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" placeholder="Price" type="number" step="1" name="price" id="price" value={carData.price} onChange={handleInputChange} />
        <button type="submit" className="bg-green text-white font-semibold py-2 px-8 rounded-full mt-4 mt-26 sm:text-2xl">Add now</button>
      </form>
    </section>
  );
}

export default NewCar;
