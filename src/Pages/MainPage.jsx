import React from 'react'
import Client from '../Components/Client/Client'
import About from '../Components/About/About'
import Design from '../Components/Design/Design'
import Navbar from '../Components/Navbar/Navbar'

const MainPage = () => {
  return (
    <>
    <Navbar/>
    <About />
    <Client />
    <Design />
    </>
  )
}

export default MainPage