import React from 'react'
import {Link} from "react-router-dom"
import BlogList from '../components/BlogList'

const Homepage = () => {
  return (
    <div>
      <h3 className='text-black font-5xl font-bold'>
        HOME PAGE 
      </h3>
        <Link to="/addblog">
          ADD BLOG
        </Link>
        <BlogList />
    </div>
  )
}

export default Homepage
