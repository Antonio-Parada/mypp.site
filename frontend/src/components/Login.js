import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google'; // Import Google OAuth components
import './Login.css';

const Login = () => {

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
