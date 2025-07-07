import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
  return (
    <Router>
      <div className="App">
        <nav className="main-nav">
          <Link to="/">Home</Link>
          <Link to="/upload">Upload Media</Link>
          <Link to="/login">Login</Link> {/* Add Login link */}
          <Link to="/signup">Sign Up</Link> {/* Add Sign Up link */}
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/upload" element={<UploadMedia />} />
            <Route path="/login" element={<Login />} /> {/* Add Login route */}
            <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
            <Route path="/template/grid" element={<GridTemplate />} />
            <Route path="/template/carousel" element={<CarouselTemplate />} />
            <Route path="/template/list" element={<ListTemplate />} />
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
