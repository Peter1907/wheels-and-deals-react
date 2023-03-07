import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const background = './background.jpg';
  const logo = './logo.svg';
  const userLogin = useSelector((state) => state.loginUsers);

  return (
    <div className="home flex flex-col">
      <img src={logo} alt="logo" className="w-16 z-10 self-center mt-4 sm:w-20" />
      <img src={background} alt="background" className="absolute w-full h-full object-cover" />
      <div className="overlay absolute top-0 left-0 w-full h-full bg-orange mix-blend-multiply" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
        <div className="flex flex-col my-auto justify-center items-center p-4 bg-black bg-opacity-20 rounded-lg">
          <h1 className="tracking-wider text-3xl text-slate-100 font-bold mb-4 sm:text-5xl sm:tracking-widest">WHEELS AND DEALS</h1>
          <p className="tracking-wide font-ibm text-md text-slate-300 mb-12 sm:text-2xl">Explore elite luxury and class</p>
          <Link to="/cars" className="bg-green text-white font-semibold py-2 px-8 rounded-full mt-4 mt-26 sm:text-2xl">
            Explore
          </Link>
        </div>
      </div>
      {!userLogin.signed && (
      <div className="absolute top-0 self-center flex justify-between items-center w-[95%] mt-8 text-sm font-semibold sm:text-xl">
        <Link to="/login">
          <button type="button" className="bg-black bg-opacity-30 text-slate-100 py-2 px-6 rounded-full hover:bg-black hover:text-orange hover:opacity-80">LOGIN</button>
        </Link>
        <Link to="/signup">
          <button type="button" className="bg-black bg-opacity-30 text-slate-100 py-2 px-6 rounded-full hover:bg-black hover:text-orange hover:opacity-80">SIGN UP</button>
        </Link>
      </div>
      )}
    </div>
  );
};

export default Home;
