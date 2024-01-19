
import React, { useState } from 'react';
import './SignUp.css'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
   // Basic validation
   if (!username || !email || !password || !confirmPassword) {
    alert('All fields are required');
    return;
  }
  else{
    alert('Account Created Successfully');
  }

  };

  return (
    <div className="container-1">
    <div className="container">
      <h2 className="custom-heading">Sign Up</h2> 
      <div className="form-group"> 
        <label htmlFor="name" className="label-style">Username:</label> 
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Your Valid UserName' className="input-style" />
      </div>
      <div className="form-group"> 
        <label htmlFor="email" className="label-style">Email:</label> 
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Valid Email' className="input-style" /> 
      </div>
      <div className="form-group"> 
        <label htmlFor="password" className="label-style">Password:</label> 
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter Your Valid Password'className="input-style" /> 
      </div>
      <div className="form-group"> 
        <label htmlFor="confirmPassword" className="label-style">Confirm Password:</label>  
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Conform Password' className="input-style" /> 
      </div>
      <button onClick={handleSignUp} className="btn-style">Create Account</button> 
    </div>
    </div>
  );
};

export default SignUp;
