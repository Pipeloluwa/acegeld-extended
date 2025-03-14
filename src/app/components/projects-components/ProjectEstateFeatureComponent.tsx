"use client";
import { IconButton } from '@material-tailwind/react';
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useRef, useState } from 'react'
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { IEstateData } from '@/app/interfaces/ITypeData';
import { animateFromRight, animateGradualSpacing, animateRotateFromLeft } from '@/app/animation/animationVariants';
import { motion } from 'motion/react';


export const ProjectEstateFeatureComponent: React.FC<IEstateData> = ({ estate_features }) => {


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

        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>

            <div className='flex flex-wrap'>
                {
                    "Project Features".split("").map((char, index) =>
                <motion.p
                    viewport={{once: true}}
                    key={`"Project Features${index}`}
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


            <div className='w-full flex justify-center items-center'>

                <div className="w-full justify-center items-center">
                    <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickPrev(); }}
                        className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto"
                        placeholder='' onPointerEnterCapture onPointerLeaveCapture
                    >
                        <GrLinkPrevious className="size-[20px]" />
                    </IconButton>
                </div>



                <div className="w-[80%] justify-center items-center">
                    <Slider
                        ref={slider => {
                            sliderRef.current = slider;
                        }}
                        arrows={false}
                        dots={false}
                        slidesToShow={isMin1140 ? 3 : isMin960 ? 2 : 1}
                        slidesToScroll={isMin1140 ? 3 : isMin960 ? 2 : 1}
                        infinite={true}
                        speed={3600}
                        autoplay={true}
                        pauseOnHover={true}
                        className="w-full"
                    >
                        {
                            estate_features.map((item, index) => {
                                return (
                                    <div key={`estateFeaturesDataKey${index}`} className='flex justify-center items-center'>

                                        <div className='mx-auto p-6 flex flex-col items-center gap-y-6'>

                                            <motion.div
                    viewport={{once: true}}
                                                variants={animateRotateFromLeft}
                                                initial={"offscreen"}
                                                whileInView={"onscreen"}
                                                custom={0}
                                            >
                                                {item.icon}
                                            </motion.div>



                                            <div className='flex flex-col gap-y-2'>

                                                <div className='flex flex-wrap'>
                                                    {
                                                        item.title.split("").map((char, index) =>
                                                            <motion.p
                    viewport={{once: true}}
                                                                key={`Welcome to${index}`}
                                                                variants={animateGradualSpacing}
                                                                initial={"offscreen"}
                                                                whileInView={"onscreen"}
                                                                custom={index}

                                                                style={{ whiteSpace: "pre-wrap" }}
                                                                className='text-center text-sm tracking-widest font-bold'>

                                                                {char}
                                                            </motion.p>
                                                        )
                                                    }
                                                </div>


                                                <div className='border-[1px] border-gray-700' />

                                                <motion.p
                    viewport={{once: true}}
                                                    variants={animateFromRight}
                                                    initial={"offscreen"}
                                                    whileInView={"onscreen"}
                                                    custom={0}

                                                    className='text-center text-xs italic tracking-widest'>

                                                    {item.description}
                                                </motion.p>


                                            </div>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>



                <div className="w-full justify-center items-center">
                    <IconButton onClick={() => { return sliderRef.current && sliderRef.current.slickNext(); }}
                        className="cursor-pointer flex justify-center items-center rounded-full size-[40px] mx-auto"
                        placeholder='' onPointerEnterCapture onPointerLeaveCapture
                    >
                        <GrLinkNext className="size-[20px]" />
                    </IconButton>
                </div>

            </div>


        </div>

    )
}
