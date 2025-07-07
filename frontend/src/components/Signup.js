import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import './Login.css'; // Reusing Login.css for common styles

const Signup = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from AuthContext

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
    <GoogleOAuthProvider clientId="717968394179-i9oi4uer5aalltdj3p5ebmb8rt5jj066.apps.googleusercontent.com">
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
        <div className="google-login-container">
          <p>Or sign up with:</p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              // Backend Annotation:
              // Send credentialResponse.credential (ID token) to your backend for verification and user creation/login.
              login({ token: credentialResponse.credential }); // Call login from context
              navigate('/'); // Redirect to home on successful Google signup
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;
