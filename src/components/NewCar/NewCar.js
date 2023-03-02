import { useState } from 'react';

function NewCar(onSubmit) {
  const [carData, setCarData] = useState({
    name: '',
    description: '',
    photo: '',
    price: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(carData);
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
      <div className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white absolute top-3 left-3">User Diego</div>
      <h1 className="text-4xl font-bold text-white">ADD A NEW CAR</h1>
      <span className="block h-0.5 w-1/2 bg-white m-2.5" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" placeholder="Name" type="text" name="name" id="name" value={carData.name} onChange={handleInputChange} />
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" placeholder="Description" type="text" name="description" id="description" value={carData.description} onChange={handleInputChange} />
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" placeholder="Photo" type="text" name="photo" id="photo" value={carData.photo} onChange={handleInputChange} />
        <input className="bg-gray-200 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" placeholder="Price" type="number" step="1" name="price" id="price" value={carData.price} onChange={handleInputChange} />
        <button type="submit" className="bg-green text-black font-bold py-2 px-4 rounded-full mt-4">Add now</button>
      </form>
    </section>
  );
}

export default NewCar;