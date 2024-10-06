import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import UserData from './components/UserData'
import Login from './components/Login';

// export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const backendUrl = "http://localhost:4001"

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div>
      {
        token === "" ? (
          <Login setToken={setToken}/>
        ) : (
          <div>
            <Navbar setToken={setToken} />
            <UserData />
          </div>
        )
      }
     
    </div>
  )
}

export default App
