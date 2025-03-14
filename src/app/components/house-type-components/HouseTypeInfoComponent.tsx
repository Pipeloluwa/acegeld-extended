import { animateBlurIn, animateFadeUp, animateFromLeft, animateFromRight, animateGradualSpacing } from '@/app/animation/animationVariants'
import { IHouseTypeInfo } from '@/app/interfaces/ITypeData'
import { motion } from 'motion/react'
import React from 'react'
import CountUp from 'react-countup'
import { BiArea } from 'react-icons/bi'
import { FaBed, FaHouseUser } from 'react-icons/fa'
import { FaCarTunnel } from 'react-icons/fa6'
import { IoWoman } from 'react-icons/io5'
import { MdBathtub } from 'react-icons/md'



export const HouseTypeInfoComponent: React.FC<IHouseTypeInfo> = (props) => {
    return (
        <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>

            <div className='w-full min-h-[500px] flex lg:flex-row flex-col-reverse lg:gap-y-0 gap-y-10'>

                <div className='lg:w-[50%] w-full lg:pr-[5%] flex flex-col gap-y-12'>

                    <div className=' flex flex-col gap-y-3'>

                        <div className='flex flex-wrap'>
                            {
                                props.title.split("").map((char, index) =>
                                    <motion.p
                    viewport={{once: true}}
                                        key={`Welcome to${index}`}
                                        variants={animateGradualSpacing}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={index}

                                        style={{ whiteSpace: "pre-wrap" }}
                                        className={`base-color1 text-3xl font-bold ${index === 0 ? "capitalize" : ""}`}>

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

                            className='text-justify text-sm'
                        >

                            {props.houseData.description}
                        </motion.p>

                    </div>






                    <div className='w-full grid grid-cols-2 justify-center items-center gap-x-16 gap-y-8'>

                        <div className='flex gap-x-3 font-bold'>

                            <motion.div
                    viewport={{once: true}}
                                variants={animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <BiArea className='lg:size-[50px] size-[30px]' />
                            </motion.div>


                            <div className='flex flex-col'>

                                <motion.div
                    viewport={{once: true}}
                                    variants={animateFromRight}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='flex items-center'>
                                    <CountUp
                                        end={props.houseData.surface_area}
                                        className='lg:text-4xl text-3xl base-color1'
                                    />

                                </motion.div>


                                <motion.h3
                    viewport={{once: true}}
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='lg:text-base sm:text-sm text-xs'>
                                    {"Surface Area"}
                                </motion.h3>
                            </div>



                        </div>


                        <div className='flex gap-x-3 font-bold'>

                            <motion.div
                    viewport={{once: true}}
                                variants={animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <FaCarTunnel className='lg:size-[50px] size-[30px]' />
                            </motion.div>


                            <div className='flex flex-col'>

                                <motion.div
                    viewport={{once: true}}
                                    variants={animateFromRight}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='flex items-center'>
                                    <CountUp
                                        end={props.houseData.parking_spaces}
                                        className='lg:text-4xl text-3xl base-color1'
                                    />

                                </motion.div>


                                <motion.h3
                    viewport={{once: true}}
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='lg:text-base sm:text-sm text-xs'>
                                    {"Parking Spaces"}
                                </motion.h3>
                            </div>

                        </div>


                        <div className='flex gap-x-3 font-bold'>

                            <motion.div
                    viewport={{once: true}}
                                variants={animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <IoWoman className='lg:size-[50px] size-[30px]' />
                            </motion.div>




                            <div className='flex flex-col'>
                                <motion.div
                    viewport={{once: true}}
                                    variants={animateFromRight}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='flex items-center'>
                                    <CountUp
                                        end={props.houseData['maid\'s quarters']}
                                        className='lg:text-4xl text-3xl base-color1'
                                    />

                                </motion.div>

                                <motion.h3
                    viewport={{once: true}}
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='lg:text-base sm:text-sm text-xs'>
                                    {"Maid Quarters"}
                                </motion.h3>
                            </div>

                        </div>


                        <div className='flex gap-x-3 font-bold'>

                            <motion.div
                    viewport={{once: true}}
                                variants={animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <FaBed className='lg:size-[50px] size-[30px]' />
                            </motion.div>


                            <div className='flex flex-col'>
                                <motion.div
                    viewport={{once: true}}
                                    variants={animateFromRight}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='flex items-center'>
                                    <CountUp
                                        end={props.houseData.bedrooms}
                                        className='lg:text-4xl text-3xl base-color1'
                                    />

                                </motion.div>

                                <motion.h3
                    viewport={{once: true}}
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='lg:text-base sm:text-sm text-xs'>
                                    {"Bedrooms"}
                                </motion.h3>
                            </div>

                        </div>

                        <div className='flex gap-x-3 font-bold'>

                            <motion.div
                    viewport={{once: true}}
                                variants={animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <MdBathtub className='lg:size-[50px] size-[30px]' />
                            </motion.div>


                            <div className='flex flex-col'>
                                <motion.div
                    viewport={{once: true}}
                                    variants={animateFromRight}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='flex items-center'>
                                    <CountUp
                                        end={props.houseData.bathrooms}
                                        className='lg:text-4xl text-3xl base-color1'
                                    />

                                </motion.div>

                                <motion.h3
                    viewport={{once: true}}
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='lg:text-base sm:text-sm text-xs'>
                                    {"Bathrooms"}
                                </motion.h3>
                            </div>

                        </div>

                        <div className='flex gap-x-3 font-bold'>

                            <motion.div
                    viewport={{once: true}}
                                variants={animateFromLeft}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <FaHouseUser className='lg:size-[50px] size-[30px]' />
                            </motion.div>


                            <div className='flex flex-col'>
                                <motion.div
                    viewport={{once: true}}
                                    variants={animateFromRight}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='flex items-center'>
                                    <CountUp
                                        end={props.houseData.living_rooms}
                                        className='lg:text-4xl text-3xl base-color1'
                                    />

                                </motion.div>

                                <motion.h3
                    viewport={{once: true}}
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                    className='lg:text-base sm:text-sm text-xs'>
                                    {"Living Rooms"}
                                </motion.h3>
                            </div>

                        </div>


                    </div>
                </div> 




                <motion.div
                    viewport={{once: true}}
                    variants={animateBlurIn}
                    initial={"offscreen"}
                    whileInView={"onscreen"}

                    className='lg:w-[50%] w-full lg:min-h-[500px] min-h-[400px] bg-gray-300 shadow-md shadow-gray-500 overflow-hidden'>

                    <img alt='house type picture' src={props.houseData.picture} className='flex w-full lg:min-h-[500px] min-h-[400px] h-full object-cover' />


                </motion.div>


            </div>

        </div>
    )
}
