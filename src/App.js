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

function App() {

  const onLogin = (email) => {
    return true
    // setUserInfo({
    //     isAuthenticated: true,
    //     email: email,
    // })
  }

  const onRegister = (email, password) => {
    return true
  }

  return (
    <div>
      <SideBar />
      <div className="all-content-wrapper">
        <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login onLogin={onLogin}/>} />
            <Route path='/register' element={<Register onRegister={onRegister} />} />
            <Route path='/calendar/' element={<Calendar />} />
            <Route path='/strava-dashboard/' element={<StravaDashboard />} />
            <Route path='/activities/' element={<Calendar />} />
            <Route path='/exercises/' element={<Exercises />} />



          </Routes>
          <Footer />
      </div>  
    </div>
  );
}

export default App;
