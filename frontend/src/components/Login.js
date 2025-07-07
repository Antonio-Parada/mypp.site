import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../context/AuthContext'; // Import useAuth
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from AuthContext

  return (
    <GoogleOAuthProvider clientId="717968394179-i9oi4uer5aalltdj3p5ebmb8rt5jj066.apps.googleusercontent.com">
      <div className="auth-container">
        <h2>Login to Your Portfolio</h2>
        <div className="google-login-container">
          <p>Sign in with:</p>
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
              // Backend Annotation:
              // Send credentialResponse.credential (ID token) to your backend for verification and user login.
              login({ token: credentialResponse.credential }); // Call login from context
              navigate('/'); // Redirect to home on successful Google login
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
