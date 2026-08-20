import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About'; 
import Services from './pages/Services';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Pricing from './pages/Pricing';
import AuditReports from './pages/AuditReports';
import PentestReports from './pages/PentestReports';
import Dashboard from './pages/Dashboard'; // <-- Import the new Dashboard

export default function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-cyan-500 selection:text-black flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-6 sm:px-12 w-full flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} /> 
            <Route path="/audit-reports" element={<AuditReports />} />
            <Route path="/pentest-reports" element={<PentestReports />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* <-- Add Route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}