import { animateGradualSpacing, animateFadeUp } from '@/app/animation/animationVariants'
import { IProjectUpClose } from '@/app/interfaces/ITypeData'
import { motion } from 'motion/react'
import React from 'react'

export const ProjectsUpCloseComponent: React.FC<IProjectUpClose> = ({ picture }) => {
    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>

            <div className='flex flex-wrap'>
                {
                    "Project up close".split("").map((char, index) =>
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



            <div className='w-full grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 '>
                {
                    picture.map((item, index) =>
                        <motion.div
                    viewport={{once: true}}
                            key={`projectUpClose${index}`}
                            variants={animateFadeUp}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}

                            className='h-[350px] w-full bg-gray-300 shadow-md overflow-hidden'>

                            <img alt='project picture' src={item} className='flex w-full h-full object-cover' />
                        </motion.div>
                    )
                }
            </div>

        </div>
    )
}
