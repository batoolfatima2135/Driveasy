import { Route, Routes } from 'react-router-dom';
import Car from './Components/Car/Car';
import Login from './Components/Login/Login';
import SideBar from './Components/Layout/SideBar';

function App() {
  return (
    <div className="flex gap-6 overflow-auto">
      <SideBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cars" element={<Car />} />
      </Routes>
    </div>
  );
}

export default App;
