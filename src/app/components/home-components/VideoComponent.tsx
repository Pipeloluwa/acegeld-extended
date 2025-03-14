'use client'
import dynamic from 'next/dynamic';

import { animateBlurIn } from '@/app/animation/animationVariants'
import { motion } from 'motion/react'
import React, { useRef } from 'react';
import { WelcomeSuspense } from '../suspense-components/WelcomeSuspense';



interface IVideoComponent {
    setVideoLoadState: React.Dispatch<React.SetStateAction<boolean>>
}



const VideoComponent: React.FC<IVideoComponent> = ({ setVideoLoadState }) => {
    const videoRef: React.LegacyRef<HTMLVideoElement> = useRef(null);


    return (
        <motion.video
            ref={videoRef}
            viewport={{once: true}}
            onCanPlay={() => {videoRef.current?.play(); setTimeout(() => setVideoLoadState(true), 1000)}}
            autoPlay muted loop playsInline
            variants={animateBlurIn}
            initial={"offscreen"}
            whileInView={"onscreen"}

            className='object-cover absolute left-0 right-0 top-0 bottom-0 w-full h-full'>

            <source src="/videos/welcome-video-bg.webm" type="video/webm" />
        </motion.video>
    )
}


export default dynamic(() => Promise.resolve(VideoComponent), {loading: () => <WelcomeSuspense />, ssr: false });