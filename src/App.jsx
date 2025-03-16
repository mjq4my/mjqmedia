import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Intro from './components/intro/Intro'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Highlight from './components/highlight/Highlight'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Blog from './components/blog/Blog'

const Home = () => {
  return (
    <>
        <Intro />
        <Nav />
        <About />
        <Experience />
        <Highlight />
        <Contact />
        <Footer />
    </>
  )
}

const App = () => {
  return (
    <Router>
      <Header />  {/* This ensures the navigation header is always present */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  )
}

export default App