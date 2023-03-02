import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cars from './components/pages/Cars';
import NewCar from './components/NewCar/NewCar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/new-car" element={<NewCar />} />
      </Routes>
    </div>
  );
}

export default App;
