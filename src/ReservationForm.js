import { React, useState} from 'react'

const ReservationForm = (onSubmit) => {
  
  const [model, setModel] = useState('');
  const [country, setCountry] = useState('');
  // const [city, setCity] = useState("");
  // const [date, setDate] = useState("");
  const [idCities, setIdCities] = useState(-1);

  const countryOptions = [
    {
      country: 'United States',
      cities: ["New York", "Detroit", "Los Angeles", "Miami"]
    },
    {
      country: 'Mexico',
      cities: ["Mexico City", "Monterrey", "Guadalajara"]
    },
    {
      country: 'Ecuador',
      cities: ["Quito", "Guayaquil", "Cuenca"]
    },
    {
      country: 'Egypt',
      cities: ["Cairo", "Alexandria", "Luxor"]
    },
  ]
  // const countryOptions = [
  //   { value: '', text: 'COUNTRY' },
  //   { value: 'unitedStates', text: 'United States' },
  //   { value: 'mexico', text: 'Mexico' },
  //   { value: 'ecuador', text: 'Ecuador' },
  //   { value: 'egypt', text: 'Egypt' },
  // ];

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(model, country);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <input
            className="placeholder:text-white border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2"
            type="text"
            value={model}
            placeholder="MODEL"
            onChange={(e) => setModel(e.target.value)}
          />

          {/* SELECT ELEMENT FOR COUNTRY */}
          <select
            className="placeholder:text-white border-white border-2 bg-lime-500 rounded-full px-4 py-2 mt-2"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value={-1}>COUNTRY</option>
            {countryOptions.map((countryItem, i) => (
              <option key={i} value={countryItem.country} id={i}>
                {countryItem.country}
              </option>
            ))}
          </select>

          <button className="text-lime-500 font-bold border-white border-2 bg-white rounded-full px-4 py-2 mt-2" type="submit">
            BOOK NOW
          </button>
        </form>
    </div>
  )
}

export default ReservationForm
