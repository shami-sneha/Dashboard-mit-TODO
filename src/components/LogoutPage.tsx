// LogoutPage.tsx
import React from 'react';
import { useDispatch } from 'react-redux';


const LogoutPage: React.FC = () => {
  const dispatch = useDispatch();

  

  return (
    <div>
      <h1>Logout Page</h1>
      <p>Are you sure you want to logout?</p>
      <button>Logout</button>
    </div>
  );
};

export default LogoutPage;
