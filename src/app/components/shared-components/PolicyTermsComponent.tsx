'use client'

import { animateFadeUp } from '@/app/animation/animationVariants';
import { IPolicyTermsComponent } from '@/app/interfaces/IPolicyTermsComponent'
import { motion, useInView } from 'motion/react'
import React, { LegacyRef, useRef } from 'react'

export const PolicyTermsComponent: React.FC<IPolicyTermsComponent> = ({ description, data }) => {
    const divDescRef:LegacyRef<HTMLDivElement>= useRef(null);
    const divDescView= useInView(divDescRef, {once: true});

    const ulPolicy:LegacyRef<HTMLUListElement>= useRef(null);
    // const ulPolicyView= useInView(ulPolicy, {once: true});

    
    return (
        <div ref={divDescRef} className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>

            {
                description
                &&

                <motion.p
                    viewport={{once: true}} 
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    animate={divDescView ? "onscreen" : ""}
                    custom={0}

                    className='text-sm'>

                    {description}
                </motion.p>
            }


            <ul className='flex flex-col gap-y-8'>

                {
                    data.map((item, index) =>
                        <li key={`policyTermsData${index}`} className='flex flex-col'>
                            <motion.h3 
                                viewport={{amount: 0.2, once: true}}
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.1}

                                className='text-xl font-bold'>

                                {`${index + 1})  ${item.title}`}
                            </motion.h3>

                            <motion.p
                    viewport={{once: true}} 
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.2}

                                style={{whiteSpace: 'pre-wrap'}} className='text-sm'>

                                {item.description}
                            </motion.p>

                        </li>
                    )
                }


            </ul>

        </div>

    )
}

