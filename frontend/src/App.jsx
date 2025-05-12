import './App.css';
import { HashRouter as Router } from "react-router-dom";
import { useEffect, useState } from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import AnimatedRoutes from './components/AnimatedRoutes'; // ✅ Import animated routes
import ScrollToTop from './ScrollToTop'; // ✅ Import ScrollToTop

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop /> {/* ✅ Ensures scroll resets on navigation */}
      <div className='bg-gray-100'>
        <Navbar />
        <AnimatedRoutes />
        {isVisible && (
          <button
            className="fixed bottom-5 right-5 bg-blue-500 text-white px-4 py-2 rounded shadow"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <KeyboardArrowUp />
          </button>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
