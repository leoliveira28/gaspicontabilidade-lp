import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Hero from './components/Hero'
import Features from './components/Features'
import ChoseUs from './components/ChoseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
const Home: NextPage = () => {
  return (
    <Box>
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
