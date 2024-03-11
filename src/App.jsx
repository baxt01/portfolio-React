import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Home from './components/Home.jsx'
import Header from './components/Header.jsx'
import './App.css'
import ProjectGallery from './components/pages/ProjectGallery.jsx'
import Project from './components/pages/Project.jsx'
import Contact from './components/pages/Contact.jsx'

export default function App() {

  return (
    <>
    <Header />    
    <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/pages/projectgallery" element={<ProjectGallery />} />
            <Route path="/pages/project" element={<Project />} />
            <Route path="/pages/contact" element={<Contact />} />
        </Routes>
    </>
  )
}
