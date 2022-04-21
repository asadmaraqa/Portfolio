import React from 'react'
import BlogsPage from './pages/BlogsPage'
import Home from './pages/Home'
import { Routes, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="blog" element={<BlogsPage />} />
      </Routes>
      
      </>
  )
}

export default App
