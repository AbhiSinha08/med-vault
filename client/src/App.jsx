import './assets/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Patients from './pages/Patients';
import Doctors from './pages/Doctors';
import Labs from './pages/Labs';
import PatientDashboard from './pages/PatientDashboard';
import LabDashboard from './pages/LabDashboard';
import DoctorDashboard from './pages/DoctorDashboard';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/patient" element={ <Patients /> } />
                <Route path="/doctor" element={ <Doctors /> } />
                <Route path="/lab" element={ <Labs /> } />
                <Route path="/patient/:id" element={ <PatientDashboard /> } />
                <Route path="doctor/:id" element={ <DoctorDashboard /> } />
                <Route path="lab/id" element={ <LabDashboard /> } />
            </Routes>
        </div>
    );
}

export default App;
