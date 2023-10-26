import { Route, Routes } from 'react-router-dom';
import Car from './Components/Car/Car';
import Login from './Components/Login/Login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cars" element={<Car />} />
      </Routes>
    </div>
  );
}

export default App;
