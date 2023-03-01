const Home = () => (
  <div className="home flex flex-col">
    <div className="absolute bg-center bg-cover bg-home h-full w-full bg-orange bg-blend-multiply" />
    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center">
      <div className="flex flex-col my-auto justify-center items-center p-4 bg-black bg-opacity-20 rounded-lg">
        <h1 className="tracking-wider text-3xl text-white font-bold mb-4 sm:text-5xl sm:tracking-widest">WHEELS AND DEALS</h1>
        <p className="tracking-wide font-ibm text-md text-slate-300 mb-12 sm:text-2xl">Explore elite luxury and class</p>
        <button type="button" className="bg-green text-white font-semibold py-2 px-8 rounded-full mt-4 mt-26 sm:text-2xl">
          Explore
        </button>
      </div>
    </div>
    <div className="absolute top-0 self-center flex justify-between w-[95%] mt-8 text-sm font-semibold sm:text-xl">
      <button type="button" className="bg-black bg-opacity-30 text-slate-300 py-2 px-6 rounded-full hover:bg-white hover:text-black">LOGIN</button>
      <button type="button" className="bg-black bg-opacity-30 text-slate-300 py-2 px-6 rounded-full hover:bg-white hover:text-black">SIGN UP</button>
    </div>
  </div>
);

export default Home;
