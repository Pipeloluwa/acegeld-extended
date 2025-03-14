"use client";
import { IconButton } from '@material-tailwind/react';
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { IEstateData } from '@/app/interfaces/ITypeData';
import { animateFadeDown, animateFadeUp, animateRotateFromLeft } from '@/app/animation/animationVariants';
import { motion } from 'motion/react';


export const EstateFeatureComponent:React.FC<IEstateData> = ({estate_features}) => {


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
        <div className='z-10 -skew-y-3 -mb-10 py-10 w-full bg-gray-900'>

            <div className="skew-y-3 w-full h-screen flex flex-col gap-y-12 gap-x-3 justify-center items-center">

                <motion.h2
                    viewport={{once: true}} 
                    variants={animateFadeDown}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}
                    
                    className='base-color1 w-full flex justify-center items-center font-bold text-3xl'>
                    {"Features"}
                </motion.h2>

                <div className='2xl:w-[1200px] w-[90%] flex justify-center items-center'>

                    <div className="w-full justify-center items-center">
                        <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickPrev(); }}
                            className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-orange-800 text-white"
                            placeholder='' onPointerEnterCapture onPointerLeaveCapture
                        >
                            <GrLinkPrevious className="size-[20px]" />
                        </IconButton>
                    </div>



                    <div className="lg:w-[80%] w-[65%] justify-center items-center">
                        <Slider
                            ref={slider => {
                                sliderRef.current = slider;
                            }}
                            arrows={false}
                            dots={false}
                            slidesToShow={isMin1140 ? 3 : isMin960 ? 2 : 1}
                            slidesToScroll={isMin1140 ? 3 : isMin960 ? 2 : 1}
                            infinite={true}
                            waitForAnimate={true}
                            speed={1400}
                            autoplay={true}
                            pauseOnHover={true}
                            className="w-full h-full flex justify-center items-center overflow-hidden rounded-3xl"
                        >
                            {
                                estate_features.map((item, index) => {
                                    return (
                                        <motion.div
                    viewport={{once: true}} 
                                            key={`estateFeaturesDataKey${index}`} 
                                            variants={animateFadeUp}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            custom={0}
                                            className='overflow-hidden lg:w-[320px] lg:h-[320px] h-[260px] flex justify-center items-center'>

                                            <div className='overflow-hidden lg:w-[90%] w-[95%] lg:h-[300px] h-[250px] mx-auto p-6 flex flex-col items-center justify-center gap-y-6 rounded-3xl base-background2 shadow-md drop-shadow-lg shadow-gray-800'>

                                                <motion.div
                                                    variants={animateRotateFromLeft}
                                                    initial={"offscreen"}
                                                    whileInView={"onscreen"}
                                                    custom={0.2}
                                                    >
                                                {item.icon}
                                                </motion.div>


                                                <motion.div
                                                    variants={animateFadeUp}
                                                    initial={"offscreen"}
                                                    whileInView={"onscreen"}
                                                    custom={0.4}
                                                    className='flex flex-col gap-y-2'
                                                    >

                                                    <p className='text-center text-sm tracking-widest font-bold'>
                                                        {item.title}
                                                    </p>

                                                    <div className='border-[1px] border-gray-700'/>

                                                    <p className='text-xs italic tracking-widest'>
                                                        {item.description}
                                                    </p>


                                                </motion.div>
                                            </div>

                                        </motion.div>
                                    )
                                })
                            }
                        </Slider>
                    </div>



                    <div className="w-full justify-center items-center">
                        <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickNext(); }}
                            className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto bg-orange-800 text-white"
                            placeholder='' onPointerEnterCapture onPointerLeaveCapture
                        >
                            <GrLinkNext className="size-[20px]" />
                        </IconButton>
                    </div>

                </div>


                <motion.hr
                    viewport={{once: true}} 
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0}
                    className='w-[75%] mx-auto text-white'/>

                <motion.p
                    viewport={{once: true}} 
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.2}
                    className='lg:w-[55%] w-[75%] mx-auto text-center text-sm text-white'>
                    {"Experience the perfect blend of luxury, convenience, and security with our state-of-the-art facilities, advanced technology, and thoughtfully designed spaces – tailored to elevate your lifestyle."}
                </motion.p>


            </div>


        </div>
    )
}
