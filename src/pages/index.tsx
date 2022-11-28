import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Hero from './components/Hero'
import Features from './components/Features'
import ChoseUs from './components/ChoseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { ToastContainer } from "react-toastify";
import Navbar from './components/Navbar'

const Home: NextPage = () => {
  
  return (
    <Box>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Box>
      <Features />
      </Box>
      <Box>
      <ChoseUs />
      </Box>
      <Testimonials />
    <Contact />
    </Box>
  )
}

export default Home
