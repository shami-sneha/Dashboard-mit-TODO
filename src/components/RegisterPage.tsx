// RegisterPage.tsx
import React, { useState } from 'react';

const RegisterPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Perform API call for registration (replace with your actual API endpoint)
    fetch('https://your-api-url/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful registration (e.g., redirect to login page)
        } else {
          // Handle registration failure (e.g., display an error message)
        }
      })
      .catch((error) => {
        console.error('Error during registration:', error);
      });
  };

  return (
    <div>
      <h1>Register Page</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterPage;
