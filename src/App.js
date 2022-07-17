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
import { CreateExercise } from './components/Exercises/CreateExercise';
import { ExerciseDetails } from './components/Exercises/ExerciseDetails';
import { useLocalStorage } from './hooks/useLocalStorage';
import { CyclesHierarchy } from './components/Periodization/CyclesHierarchy';
import { Activities } from './components/Activities/Activities';
import { CreateActivity } from './components/Activities/CreateActivity';
import { ActivityDetails } from './components/Activities/ActivityDetails';

function App() {

  const [accessToken, setAccessToken] = useLocalStorage('userToken',{accessToken:''})

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
            {/* Activities */}
            <Route path='/activities/' element={<Activities />} />
            <Route path='/create-activity/' element={<CreateActivity />} />
            <Route path='/activity-details/' element={<ActivityDetails />} />
            {/* Exercises */}
            <Route path='/exercises/' element={<Exercises />} />
            <Route path='/create-exercise/' element={<CreateExercise />} />
            <Route path='/exercise-details/' element={<ExerciseDetails />} />
            {/* Periodization */}
            <Route path='/periodization/' element={<CyclesHierarchy />} />




          </Routes>
          <Footer />
      </div>  
    </div>
    </AuthContext.Provider>
  );
}

export default App;
