"use client";
import { interFont, pacificoFont } from '@/app/fonts/fontsConfig'
import { houseTypes } from '@/app/variables/houseVariables';
import { rootUrl } from '@/app/variables/sharedVariables';
import { Button } from '@material-tailwind/react';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { motion } from "motion/react"
import TypeIt from 'typeit-react'
import { animateBlurIn, animateGradualSpacing, animateVisible } from '@/app/animation/animationVariants';
import VideoComponent from './VideoComponent';

export const WelcomeComponent = () => {
    const [videoLoadState, setVideoLoadState] = useState<boolean>(false);


    return (
        <main className='h-svh w-full relative bg-gray-900'>
            <VideoComponent setVideoLoadState={setVideoLoadState}/>


            <div className='absolute left-0 right-0 top-0 bottom-0 bg-black/20' />


            {
                videoLoadState
                &&
                <section className='w-[75%] h-full mx-auto z-10  absolute left-0 right-0 top-0 bottom-0 flex flex-col gap-y-8 items-center justify-center '>

                    <div className='text-shadow text-center text-white flex flex-col gap-y-4 items-center justify-center font-extrabold'>
                        <div className='flex gap-x-2'>
                            {
                                "Welcome  to".split("").map((char, index) =>
                                    <motion.p
                                        key={`Welcome to${index}`}
                                        variants={animateGradualSpacing}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={index}

                                        className={`${pacificoFont.className} tracking-tighter sm:text-4xl text-3xl`}>

                                        {char}
                                    </motion.p>
                                )
                            }
                        </div>


                        <motion.h1
                            variants={animateBlurIn}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                            className={`md:text-8xl text-5xl tracking-widest`}>

                            {"AceGeld"}
                        </motion.h1>
                    </div>


                    <motion.p
                        variants={animateVisible}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        className='lg:h-[30px] h-[60px] flex md:justify-start justify-center lg:w-auto px-2 sm:w-[50%] w-[90%] mx-auto tracking-wider text-center text-shadow text-white md:text-lg text-sm italic'>

                        <TypeIt options={{ loop: true, speed: 100 }}>
                            {"Building dreams, Perfecting Spaces & Elevating Living"}
                        </TypeIt>
                    </motion.p>



                    <Link href={`${rootUrl}/house-types/${houseTypes[10].id}`} >
                        <motion.div
                            variants={animateBlurIn}
                            initial={"offscreen"}
                            whileInView={"onscreen"}
                        >
                            <Button onClick={() => { }} className={` tracking-widest text-[15px] base-background2 big-button sm:hover:bg-[#f0f0f0]
                        text-gray-900 sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}
                                placeholder='' onPointerEnterCapture onPointerLeaveCapture
                            >

                                <span className={`${interFont.className} capitalize`}>
                                    {"Explore"}
                                </span>
                            </Button>

                        </motion.div>



                    </Link>

                </section>
            }


        </main>
    )
}
