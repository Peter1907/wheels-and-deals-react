import Car from '../Car';
import MobileNavigation from '../MobileNavigation';
import Navigation from '../Navigation';

const Cars = () => {
  const data = [
    {
      id: 1,
      name: 'BMW',
      description: 'BMW is a German automobile, motorcycle and engine manufacturing company founded in 1916. It is one of the best-selling luxury vehicle brands in the world, as of 2019, with 2,279,503 vehicles sold globally.',
      photo: './cars/bmw.png',
      price: 100000,
    },
    {
      id: 2,
      name: 'Mercedes',
      description: 'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and lorries. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz.',
      photo: './cars/mercedes.png',
      price: 200000,
    },
    {
      id: 3,
      name: 'Bugatti',
      description: 'Bugatti is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Bugatti oversees worldwide operations from its headquarters in Ingolstadt, Bavaria, Germany.',
      photo: './cars/bugatti.png',
      price: 300000,
    },
    {
      id: 4,
      name: 'Lamborghini',
      description: 'Lamborghini is an Italian brand and manufacturer of luxury sports cars and SUVs based in SantAgata Bolognese. The company is owned by the Volkswagen Group through its subsidiary Audi.',
      photo: './cars/lambo.png',
      price: 400000,
    },
  ];

  const width = window.innerWidth;
  return (
    <div className="cars-page pt-8">
      <MobileNavigation />
      <Navigation />
      <div className="lg:ml-[250px] main-section flex flex-col relative justify-center">
        <h1 className="text-3xl text-gray-800 tracking-wider font-bold text-center mt-6 md:text-5xl md:tracking-widest md:mt-12">LATEST MODELS</h1>
        <h4 className="text-sm text-gray-700 font-ibm font-light text-center mt-2 md:text-xl md:tracking-widest md:mt-4">We have the best cars in the world</h4>
        <hr className="w-24 self-center m-4 border-t-black md:w-52 md:m-8" />
        <div className="max-w-min w-[100%] self-center">
          <div className={`cars-container m-2 px-4 py-4 flex gap-8 w-[${width}px] overflow-scroll md:mt-8`}>
            {data.map((car) => (
              <Car data={car} key={data.id} />
            ))}
          </div>
          <div className="navigation text-white text-4xl">
            <button
              type="button"
              className="absolute left-0 top-1/2 mt-8 bg-green rounded-r-2xl py-1 px-4 z-20"
              onClick={() => { document.querySelector('.cars-container').scrollLeft -= 330; }}
            >
              &#8656;
            </button>
            <button
              type="button"
              className="absolute right-0 top-1/2 mt-8 bg-green rounded-l-2xl py-1 px-4 z-20"
              onClick={() => { document.querySelector('.cars-container').scrollLeft += 330; }}
            >
              &#8658;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
