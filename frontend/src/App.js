import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Import useAuth
import './App.css';
import './components/HomePage.css'; // Import HomePage specific styles
import HomePage from './components/HomePage';
import Portfolio from './components/Portfolio';
import UploadMedia from './components/UploadMedia';
import Login from './components/Login'; // Import Login component
import Signup from './components/Signup'; // Import Signup component
import GridTemplate from './components/GridTemplate';
import CarouselTemplate from './components/CarouselTemplate';
import ListTemplate from './components/ListTemplate';

function App() {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Router>
      <div className="App">
        <nav className="main-nav">
          <Link to="/">Home</Link>
          {isLoggedIn ? (
            <>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/upload">Upload Media</Link>
              <button onClick={logout} className="nav-button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Sign Up</Link>
            </>
          )}
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/upload" element={<UploadMedia />} />
            <Route path="/login" element={<Login />} /> {/* Add Login route */}
            <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
            <Route path="/template/grid/:flavorId" element={<GridTemplate />} />
            <Route path="/template/carousel/:flavorId" element={<CarouselTemplate />} />
            <Route path="/template/list/:flavorId" element={<ListTemplate />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2025 AV Professionals Hub. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
