import { Routes, Route } from 'react-router-dom';
import { Login } from './components/Authenticate/Login/Login';
import { Register } from './components/Authenticate/Register/Register'
import { Calendar } from './components/Calendar/Calendar';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideBar from './components/SideBar/SideBar';

function App() {
  return (
    <div>
      <SideBar />
      <div className="all-content-wrapper">
        <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/calendar' element={<Calendar />} />


          </Routes>
          <Footer />
      </div>  
    </div>
  );
}

export default App;
