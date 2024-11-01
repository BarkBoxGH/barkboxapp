import AboutLayout from "../layouts/AboutLayout"
import dogcessories from "../assets/dogcessories.jpg"

const AboutDogs = () => {
  return (
    <AboutLayout
    h1Text= "Dogs and Dog Accessories"
    imageSrc={dogcessories}
    h3Text="Shop for Dogs and Dog-cessories"
    pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci mi, porta a nisl ut, cursus gravida metus."
    buttonText="Shop Now"
    />
  
  )
}

export default AboutDogs