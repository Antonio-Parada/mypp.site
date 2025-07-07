import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // Reusing Login.css for common styles

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Backend Annotation:
    // This is where a POST request to your backend's signup endpoint would be made.
    // Example: fetch('/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
    // .then(response => response.json())
    // .then(data => { if (data.success) { /* Redirect to login or dashboard */ } else { /* Show error */ } })
    // .catch(error => console.error('Signup error:', error));
    alert(`Signup attempt with Email: ${email} and Password: ${password}`);
    console.log('Signup attempt:', { email, password });
  };

  return (
    <div className="auth-container">
      <h2>Create Your Portfolio Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
};

export default Signup;
