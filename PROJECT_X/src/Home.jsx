import React, { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import { useGlobalContext } from './Context'

const Home = () => {
  const {updateHome} = useGlobalContext()
  useEffect(() => updateHome(), [])
  return (
    <>
      <HeroSection />
    </>
  )
}

export default Home
