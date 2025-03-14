"use client";
import Link from 'next/link'
import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlLocationPin } from 'react-icons/sl'
import { projectsBaseData } from '@/app/variables/projectsVariables'
import { rootUrl } from '@/app/variables/sharedVariables'
import { animateGradualSpacing, animateBlurIn, animatePullUp, animateRotateFromLeft, animateFadeUp, animateFromLeft, animateFromRight } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'


export const MoreProjects: React.FC<{ title: string }> = ({ title }) => {

    const [projectHover, setProjectHover] = useState<string>('');

    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>


            <div className='flex flex-wrap'>
                {
                    "More Projects".split("").map((char, index) =>
                        <motion.p
                            viewport={{ once: true }}
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


            <div className='w-full h-full flex flex-col gap-y-16'>
                {
                    Object.entries(projectsBaseData).map(([key, item], index) =>
                        key !== title
                        &&
                        <motion.div
                            viewport={{ once: true }}
                            key={`projectDataComponentSample${index}`}

                            variants={index % 2 === 0 ? animateFromRight : animateFromLeft}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            custom={0}
                        >
                            <div
                                id={`projectDataSampleId${index}`}
                                onMouseEnter={(e) => { return e.currentTarget.id === `projectDataSampleId${index}` && setProjectHover(`projectDataSampleId${index}`); }}
                                onMouseLeave={(e) => { return e.currentTarget.id === `projectDataSampleId${index}` && setProjectHover(''); }}
                                className='w-full lg:h-[600px] h-[400px] relative text-white bg-gray-300 overflow-hidden rounded-3xl shadow-lg shadow-gray-400'>

                                <motion.div
                                    viewport={{ once: true }}
                                    variants={animateBlurIn}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}

                                    className='w-full h-full absolute left-0 right-0 top-0 bottom-0 overflow-hidden'>

                                    <img alt='project picture' src={item.picture} className='flex w-full h-full object-cover' />
                                </motion.div>

                                <div className='w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-black/30' />

                                <div
                                    className={
                                        `${projectHover === `projectDataSampleId${index}` ? "translate-y-0 opacity-100" : "translate-y-[70%] opacity-0"} duration-700 
                                    w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-[#FDCA42]/90 `}
                                />


                                <div
                                    className={
                                        `${projectHover === `projectDataSampleId${index}` ? "translate-y-[40%] text-gray-800" : "translate-y-[100%] text-white"} duration-700 transition-all
                                    absolute left-[5%] right-[5%] top-[10%] bottom-[20%] flex flex-col gap-y-2`}>

                                    <h1 className='font-bold text-lg'>
                                        {
                                            item.title.split("").map((char, index) =>
                                                <motion.span
                                                    viewport={{ once: true }}
                                                    key={`homeprojectTitle${index}`}
                                                    variants={animatePullUp}
                                                    initial={"offscreen"}
                                                    whileInView={"onscreen"}
                                                    custom={index}

                                                    className='font-bold'
                                                >
                                                    {char}
                                                </motion.span>
                                            )
                                        }
                                    </h1>


                                    {/* <motion.div
                    viewport={{once: true}}
                                        variants={animateRotateFromLeft}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={0}

                                        className='flex items-center gap-x-2'>

                                        <SlLocationPin />

                                        <p className='text-sm'>
                                            {item.location}
                                        </p>
                                    </motion.div> */}

                                    {
                                        projectHover === `projectDataSampleId${index}`
                                        &&


                                        <motion.div
                                            viewport={{ once: true }}
                                            variants={animateFadeUp}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            custom={0}
                                        >

                                            <p className='lg:w-[70%] lg:flex hidden w-full text-sm'>
                                                {`${item.description.slice(0, 300)}...`}
                                            </p>

                                            <p className='lg:w-[70%] lg:hidden flex w-full text-sm'>
                                                {`${item.description.slice(0, 150)}...`}
                                            </p>
                                        </motion.div>
                                    }

                                </div>


                                <Link href={`${rootUrl}/projects/${key}`} className={`${projectHover === `projectDataSampleId${index}` ? "text-gray-800" : "text-white"} transition-colors duration-700 min-w-[7%] absolute right-[5%] bottom-[10%] flex items-center gap-x-2 font-bold`}>
                                    <p className='text-sm w-full'>
                                        {"View"}
                                    </p>

                                    <FaArrowRight className='size-5' />
                                </Link>


                            </div>
                        </motion.div>
                    )
                }
            </div>



        </div>
    )
}
