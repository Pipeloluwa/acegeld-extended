import { animateFadeUp, animateFromLeft, animateFromRight, animateGradualSpacing } from '@/app/animation/animationVariants';
import { IProjectsHouseType } from '@/app/interfaces/ITypeData'
import { motion } from 'motion/react'
import React from 'react'

export const HouseSameTypeComponent: React.FC<IProjectsHouseType> = ({ title, projectsHouseType }) => {
    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>


            <div className='flex flex-wrap'>
                {
                    `Houses with the same ${title}`.split("").map((char, index) =>
                        <motion.p
                    viewport={{once: true}}
                            key={`Welcome to${index}`}
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


            <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10'>

                {
                    projectsHouseType.map((item, index) =>
                        <motion.div
                    viewport={{once: true}}
                            key={`houseSameType${index}`}
                            variants={index % 2 === 0 ? animateFromLeft : animateFromRight}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}

                            className='flex flex-col gap-y-2'>

                            <div className='h-[350px] w-full bg-gray-300 shadow-md shadow-gray-500 rounded-2xl overflow-hidden'>
                                <img alt='house type picture' src={item.picture} className='flex w-full h-full object-cover' />
                            </div>

                            <motion.h3
                    viewport={{once: true}}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}

                                className='mt-2 font-bold'>
                                {item.title}
                            </motion.h3>

                            <motion.p
                    viewport={{once: true}}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}

                                className='text-sm'>
                                {item.description}
                            </motion.p>
                        </motion.div>
                    )
                }


            </div>

        </div>
    )
}
