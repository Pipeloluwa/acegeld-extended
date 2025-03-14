import { animateGradualSpacing, animateFadeUp, animateBlurIn } from '@/app/animation/animationVariants';
import { coreTeamsData } from '@/app/variables/sharedVariables';
import { motion } from 'motion/react';

export const CoreTeamComponent = () => {


    return (
        <div className='2xl:w-[75%] w-[90%] mt-6 mx-auto flex flex-col justify-center gap-y-10'>

            <div className='flex flex-col'>
                <div className='flex '>
                    {
                        "Our Core Team".split("").map((char, index) =>
                            <motion.p
                    viewport={{once: true}}
                                key={`Welcome to${index}`}
                                variants={animateGradualSpacing}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={index}

                                style={{ whiteSpace: "pre-wrap" }}
                                className='base-color1 text-xl font-bold '>

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

                    className='xl:w-[40%] md:w-[50%] w-full text-justify text-sm'>
                    {"Meet the Visionaries Behind Our Success. Our core team is a group of passionate professionals dedicated to delivering excellence, innovation, and trust in every step of our journey."}
                </motion.p>

            </div>



            <div className='w-full h-full flex flex-col gap-y-16'>

                {
                    coreTeamsData.map((item, index) =>
                        <div key={`coreTeamData${index}`} className='w-full min-h-[350px] flex lg:flex-row flex-col lg:gap-x-6 lg:gap-y-0 gap-y-10'>

                            <motion.div
                    viewport={{once: true}}
                                variants={animateBlurIn}
                                initial={"offscreen"}
                                whileInView={"onscreen"}

                                className='lg:w-[30%] min-h-[350px] bg-gray-300 shadow-md shadow-gray-500 overflow-hidden'>

                                <img alt='project picture' src={item.picture} className='flex w-full h-full object-cover' />

                            </motion.div>


                            <div className='lg:w-[70%] flex flex-col gap-y-3 lg:px-[5%]'>

                                <div className='flex '>
                                    {
                                        item.position.split("").map((char, index) =>
                                            <motion.p
                    viewport={{once: true}}
                                                key={`Core Team Position${index}`}
                                                variants={animateGradualSpacing}
                                                initial={"offscreen"}
                                                whileInView={"onscreen"}
                                                custom={index}

                                                style={{ whiteSpace: "pre-wrap" }}
                                                className='base-color1 text-xl font-bold '>

                                                {char}
                                            </motion.p>
                                        )
                                    }
                                </div>


                                <div className='flex flex-wrap'>
                                    {
                                        item.name.split("").map((char, index) =>
                                            <motion.p
                    viewport={{once: true}}
                                                key={`Core Team Name${index}`}
                                                variants={animateGradualSpacing}
                                                initial={"offscreen"}
                                                whileInView={"onscreen"}
                                                custom={index + 5}

                                                style={{ whiteSpace: "pre-wrap" }}
                                                className='text-2xl italic font-bold'>

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

                                    className='text-justify text-sm'>
                                    {item.description}
                                </motion.p>

                            </div>

                        </div>
                    )
                }
            </div>




        </div>
    )
}
