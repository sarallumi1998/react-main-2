// Login.js
import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation
    if (!username || !password) {
      alert('All fields are required');
      return;
    } else {
      alert('Login Successfully');
    }
  };

  return (
    <div className="container-1">
    <div className="container">
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Valid Username' />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Valid Password' />
       </div>
     
       <button onClick={handleLogin}>Login</button>
      
    </div>
    </div>
  );
};

export default Login;
