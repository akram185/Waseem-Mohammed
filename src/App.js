import React from 'react'
import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import Header from './components/Header/Header'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <About />
      <Portfolio />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
