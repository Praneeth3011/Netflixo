import React from 'react'
import "./App.css"
import HomePage from "./home/HomePage"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import SinglePage from "./components/watch/SinglePage"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={HomePage} />
          <Route path='/singlepage/:id' element={<SinglePage/>} exact />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App