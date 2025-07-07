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
            onSuccess={async credentialResponse => {
              console.log('Google credential received:', credentialResponse);
              // Simulate sending credential to backend
              try {
                const response = await fetch('/api/auth/google-auth', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ token: credentialResponse.credential }),
                });

                if (response.ok) {
                  const data = await response.json();
                  console.log('Backend response:', data);
                  // Assuming backend returns user data or a success message
                  login({ token: credentialResponse.credential, ...data }); // Pass user data to context
                  navigate('/'); // Redirect to home on successful Google login
                } else {
                  console.error('Backend authentication failed:', response.statusText);
                  // Handle error, e.g., show a message to the user
                }
              } catch (error) {
                console.error('Error during backend communication:', error);
                // Handle network errors
              }
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
