import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Hero from './components/Hero'
import Features from './components/Features'
import ChoseUs from './components/ChoseUs'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <Features />
      <ChoseUs />
    </Box>
  )
}

export default Home
