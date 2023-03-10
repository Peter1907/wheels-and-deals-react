import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { postUser } from '../../redux/reducers/createUsers';

const SignUp = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.loginUsers);
  const userStatus = useSelector((state) => state.usersCreate);

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword) {
      setError('Passwords do not match');
    } else if (userData.email === '' || userData.password === '' || userData.confirmPassword === '' || userData.name === '') {
      setError('Please fill all the fields');
    } else {
      setUserData({
        ...userData, name: '', email: '', password: '', confirmPassword: '',
      });
      dispatch(postUser(userData));
    }
  };

  if (userLogin.signed) {
    return <Navigate to="/" replace />;
  }
  return (
    <section className="signup">
      <div className="absolute bg-center bg-cover bg-home h-full w-full bg-orange bg-blend-multiply blur-sm" />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <form className="p-4 sm:p-24 bg-black flex flex-col justify-center items-center gap-4 bg-opacity-50 rounded-lg" onSubmit={handleSubmit}>
          <h1 className="text-4xl text-white font-ubuntu">Sign Up</h1>
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" name="name" type="text" id="name" placeholder="Name" onChange={handleChange} value={userData.name} />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" name="email" type="email" id="email" placeholder="Email" onChange={handleChange} value={userData.email} />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" name="password" type="password" id="password" placeholder="Password" onChange={handleChange} value={userData.password} />
          <input className="bg-gray-100 rounded-full px-4 py-2 mt-2 focus:outline-none focus:bg-white" name="confirmPassword" type="password" id="confirmPassword" placeholder="Confirm Password" onChange={handleChange} value={userData.confirmPassword} />
          <button type="submit" className="bg-green text-white font-semibold py-2 px-8 rounded-full mt-4 mt-26 sm:text-2xl" id="signupButton">SIGN UP</button>
          {userStatus.created && <h2 className="w-full h-full flex justify-center items-center bg-white rounded-full">{userStatus.message}</h2>}
          {error && <h2 className="w-full h-full flex justify-center items-center bg-red-400 rounded-full">{error}</h2>}
          {!userStatus.created && <h2 className="w-full h-full flex justify-center items-center bg-red-400 rounded-full">{userStatus.message}</h2>}
        </form>
        <div className="absolute top-0 left-5 sm:left-20 flex gap-4">
          <Link to="/">
            <button type="button" className="bg-black bg-opacity-30 text-slate-300 py-2 px-6 mt-4 rounded-full hover:bg-white hover:text-black">HOME</button>
          </Link>
        </div>
        <div className="absolute top-0 right-5 sm:right-20 flex gap-4">
          <Link to="/login">
            <button type="button" className="bg-black bg-opacity-30 text-slate-300 py-2 px-6 mt-4 rounded-full hover:bg-white hover:text-black">LOGIN</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
