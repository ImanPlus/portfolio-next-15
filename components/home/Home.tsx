import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
    </div>
  )
}

export default Home