"use client";
import { interFont } from '@/app/fonts/fontsConfig';
import { Button, IconButton } from '@material-tailwind/react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa'
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { rootUrl } from '@/app/variables/sharedVariables'
import { houseTypeBaseData, houseTypes } from '@/app/variables/houseVariables'
import {
    animateFadeDown,
    animateFadeUp,
    animateFromLeft,
    animatePullUp,
    animateVisible,
} from '@/app/animation/animationVariants';
import { motion } from 'motion/react'

export const HouseComponent = () => {

    const sliderRef = useRef<Slider | null>(null);

    const [isMin960, setIsMin960] = useState(false);
    const [isMin1140, setIsMin1140] = useState(false);

    useEffect(() => {
        // Handler function to check the window width
        const handleResize = () => {
            const width = window.innerWidth;
            setIsMin960(width >= 960 && width < 1140);
            setIsMin1140(width >= 1140);
        };

        // Initial check
        handleResize();

        // Attach the resize event listener
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (
        <div className='w-full md:h-[900px] sm:-[800px] h-[700px] mx-auto flex flex-col justify-center items-center gap-y-10'>

            <div className='2xl:w-[1200px] xl:w-[75%] lg:w-[85%] w-[90%] mx-auto flex flex-col gap-y-3'>
                <motion.h2
                    viewport={{once: true}}
                    variants={animateFadeDown}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}

                    className='base-color1 w-full flex justify-center items-center font-bold text-3xl'>

                    {"Houses"}
                </motion.h2>

                <motion.p
                    viewport={{once: true}}
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.5}

                    className='text-sm'>
                    {`Find Your Perfect Home: Explore our diverse collection of beautiful houses, thoughtfully designed to cater to your unique needs and lifestyle preferences. Whether you're looking for a cozy retreat, a modern family haven, or a luxurious estate, we have the ideal home waiting just for you.`}
                </motion.p>

            </div>


            <div className='w-full h-full flex flex-col justify-between gap-x-6'>

                <div className="relative flex w-full h-full gap-x-3 justify-center items-center">

                    <div className="z-10 absolute left-12 lg:left-20 xl:left-28 justify-center items-center">
                        <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickPrev(); }}
                            className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-black/20 text-white"
                            placeholder='' onPointerEnterCapture onPointerLeaveCapture
                        >
                            <GrLinkPrevious className="size-[20px]" />
                        </IconButton>
                    </div>



                    <div className="absolute left-0 right-0 lg:w-[90%] w-[98%] mx-auto justify-center items-center">
                        <Slider
                            ref={slider => {
                                sliderRef.current = slider;
                            }}
                            arrows={false}
                            dots={false}
                            slidesToShow={isMin1140 ? 3 : isMin960 ? 2 : 1}
                            infinite={true}
                            speed={1400}
                            autoplay={true}
                            pauseOnHover={true}
                            className="w-full h-full justify-center items-center overflow-hidden rounded-3xl"
                        >
                            {
                                Object.entries(houseTypeBaseData).slice(0, 8).map(([key, item], index) => {
                                    return (
                                        <div key={`housesDataSampleKey${index}`} className='overflow-hidden lg:h-[570px] sm:h-[520px] h-[420px] md:w-[350px] w-full flex justify-center items-center'>

                                            <div className='relative overflow-hidden lg:h-[550px] sm:h-[500px] h-[400px] w-[90%] mx-auto flex items-center rounded-3xl shadow-md drop-shadow-lg shadow-gray-800'>
                                                <motion.div
                    viewport={{once: true}}
                                                    variants={animateFromLeft}
                                                    initial={"offscreen"}
                                                    whileInView={"onscreen"}
                                                    custom={0}

                                                    className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover bg-gray-300'>
                                                    <img alt='project picture' src={item.picture} className='flex w-full h-full object-cover' />

                                                </motion.div>



                                                <div className='h-[250px] absolute bottom-0 left-0 right-0 flex flex-col justify-end items-center gap-y-2 p-4 from-transparent to-black bg-gradient-to-b'>

                                                    <motion.h5
                    viewport={{once: true}} className='font-bold text-white tracking-widest'>
                                                        {
                                                            item.title.split("").map((char, index) =>
                                                                <motion.span
                    viewport={{once: true}}
                                                                    key={`homeHouseTitle${index}`}
                                                                    variants={animatePullUp}
                                                                    initial={"offscreen"}
                                                                    whileInView={"onscreen"}
                                                                    custom={index}
                                                                >
                                                                    {char}
                                                                </motion.span>
                                                            )
                                                        }
                                                    </motion.h5>

                                                    <motion.p
                    viewport={{once: true}}
                                                        variants={animateFadeUp}
                                                        initial={"offscreen"}
                                                        whileInView={"onscreen"}
                                                        custom={0}

                                                        className='text-sm text-white tracking-widest'>
                                                        {`${item.description.slice(0, 90)}...`}
                                                    </motion.p>

                                                    <motion.div
                    viewport={{once: true}}
                                                        variants={animateVisible}
                                                        initial={"offscreen"}
                                                        whileInView={"onscreen"}
                                                        custom={0.7}

                                                        className='flex w-full'
                                                    >


                                                        <Link href={`${rootUrl}/house-types/${key}`} className='w-full flex'>
                                                            <Button onClick={() => { }}
                                                                className={` tracking-widest text-[15px] base-background2 w-full h-[40px] sm:hover:bg-[#f0f0f0]
                                                        text-gray-900 sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}
                                                                placeholder='' onPointerEnterCapture onPointerLeaveCapture
                                                            >
                                                                <span className={`${interFont.className} capitalize text-sm`}>
                                                                    {"View"}
                                                                </span>
                                                            </Button>
                                                        </Link>

                                                    </motion.div>



                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>



                    <div className="z-10 absolute right-12 lg:right-20 xl:right-28 justify-center items-center">
                        <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickNext(); }}
                            className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-black/20 text-white"
                            placeholder='' onPointerEnterCapture onPointerLeaveCapture
                        >
                            <GrLinkNext className="size-[20px]" />
                        </IconButton>
                    </div>


                </div>


                <motion.div
                    viewport={{once: true}}
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.3}

                    className='flex w-full ml-[5%]'
                >

                    <Link href={`${rootUrl}/house-types/${houseTypes[9].id}`} className='mt-6 ml-6 flex items-center gap-x-2 base-color1 font-bold'>
                        <p className='text-lg'>
                            {"Explore More"}
                        </p>

                        <FaArrowRight className='size-5' />
                    </Link>
                </motion.div>


            </div>


        </div>

    )
}
