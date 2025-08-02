import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Resume from './Resume/Resume'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services />
      <Resume />
    </div>
  )
}

export default Home