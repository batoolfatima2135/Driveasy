import { Route, Routes, useLocation } from 'react-router-dom';
import CarPage from './Pages/CarPage';
import Login from './Components/Login/Login';
import CarDetails from './Components/Car/CarDetails';
import SideBar from './Components/Layout/SideBar';
import AddForm from './Components/Car/AddForm';
import Thankyou from './Pages/Thankyou';

function App() {
  const location = useLocation();
  const showSideBar = location.pathname !== '/';

  const sidebarStyle = showSideBar ? { width: '25%' } : { width: '0' };
  const contentStyle = showSideBar
    ? { width: '70%', marginLeft: '-1rem' }
    : { width: '100%' };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={sidebarStyle}>{showSideBar && <SideBar />}</div>
      <div style={contentStyle} className="">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/thankyou/:status" element={<Thankyou />} />
          <Route path="/cars" element={<CarPage />} />
          <Route path="/car/details/:id" element={<CarDetails />} />
          <Route path="/car/add" element={<AddForm />} />
        </Routes>
      </div>
    </div>
  );
}

// export default App;

export default App;
