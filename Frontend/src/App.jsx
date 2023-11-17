import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Pages/login"
import Signup from "./Pages/signup"
import AddPost from './Pages/AddPost';
import Homepage from './Pages/Homepage';
import ProfilePage from './ProfilePage';


function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Signup />} />
          <Route path="/addblog" element={<AddPost />} />
          <Route path="/profilepage" element={<ProfilePage />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
