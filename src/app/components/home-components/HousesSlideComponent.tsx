import { pacificoFont } from '@/app/fonts/fontsConfig';
import { motion } from "motion/react"
import Marquee from 'react-fast-marquee';
import { animateBlurIn } from '@/app/animation/animationVariants';

export const HousesSlideComponent = () => {
    const houseTypes= [
        "Unparalleled Construction", "Finishing","Furnishing Services", "Interior Aesthetics", 
        "Timeless Elegance", "Flawless Detailing", "Exquisite Touches", "Structural Brilliance", 
        "Luxurious Refinement", "Custom Furniture Design", "Elegant Decor Solutions", 
        "Complete Home Styling", "Sustainable Designs", "Contemporary Furnishings", "Architectural Excellence"
    ];


  return (
    <Marquee        
        className='h-full w-full lg:-my-16 -my-6'>
        {
            houseTypes.map((item, index) => {
                return (
                    <motion.p
                    viewport={{once: true}} 
                        key={`inspirationalKey${index}`} 
                        variants={animateBlurIn}
                        initial={"offscreen"}
                        whileInView= {"onscreen"}
                        className={`${pacificoFont.className} min-w-[260px] text-center text-lg text-gray-800 tracking-wider`}>
                        
                        {item}
                    </motion.p>
                )
            })
        }
    </Marquee>
  )
}
