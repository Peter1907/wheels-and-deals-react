// import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Cars from './components/pages/Cars';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
