
import Content from '../app/component/Content'
import Hero from '../app/component/Hero'
import React from 'react'
import Skills from '../app/component/Skills'

import AboutMe from './component/AboutMe'
import ThankYouSection from './component/ThankYou'




const page = () => {
  return (
    <div>
      <Hero/>
      <Content/>
      <Skills/>
      <AboutMe/>
    
      <ThankYouSection/>
     

    </div>
  )
}

export default page
