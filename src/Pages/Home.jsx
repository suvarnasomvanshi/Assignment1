import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../components/About';
import CardGridImageSection from "../components/CardGridImageSection"
import HomeSection from '../components/HomeSection';

const Home = () => {
  return (
    <div>
         <Navbar/>
         <HomeSection/>
         <About/>
         <CardGridImageSection/>
         <Footer/>
    </div>
  )
}

export default Home
