import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Pages/login"
import Signup from "./Pages/signup"
import AddPost from './Pages/AddPost';
import Homepage from './Pages/Homepage';
import ProfilePage from './ProfilePage';
import BlogList from './components/BlogList';
import Home from './Pages/Home';

function App() {

  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/addblog" element={<AddPost />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path="/allblog" element={<BlogList />} />
          <Route path="/home" element={<Home />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
