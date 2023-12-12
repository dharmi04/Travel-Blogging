import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from "./Pages/login";
// import Signup from "./Pages/signup";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AddPost from './Pages/AddPost';
import Homepage from './Pages/Homepage';
import ProfilePage from './ProfilePage';
import BlogList from './components/BlogList';
import Home from './Pages/Home';
import FullBlog from './components/FullBlog';
// import Places from './Pages/Places';
import WorldMap from './Pages/WorldMap';
import PhotoGallery from './Pages/PhotoGallery';

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
          <Route path="/blog/:id" element={<FullBlog />} />
          {/* <Route path="/places" element={<Places />} /> */}
          <Route path="/worldmap" element={<WorldMap />} />
          <Route path="/photogallery" element={<PhotoGallery />} />

        </Routes>
      </Router>

    </>
  )
}

export default App
