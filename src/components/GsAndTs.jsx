import React from 'react'
import AboutLayout from '../layouts/AboutLayout'
import aboutGroomer from "../assets/aboutGroomer.jpg"
const GsAndTs = () => {
  return (
    <AboutLayout
        h1Text="Groomers and Trainers"
        imageSrc={aboutGroomer}
        h3Text="Find qualified trainers and grooming services"
        pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci mi, porta a nisl ut, cursus gravida metus."
        buttonText="Book Now"
    />
  )
}

export default GsAndTs