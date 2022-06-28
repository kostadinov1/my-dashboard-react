import { AuthContext } from './contexts/AuthContext';
import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Authenticate/Login/Login';
import { Register } from './components/Authenticate/Register/Register'
import { Calendar } from './components/Calendar/Calendar';
import { Exercises } from './components/Exercises/Exercises';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';
import { StravaDashboard } from './components/StravaDashboard/StravaDashboard';
import { useState } from 'react';

function App() {

  const [accessToken, setAccessToken] = useState({accessToken:''})

  const onLogin = (token) => {
    setAccessToken(token);

  }

  const onLogOut = (token) => {
    setAccessToken(token);

  }

  return (
    <AuthContext.Provider value={{ accessToken, onLogin, onLogOut}} >
    <div>
      <SideBar />
      <div className="all-content-wrapper">
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/calendar/' element={<Calendar />} />
            <Route path='/strava-dashboard/' element={<StravaDashboard />} />
            <Route path='/activities/' element={<Calendar />} />
            <Route path='/exercises/' element={<Exercises />} />

          </Routes>
          <Footer />
      </div>  
    </div>
    </AuthContext.Provider>
  );
}

export default App;
