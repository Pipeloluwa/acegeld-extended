import { animateGradualSpacing } from '@/app/animation/animationVariants'
import { ICardBackground } from '@/app/interfaces/ICardBackground'
import { motion } from 'motion/react'
import React from 'react'


export const CardBackgroundComponent: React.FC<ICardBackground> = ({ imagePath, title }) => {
  return (
    <div className='h-[500px] w-full relative bg-gray-900 overflow-hidden'>

      <img
            src={imagePath} 
            className='object-cover absolute left-0 right-0 top-0 bottom-0 w-full h-full' />

      <div className='absolute left-0 right-0 top-0 bottom-0 bg-black/30' />


      <section className='w-[75%] text-center h-full mx-auto z-10  absolute left-0 right-0 top-0 bottom-0 flex flex-col gap-y-8 items-center justify-center '>
        <div className='flex flex-wrap'>
          {
            title.split("").map((char, index) =>
              <motion.p
                    viewport={{once: true}}
                key={`Welcome to${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                animate={"onscreen"}
                custom={index}

                style={{ whiteSpace: "pre-wrap" }}
                className='xl:text-6xl md:text-5xl text-3xl text-shadow text-white  tracking-widest font-extrabold'>

                {char}
              </motion.p>
            )
          }
        </div>

      </section>

    </div>
  )
}
