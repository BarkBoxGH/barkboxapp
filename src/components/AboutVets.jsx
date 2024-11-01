import AboutLayout from "../layouts/AboutLayout"
import aboutVet from "../assets/aboutVet.jpg"

const AboutVets = () => {
  return (
    <AboutLayout
    h1Text="Veterinarians"
    imageSrc={aboutVet}
    h3Text="Find expert veterinarians near you"
    pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci mi, porta a nisl ut, cursus gravida metus."
    buttonText="Book Now"
    
    
    />
  )
}

export default AboutVets