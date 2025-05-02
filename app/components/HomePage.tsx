import React from 'react'
import Hero from './Hero'
import HowWeWork from './HowWeWork'
import Services from './Service'
import Portfolio from './Portfolio'
import WhyPartner from './WhyPartner'
import CTA from './CTA'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Services />
      <HowWeWork/>
      <Portfolio />
      <WhyPartner />
      <CTA />


      
    </div>
  )
}

export default Home
