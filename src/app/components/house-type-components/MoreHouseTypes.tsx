"use client";
import { interFont } from '@/app/fonts/fontsConfig';
import { Button, IconButton } from '@material-tailwind/react'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { houseTypeBaseData } from '@/app/variables/houseVariables'
import { rootUrl } from '@/app/variables/sharedVariables'
import { animateBlurIn, animateFadeUp, animateGradualSpacing } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'



export const MoreHouseTypes: React.FC<{ title: string }> = ({ title }) => {
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
        <div className='md:h-[700px] sm:-[600px] h-[500px] flex flex-col justify-center gap-y-10'>

            <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-wrap'>
                {
                    "More House Types".split("").map((char, index) =>
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



            <motion.div
                    viewport={{once: true}}
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0}

                className="relative flex w-full h-full gap-x-3 justify-center items-center">

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

                            Object.entries(houseTypeBaseData).map(([key, item], index) => {

                                return title !== key
                                    &&
                                    (
                                        <div key={`moreHousesDataKey${index}`} className='overflow-hidden md:h-[620px] sm:h-[520px] h-[420px] md:w-[90%] w-full flex justify-center items-center'>

                                            <div className='relative overflow-hidden md:h-[600px] sm:h-[500px] h-[400px] w-[90%] mx-auto flex items-center rounded-3xl shadow-md drop-shadow-lg shadow-gray-800'>
                                                <div className='absolute top-0 bottom-0 left-0 right-0 flex w-full h-full object-cover bg-gray-300 overflow-hidden'>
                                                    <img alt='house type picture' src={item.picture} className='flex w-full h-full object-cover' />
                                                </div>


                                                <div className='absolute bottom-0 left-0 right-0 flex flex-col justify-center items-center gap-y-2 p-4 from-black/5 to-gray-800 bg-gradient-to-b'>

                                                    <div className='flex'>
                                                        {
                                                            key.split("").map((char, index) =>
                                                                <motion.p
                    viewport={{once: true}}
                                                                    key={`Welcome to${index}`}
                                                                    variants={animateGradualSpacing}
                                                                    initial={"offscreen"}
                                                                    whileInView={"onscreen"}
                                                                    custom={index}

                                                                    style={{ whiteSpace: "pre-wrap" }}
                                                                    className='text-lg text-white tracking-widest'>

                                                                    {char}
                                                                </motion.p>
                                                            )
                                                        }

                                                    </div>


                                                    <motion.p
                    viewport={{once: true}}
                                                        variants={animateFadeUp}
                                                        initial={"offscreen"}
                                                        whileInView={"onscreen"}
                                                        custom={0}

                                                        className='text-sm text-white tracking-widest'>

                                                        {`${item.description.slice(0, 60)}...`}
                                                    </motion.p>

                                                    <motion.div
                    viewport={{once: true}}
                                                        variants={animateBlurIn}
                                                        initial={"offscreen"}
                                                        whileInView={"onscreen"}
                                                        custom={0}
                                                        className="flex w-full"
                                                    >
                                                        <Link href={`${rootUrl}/house-types/${key}`} className='w-full flex'>
                                                            <Button onClick={() => { }}
                                                                className={` tracking-widest text-[15px] base-background2 w-full h-[40px] flex justify-center items-center sm:hover:bg-[#f0f0f0]
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


            </motion.div>



        </div>
    )
}
