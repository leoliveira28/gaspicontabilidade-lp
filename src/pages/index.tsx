import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Hero from './components/Hero'
import Features from './components/Features'
import ChoseUs from './components/ChoseUs'
import Testimonials from './components/Testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Features />

      <ChoseUs />
      <Testimonials />

    </Box>
  )
}

export default Home
