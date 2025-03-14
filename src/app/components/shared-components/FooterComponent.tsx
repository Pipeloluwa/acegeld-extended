"use client";
import emailjs from '@emailjs/browser';
import { Button, Input, Textarea } from '@material-tailwind/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { LegacyRef, useRef, useState } from 'react';
import { interFont } from '@/app/fonts/fontsConfig';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io5';
import { RiInstagramFill } from 'react-icons/ri';
import { rootUrl } from '@/app/variables/sharedVariables';
import { houseTypes } from '@/app/variables/houseVariables';
import { projects } from '@/app/variables/projectsVariables';
import { animateGradualSpacing, animateFadeUp } from '@/app/animation/animationVariants';
import { motion } from 'motion/react';
import { MailResponseComponent } from './MailResponseComponent';




export const FooterComponent = () => {
    const form: LegacyRef<HTMLFormElement> = useRef(null);
    const [formProcessing, setFormProcessing] = useState<boolean>(false);
    const [messageValue, setMessageValue] = useState<string>("");

    const [mailDialog, setMailDialog] = useState("");

    const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;


    const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (messageValue.trim().length === 0) {
            setMailDialog("Please type in your message");
            return;
        }


        if (form.current && EMAIL_SERVICE_ID !== undefined && EMAIL_TEMPLATE_ID !== undefined && EMAIL_PUBLIC_KEY !== undefined) {
            setFormProcessing(true);
            await emailjs
                .sendForm(EMAIL_SERVICE_ID!, EMAIL_TEMPLATE_ID!, form.current, {
                    publicKey: EMAIL_PUBLIC_KEY,
                })
                .then(
                    () => {
                        setMailDialog("Successful");
                    },
                    (error) => {
                        setMailDialog("Sorry, could not send information, something went wrong");
                        console.log('FAILED...', error);
                    },
                ).catch((error) => {
                    setMailDialog("Sorry, could not send information, something went wrong");
                    console.log(error);
                });

            setFormProcessing(false);
        }

    }





    return (
        <footer className='w-full base-background2 relative'>

            <div
                className="w-full px-[5%] pt-[130px] pb-[50px] flex flex-col justify-between">

                <div className='w-full flex lg:flex-row flex-col lg:gap-x-24 gap-y-12 justify-center lg:items-start items-center'>

                    <div className='lg:w-[40%] w-full flex flex-col gap-y-5'>
                        <h2 className='w-full font-bold text-3xl text-gray-900'>
                            {"Get  In  Touch".split("").map((char, index) =>
                                <motion.span
                                    key={`Get In Touch${index}`}
                                    variants={animateGradualSpacing}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={index}
                                    exit="hidden"

                                    className='tracking-tighter'>

                                    {char}
                                </motion.span>
                            )
                            }

                        </h2>




                        <form ref={form} onSubmit={submitMessage} className="flex flex-col justify-between gap-y-5">
                            <input name='message_type' defaultValue={"Contact"} className='hidden' />

                            <motion.div
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}
                            >
                                <Input
                                    label="Name" required type="text"
                                    name="from_name" pattern=".*\S.*" title="Input cannot be empty or only contain spaces"
                                    color='gray' size='md'
                                    className='bg-white/50 px-4 py-6'
                                    crossOrigin='' onPointerEnterCapture onPointerLeaveCapture
                                />
                            </motion.div>


                            <motion.div
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.2}
                            >
                                <Input
                                    label="Email" required type="email"
                                    name="from_email" pattern=".*\S.*"
                                    color='gray' size='md'
                                    className='bg-white/50 px-4 py-6'
                                    crossOrigin='' onPointerEnterCapture onPointerLeaveCapture
                                />
                            </motion.div>


                            <motion.div
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.4}
                            >
                                <Input
                                    label="Phone Number" required type="tel"
                                    placeholder='Example: +2348012345678'
                                    name="from_phone" pattern="\+[0-9]{1,3}[0-9]{10}"
                                    color='gray' size='md'
                                    className='bg-white/50 px-4 py-6 '
                                    crossOrigin='' onPointerEnterCapture onPointerLeaveCapture
                                />
                            </motion.div>


                            <motion.div
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.6}
                            >


                                <Textarea
                                    value={messageValue}
                                    onChange={(e) => setMessageValue(e.target.value)}
                                    error={messageValue.trim().length === 0}
                                    label="Type Your Message Here" required
                                    name="message" autoComplete='on' spellCheck="true"
                                    color='gray' size='md'
                                    className='bg-white/50 px-4 py-6'
                                    onPointerEnterCapture onPointerLeaveCapture
                                />

                            </motion.div>


                            <motion.div
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0.6}
                            >
                                <Button
                                    type='submit'
                                    disabled={formProcessing}
                                    onClick={() => { }}
                                    className={` tracking-widest text-[15px] bg-gray-900 big-button sm:hover:bg-[#f0f0f0]
                                        text-white sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}
                                    placeholder='' onPointerEnterCapture onPointerLeaveCapture
                                >

                                    <span className={`${interFont.className} capitalize`}>
                                        {formProcessing ? "Sending..." : "Send"}
                                    </span>
                                </Button>

                            </motion.div>



                            <MailResponseComponent mailDialog={mailDialog} setMailDialog={setMailDialog} />

                        </form>



                    </div>





                    <div className='lg:w-[60%] w-full flex lg:flex-row flex-col lg:gap-x-28 lg:gap-y-0 gap-y-16 text-gray-900'>

                        <div className='lg:w-[35%] w-full flex flex-col gap-y-8'>

                            <div className='flex flex-col gap-y-2'>

                                <motion.h2
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}

                                    className='text-xl font-bold mb-2'>

                                    {"Call  Us".split("").map((char, index) =>
                                        <motion.span
                                            key={`Call Us${index}`}
                                            variants={animateGradualSpacing}
                                            initial={"offscreen"}
                                            whileInView={"onscreen"}
                                            custom={index}
                                            exit="hidden"

                                            className='tracking-tighter'>

                                            {char}
                                        </motion.span>
                                    )
                                    }

                                </motion.h2>


                                <motion.div
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}
                                >
                                    <h6>
                                        {"+234 807 133 3456"}
                                    </h6>
                                </motion.div>


                                <motion.div
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0.2}
                                >
                                    <h6>
                                        {"+234 809 399 0219"}
                                    </h6>
                                </motion.div>


                            </div>


                            <div className='flex flex-col gap-y-2'>

                                <motion.h2
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}

                                    className='text-xl font-bold mb-2'>
                                    {"Email  Us  @"}
                                </motion.h2>

                                <motion.div
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0.2}
                                >
                                    <Link rel='no' href={"mailto:"}>
                                        {"info@acegeld.com"}
                                    </Link>
                                </motion.div>


                            </div>


                            <div className='flex flex-col gap-y-2'>

                                <motion.h2
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0}

                                    className='text-xl font-bold mb-2'>

                                    {"Pay  Us  Visit"}

                                </motion.h2>


                                <motion.div
                                    variants={animateFadeUp}
                                    initial={"offscreen"}
                                    whileInView={"onscreen"}
                                    custom={0.2}
                                >
                                    <h6>
                                        {"Let’s make your real estate journey unforgettable!"}
                                    </h6>
                                </motion.div>


                            </div>

                        </div>




                        <div className='lg:w-[65%] w-full flex flex-col'>
                            <motion.h2
                                variants={animateFadeUp}
                                initial={"offscreen"}
                                whileInView={"onscreen"}
                                custom={0}

                                className='text-xl font-bold mb-4'>

                                {"Quick  Links"}

                            </motion.h2>


                            <div className='w-full flex gap-x-24'>

                                <ul className='flex flex-col gap-y-6'>
                                    <motion.div
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={0.2}
                                    >
                                        <Link href={`${rootUrl}`}>
                                            {"Home"}
                                        </Link>
                                    </motion.div>


                                    <motion.div
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={0.4}
                                    >
                                        <Link href={`${rootUrl}/about`} >
                                            {"About"}
                                        </Link>
                                    </motion.div>


                                    <motion.div
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={0.6}
                                    >
                                        <Link href={`${rootUrl}/house-types/${houseTypes[11].id}`} >
                                            {"House Types"}
                                        </Link>
                                    </motion.div>


                                    <motion.div
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={0.8}
                                    >
                                        <Link href={`${rootUrl}/projects/${projects[5].id}`} >
                                            {"Projects"}
                                        </Link>
                                    </motion.div>


                                    <motion.div
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={1.0}
                                    >
                                        <Link href={`${rootUrl}/contact`} >
                                            {"Contact"}
                                        </Link>
                                    </motion.div>


                                </ul>


                                <ul className='flex flex-col gap-y-6'>
                                    <motion.div
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={1.2}
                                    >
                                        <Link href={`${rootUrl}/terms-of-service`}>
                                            {"Terms Of Service"}
                                        </Link>

                                    </motion.div>

                                    <motion.div
                                        variants={animateFadeUp}
                                        initial={"offscreen"}
                                        whileInView={"onscreen"}
                                        custom={1.4}
                                    >
                                        <Link href={`${rootUrl}/privacy-policy`}>
                                            {"Privacy Policy"}
                                        </Link>
                                    </motion.div>


                                </ul>

                            </div>


                        </div>

                    </div>

                </div>



                <div className='w-full flex mt-8  gap-x-6 justify-center text-black'>
                    {/* <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0}
                    >
                        <Link href={""} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='size-[25px]' />
                        </Link>
                    </motion.div> */}


                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.1}
                    >
                        <Link href={"https://www.instagram.com/acegeld_ng/profilecard/?igsh=MTZuNDJ0eGp1c21kaQ=="} target="_blank" rel="noopener noreferrer">
                            <RiInstagramFill className='size-[25px]' />
                        </Link>
                    </motion.div>


                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.2}
                    >
                        <Link href={"https://x.com/acegeld_ng?s=21"} target="_blank" rel="noopener noreferrer">
                            <BsTwitterX className='size-[25px]' />
                        </Link>
                    </motion.div>


                    {/* <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.3}
                    >
                        <Link href={""} target="_blank" rel="noopener noreferrer">
                            <IoLogoYoutube className='size-[25px]' />
                        </Link>
                    </motion.div> */}


                    <motion.div
                        variants={animateFadeUp}
                        initial={"offscreen"}
                        whileInView={"onscreen"}
                        custom={0.4}
                    >
                        <Link href={"https://www.linkedin.com/company/acegeld/"} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='size-[25px]' />
                        </Link>
                    </motion.div>


                </div>




                <motion.div
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.6}

                    className='w-full border border-gray-700 my-2'
                />

                <motion.h6
                    variants={animateFadeUp}
                    initial={"offscreen"}
                    whileInView={"onscreen"}
                    custom={0.8}

                    className='w-full text-center'>

                    {"©2024 Ace-Geld. All rights reserved."}
                </motion.h6>

            </div>


        </footer>
    )
}
