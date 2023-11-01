import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './Components/Login/Login';
import CarDetails from './Components/Car/CarDetails';
import SideBar from './Components/Layout/SideBar';
import AddForm from './Components/Car/AddForm';
import ReservationForm from './Components/Reservation/ReservationForm';

function App() {
  const location = useLocation();
  const showSideBar = location.pathname !== '/';

  return (
    <div className="grid justify-center align-middle grid-cols-7 xl:grid-cols-9 lg:grid-cols-10 h-screen">
      {showSideBar && <div className="col-span-1 xl:col-span-2 lg:col-span-3"><SideBar /></div> }
      <div className={showSideBar ? 'col-span-6 xl:col-span-7 lg:col-span-7' : 'col-span-7 xl:col-span-9 lg:col-span-10'}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cars" element={<Car />} />
          <Route path="/reserve/:id?" element={<ReservationForm />} />
          <Route path="/car/details/:id" element={<CarDetails />} />
          <Route path="/car/add" element={<AddForm />} />
        </Routes>
      </div>
    </div>
  );
}

// export default App;

export default App;
