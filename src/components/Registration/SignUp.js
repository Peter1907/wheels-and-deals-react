import { Link } from 'react-router-dom';

const SignUp = () => {
  const background = './background.jpg';
  return (
    <section className="signup">
      <img src={background} alt="background" className="fixed top-0 left-0 blur-lg" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <form className="p-16 bg-black flex flex-col justify-center items-center gap-4 opacity-50 rounded-lg">
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" type="text" id="name" placeholder="Name" />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" type="email" id="email" placeholder="Email" />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" type="password" id="password" placeholder="Password" />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" type="password" id="confirmPassword" placeholder="Confirm Password" />
          <button type="submit" className="bg-white text-black font-bold py-2 px-8 rounded-full mt-4">SIGN UP</button>
        </form>
        <div className="absolute top-0 left-20 flex gap-4">
          <Link to="/">
            <button type="button" className="bg-white text-black font-bold py-2 px-4 rounded-full mt-4">HOME</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
