import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cars from './components/pages/Cars';
import NewCar from './components/NewCar/NewCar';
import Details from './components/pages/Details';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/new-car" element={<NewCar />} />
        <Route path="/details/" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
