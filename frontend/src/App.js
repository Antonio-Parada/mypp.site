import React from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import UploadMedia from './components/UploadMedia';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>AV Professionals Hub</h1>
        <p>Your platform to showcase and manage your media work.</p>
      </header>
      <nav className="main-nav">
        <a href="#portfolio">Portfolio</a>
        <a href="#upload">Upload Media</a>
      </nav>
      <main>
        <Portfolio />
        <UploadMedia />
      </main>
      <footer>
        <p>&copy; 2025 AV Professionals Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
