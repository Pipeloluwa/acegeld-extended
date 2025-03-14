"use client";
import { animateBlurIn, animateGradualSpacing } from '@/app/animation/animationVariants';
import { interFont } from '@/app/fonts/fontsConfig';
import { IThreeD } from '@/app/interfaces/ITypeData'
import { motion } from 'motion/react';
import React, { useState } from 'react'
import { BiFullscreen } from 'react-icons/bi';

export const ThreeDComponent: React.FC<IThreeD> = ({ link_3d }) => {
    const [fullScreenState, setFullScreenState] = useState<boolean>(false);


    return (
        <div className='w-full flex flex-col justify-center mt-10 gap-y-10'>


            <div className='flex flex-wrap'>
                {
                    "The house in 3D".split("").map((char, index) =>
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
                variants={animateBlurIn}
                initial={"offscreen"}
                whileInView={"onscreen"}

                className={`${fullScreenState
                    ? "z-50 fixed left-0 right-0 top-0 bottom-0 h-full"
                    : "relative lg:h-[700px] h-[500px]"}`}>

                <iframe
                    src={link_3d}
                    title='3D Page'
                    className='h-full w-full bg-gray-800'
                >

                </iframe>



                <button onClick={() => setFullScreenState(value => !value)}
                    className={`${fullScreenState ? "z-50 fixed left-2 top-4" : "absolute left-2 top-4"} 
                         tracking-widest text-[15px] bg-black text-white h-[40px] p-3 rounded-lg
                        `}
                >

                    <span className={`${interFont.className} capitalize flex gap-x-2 text-sm`}>
                        {`${fullScreenState ? "Exit Fullscreen" : "Show Fullscreen"}`}
                        <BiFullscreen className="size-[20px]" />
                    </span>
                </button>

            </motion.div>





        </div>
    )
}
