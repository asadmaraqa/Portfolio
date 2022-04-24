import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import BlogPage from './pages/blogPage/BlogPage';
import BlogsPage from './pages/blogsPage/BlogsPage';

const App:React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="blogs/" element={<BlogsPage />} />
        <Route path="blog/:id" element={<BlogPage />} />
      </Routes>
      
      </>
  )
}

export default App
