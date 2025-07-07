import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Import Google OAuth components
import './Login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // This function is now largely vestigial as we're moving to OAuth only.
    // Any form submission logic here would be for a traditional email/password login.
    console.log('Attempted traditional login (now OAuth only).');
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="auth-container">
        <h2>Login to Your Portfolio</h2>
        <div className="google-login-container">
          <p>Sign in with:</p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              // Backend Annotation:
              // Send credentialResponse.credential (ID token) to your backend for verification and user login.
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
