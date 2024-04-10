import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ButtonBar from "./components/ButtonAppBar"
import Sidebar from './components/Sidebar'


import Team from './Pages/Team';
import Tasks from './Pages/Tasks';
import Chats from './Pages/Chats';
import Analytics from './Pages/Analytics';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import DailyTask from './Pages/DailyTask';
import LogoutPage from './components/LogoutPage';
import { useSelector } from 'react-redux';

import { Navigate } from 'react-router';
const Login: React.FC = () => <div>Home Page</div>;


const App: React.FunctionComponent = () => {
 
  return (
    <>
      <Router>
        <ButtonBar/>
      {/* <Sidebar/> */}
        <Routes>
          
          {/* <Route path='/' element={<DailyTask />} /> */}
          <Route path='/daily' element={<DailyTask/>} />
          <Route path='/team' element={<Team />} />            
          <Route path='/tasks' element={<Tasks />} />    
          <Route path='/chats' element={<Chats />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registerpage" element={<RegisterPage/>} />
          <Route path="/login" element={<LoginPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      
        </Routes>
      </Router> 
    </>
  )
}

export default App
