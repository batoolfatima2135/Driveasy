import { Route, Routes, useLocation } from 'react-router-dom';
import Car from './Components/Car/Car';
import Login from './Components/Login/Login';
import CarDetails from './Components/Car/CarDetails';
import SideBar from './Components/Layout/SideBar';
import AddForm from './Components/Car/AddForm';

function App() {
  const location = useLocation();

  const showSideBar = location.pathname !== '/';

  return (
    <div
      className={`${
        showSideBar ? 'flex gap-6 overflow-auto' : 'gap-6 overflow-auto'
      }`}
    >
      {showSideBar && <SideBar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cars" element={<Car />} />
        <Route path="/car/details" element={<CarDetails />} />
        <Route path="/car/add" element={<AddForm />} />
      </Routes>
    </div>
  );
}

export default App;
