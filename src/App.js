import { Route, Routes, useLocation } from 'react-router-dom';
import CarPage from './Pages/CarPage';
import Login from './Components/Login/Login';
import CarDetails from './Components/Car/CarDetails';
import SideBar from './Components/Layout/SideBar';
import AddForm from './Components/Car/AddForm';

function App() {
  const location = useLocation();
  const showSideBar = location.pathname !== '/';

  return (
    <div className="grid min-h-screen grid-cols-[auto_1fr] justify-center gap-4 overflow-hidden">
      <div>{showSideBar && <SideBar />}</div>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
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
