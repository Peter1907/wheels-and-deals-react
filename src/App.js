import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NewCar from './components/NewCar/NewCar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-car" element={<NewCar />} />
      </Routes>
    </div>
  );
}

export default App;
