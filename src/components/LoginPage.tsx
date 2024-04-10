// LoginPage.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const LoginPage: React.FC = () => {
  const dispatch = useDispatch();
 
  
  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Username:
       
      </label>
      <label>
        Password:
        
      </label>
      <button >Login</button>
    </div>
  );
};

export default LoginPage;
