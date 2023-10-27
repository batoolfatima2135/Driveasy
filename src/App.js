import { Route, Routes } from 'react-router-dom';
import Car from './Components/Car/Car';
import Login from './Components/Login/Login';
import CarDetails from './Components/Car/CarDetails';
import SideBar from './Components/Layout/SideBar';

function App() {
  return (
    <div className="flex gap-6 overflow-auto">
      <SideBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cars" element={<Car />} />
        <Route path="/car/details" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
