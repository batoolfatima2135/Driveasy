import { Route, Routes, useLocation } from 'react-router-dom';
import { bool } from 'prop-types';
import Login from './Components/Login/Login';
import CarDetails from './Components/Car/CarDetails';
import SideBar from './Components/Layout/SideBar';
import AddForm from './Components/Car/AddForm';
import ReservationForm from './Components/Reservation/ReservationForm';
import Car from './Components/Car/Car';
import Thankyou from './Pages/Thankyou';
import Sorry from './Pages/Sorry';

function App() {
  const location = useLocation();
  const showSideBar = location.pathname !== '/';
  const reservationForm = location.pathname === '/reserve';

  return (
    <div className="grid justify-center align-middle grid-cols-7 xl:grid-cols-9 lg:grid-cols-10 h-screen">
      {showSideBar && <div className={`col-span-1 xl:col-span-2 lg:col-span-3 ${reservationForm ? 'bg-custom-green bg-opacity-95' : ''}`}><SideBar /></div> }
      <div className={showSideBar ? 'col-span-6 xl:col-span-7 lg:col-span-7' : 'col-span-7 xl:col-span-9 lg:col-span-10'}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/thankyou/:status" element={<Thankyou />} />
          <Route path="/sorry/:status" element={<Sorry />} />
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
