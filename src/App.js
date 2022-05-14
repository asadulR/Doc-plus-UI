import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/Pages/About/About';
import Appointment from './Components/Pages/Appointment/Appointment';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import MyAppointments from './Components/Pages/Dashboard/MyAppointments';
import MyReview from './Components/Pages/Dashboard/MyReview';
import Header from './Components/Pages/Header/Header';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Signup from './Components/Pages/Login/Signup';
import RequireAuth from './Components/Shared/Auth/RequireAuth';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='myreview' element={<MyReview/>}></Route>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
