import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from './pages/LogIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import DashBoard from './pages/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashBoard />} />
    </Routes>
  )
}

export default App;
