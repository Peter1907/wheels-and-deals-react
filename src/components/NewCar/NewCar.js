import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import storage from './firebase';
import { addCar } from '../../redux/reducers/cars';

const logo = './logo.svg';

function NewCar() {
  const dispatch = useDispatch();
  const [carData, setCarData] = useState({
    name: null,
    description: null,
    photo: null,
    price: null,
  });

  const [Message, setMessage] = useState('');
  const displayMessage = () => {
    const messageContainer = document.querySelector('.message-container');
    messageContainer.classList.remove('hidden');
    setTimeout(() => {
      messageContainer.classList.add('hidden');
    }, 10000);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!carData.name || !carData.description || !carData.price) {
      setMessage('Please fill all the fields');
      displayMessage();
      return;
    }
    if (!carData.photo) {
      setMessage('Please upload an image first');
      displayMessage();
      return;
    }
    dispatch(addCar(carData));
    setMessage('Car added successfully');
    displayMessage();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const uploadImage = (file) => {
    if (!file) {
      setMessage('Please select an image first');
      displayMessage();
      return;
    }
    setMessage('Uploading image, please wait...');
    displayMessage();
    const imageRef = ref(storage, `Cars/${v4()}${file.name}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setCarData({
          ...carData,
          photo: url,
        });
        setMessage('Image got uploaded successfully!');
        displayMessage();
      });
    });
  };

  const removeMessage = () => {
    const messageContainer = document.querySelector('.message-container');
    messageContainer.classList.add('hidden');
  };
  const crossIcon = <FontAwesomeIcon icon={faXmark} />;

  return (
    <section className="flex flex-col items-center justify-center bg-[url('/src/assets/new-car-background.jpg')] bg-center bg-cover h-screen w-screen bg-orange bg-blend-multiply">
      <Link to="/cars" className="w-16 z-10 self-center mt-4 sm:w-20 absolute top-1">
        <img src={logo} alt="logo" />
      </Link>
      <div className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white fixed top-3 left-3">User Diego</div>
      <h1 className="text-4xl font-bold text-white">ADD A NEW CAR</h1>
      <span className="block h-0.5 w-1/2 bg-white m-2.5" />
      <form onSubmit={handleSubmit} className="relative flex flex-col gap-2 px-4 py-12 bg-black bg-opacity-50 rounded-lg">
        <div className="message-container hidden flex bg-green text-white text-center py-2 px-4 rounded-md absolute top-2 left-1/2 transform -translate-x-1/2 w-max">
          <span className="message font-semibold text-sm lg:text-base">{Message}</span>
          <button
            type="button"
            onClick={() => removeMessage()}
            className="ml-4 inline-block"
          >
            {crossIcon}
          </button>
        </div>
        <input
          className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white"
          placeholder="Name"
          type="text"
          name="name"
          id="name"
          value={carData.name}
          onChange={handleInputChange}
        />
        <input
          className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white"
          placeholder="Description"
          type="text"
          name="description"
          id="description"
          value={carData.description}
          onChange={handleInputChange}
        />
        <input
          className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white"
          placeholder="Price"
          type="number"
          step="1"
          name="price"
          id="price"
          value={carData.price}
          onChange={handleInputChange}
        />
        <div className="image-upload flex items-baseline gap-2">
          <input
            className="bg-gray-200 rounded-full text-sm px-4 py-2 mt-2 focus:outline-none focus:bg-white w-3/4"
            placeholder="Photo"
            type="file"
            name="photo"
            id="photo"
          />
          <button
            type="button"
            className="bg-green text-white font-bold rounded-md py-1.5 px-3 active:scale-95 transition duration-150"
            onClick={() => {
              uploadImage(document.getElementById('photo').files[0]);
              displayMessage();
            }}
          >
            Upload
          </button>
        </div>
        <button type="submit" className="bg-green text-white font-semibold py-2 px-8 rounded-full mt-4 mt-26 sm:text-2xl">Add now</button>
      </form>
    </section>
  );
}

export default NewCar;
