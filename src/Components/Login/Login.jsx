import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../Redux/Login/loginSlice';

export default function Login() {
  const [username, setUsername] = useState('');

  const status = useSelector((state) => state.login.status);
  const message = useSelector((state) => state.login.message);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(username));
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  if (status === 'created') {
    navigate('/cars');
  }

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'url("https://purepng.com/public/uploads/large/purepng.com-suzukisuzukisuzuki-carsuzuki-automobilessuzuki-carsvehicles-1701527677135nhb1t.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-screen flex items-center justify-center  bg-custom-green bg-opacity-95 w-full">
        <div className="lg:w-1/3 w-4/5">
          <h2 className="text-2xl w-3/4  font-bold text-center mx-auto text-white tracking-widest  mb-4 pb-4 font-sans border-b">LOGIN </h2>
          <p className="text-center text-white m-4">Welcome to the Driveasy, to Continue to the website kindly enter a unique username.</p>
          {status === 'not unique'
           && <p className="text-center text-red-600 m-1">{message}</p>}
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={handleUsernameChange}
              className="outline-none w-full border rounded-full py-3 px-5"
              placeholder="Enter Username"
            />
          </div>
          <div className="flex justify-center ">
            <button type="submit" onClick={handleSubmit} className="bg-white m-4 font-medium text-custom-green w-1/3 py-3 rounded-full hover:bg-custom-green-light hover:text-white focus:outline-none focus:ring focus:ring-white">
              LOGIN
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
