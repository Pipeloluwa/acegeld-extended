import { IHouseUpClose } from '@/app/interfaces/ITypeData'
import React from 'react'
import { ThreeDComponent } from './ThreeDComponent'
import { animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'

export const HouseUpCloseComponent: React.FC<IHouseUpClose> = ({ link_3d, picture }) => {
    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>


            <div className='flex flex-wrap'>
                {
                    "The house gallery".split("").map((char, index) =>
                        <motion.p
                    viewport={{once: true}}
                            key={`houseGallery${index}`}
                            variants={animateGradualSpacing}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={index}

                            style={{ whiteSpace: "pre-wrap" }}
                            className='base-color1 text-xl font-bold'>

                            {char}
                        </motion.p>
                    )
                }
            </div>



            <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 '>

                {
                    picture.map((item, index) =>
                        <motion.div
                    viewport={{once: true}}
                            key={`houseUpClose${index}`}
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}

                            className='h-[350px] w-full bg-gray-300 shadow-md overflow-hidden'>

                            <img alt='house type picture' src={item} className='flex w-full h-full object-cover' />
                        </motion.div>
                    )
                }



            </div>



            <ThreeDComponent link_3d={link_3d} />
            

        </div>
    )
}
