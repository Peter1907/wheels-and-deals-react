import { Link } from 'react-router-dom';

const Home = () => {
  const background = './background.jpg';

  return (
    <div className="home">
      <img src={background} alt="background" className="fixed top-0 left-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50">
        <div className="container mx-auto h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl text-white font-bold">Wheels and Deals</h1>
          <p className="text-2xl text-white">Explore elite luxury and class</p>
          <button type="button" className="bg-white text-black font-bold py-2 px-8 rounded-full mt-4">
            Explore
          </button>
        </div>
      </div>
      <div className="absolute top-0 right-20 flex gap-4">
        <Link to="/login">
          <button type="button" className="bg-white text-black font-bold py-2 px-4 rounded-full mt-4">LOGIN</button>
        </Link>
        <Link to="/signup">
          <button type="button" className="bg-white text-black font-bold py-2 px-4 rounded-full mt-4">SIGN UP</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
