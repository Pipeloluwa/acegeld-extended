"use client";
import { animateFadeDown, animateFadeUp, animateBlurIn, animatePullUp, animateRotateFromLeft } from '@/app/animation/animationVariants'
import { projects, projectsBaseData } from '@/app/variables/projectsVariables'
import { rootUrl } from '@/app/variables/sharedVariables'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'
import { SlLocationPin } from 'react-icons/sl'

export const ProjectComponent = () => {

    const [projectHover, setProjectHover] = useState<string>('');



    return (
        <div className='2xl:w-[1200px] xl:w-[75%] lg:w-[85%] w-[90%]  mx-auto flex flex-col justify-center items-center gap-y-10'>

            <div className='lg:w-[70%] w-full mx-auto flex flex-col gap-y-3'>
                <motion.h2
                    viewport={{once: true}}
                    variants={animateFadeDown}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='base-color1 w-full flex justify-center items-center font-bold text-3xl'>

                    {"Projects"}
                </motion.h2>

                <motion.div
                    viewport={{once: true}}
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.5}
                >

                    <p className='text-sm'>
                        {`Discover Your Dream Home: Explore our curated listings of stunning properties tailored to fit every lifestyle and budget. Your perfect space awaits!`}
                    </p>

                    <div className='flex w-full'>
                        <Link href={""} className='flex items-center gap-x-2 base-color1 font-bold'>
                            <p className='text-sm'>
                                {"Read More"}
                            </p>

                            <FaArrowRight className='size-5' />
                        </Link>
                    </div>
                </motion.div>
            </div>


            <div className='w-full mx-auto flex flex-col justify-between gap-x-6'>

                <div className='w-full h-full flex flex-col gap-y-16'>
                    {
                        Object.entries(projectsBaseData).slice(0, 4).map(([key, item], index) =>
                            <motion.div
                    viewport={{once: true}}
                                key={`projectDataSample${index}`}
                                variants={animateFadeUp}
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
                    viewport={{once: true}}
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
                                    w-full h-full absolute left-0 right-0 top-0 bottom-0 bg-yellow-500/70 `} />


                                    <div
                                        className={
                                            `${projectHover === `projectDataSampleId${index}` ? "translate-y-[40%] text-black" : "translate-y-[100%] text-white"} duration-700 transition-all
                                    absolute left-[5%] right-[5%] top-[10%] lg:bottom-[20%] bottom-[35%] flex flex-col gap-y-2`}>

                                        <h1 className='font-bold text-lg'>
                                            {
                                                item.title.split("").map((char, index) =>
                                                    <motion.span
                    viewport={{once: true}}
                                                        key={`homeprojectTitle${index}`}
                                                        variants={animatePullUp}
                                                        initial={"offscreen"}
                                                        whileInView={"onscreen"}
                                                        custom={index}
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

                                            <p>
                                                {item.location}
                                            </p>
                                        </motion.div> */}

                                        {
                                            projectHover === `projectDataSampleId${index}`
                                            &&
                                            <motion.div
                    viewport={{once: true}}
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


                                    <Link href={`${rootUrl}/projects/${key}`} className={`${projectHover === `projectDataSampleId${index}` ? "text-gray-800" : "text-white"} transition-colors duration-700 min-w:w-[7%] absolute right-[5%] lg:bottom-[10%] bottom-[5%] flex items-center gap-x-2 font-bold`}>
                                        <p className='text-sm'>
                                            {"View"}
                                        </p>

                                        <FaArrowRight className='size-5' />
                                    </Link>



                                </div>
                            </motion.div>
                        )
                    }
                </div>


                <motion.div
                    viewport={{once: true}}
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='flex w-full'>

                    <Link href={`${rootUrl}/projects/${projects[5].id}`} className='mt-8 ml-2 flex items-center gap-x-2 base-color1 font-bold'>
                        <p className='text-lg'>
                            {"See More Projects"}
                        </p>

                        <FaArrowRight className='size-5' />
                    </Link>
                </motion.div>


            </div>

        </div>

    )
}
