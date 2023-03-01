// import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Registration/Login';
import SignUp from './components/Registration/SignUp';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
