import React from 'react'
import BlogsPage from './pages/BlogsPage'
import Home from './pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import BlogPage from './pages/blogPage/BlogPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="blogs/" element={<BlogsPage />} />
        <Route path=":id" element={<BlogPage />} />
      </Routes>
      
      </>
  )
}

export default App
