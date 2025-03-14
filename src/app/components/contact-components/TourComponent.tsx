"use client";
import emailjs from '@emailjs/browser';
import { animateGradualSpacing, animateFadeUp, animateBlurIn } from '@/app/animation/animationVariants'
import { interFont } from '@/app/fonts/fontsConfig'
import { Button, Input, Textarea } from '@material-tailwind/react'
import { motion, useInView } from 'motion/react'
import React, { LegacyRef, useRef, useState } from 'react';
import { MailResponseComponent } from '../shared-components/MailResponseComponent';

export const TourComponent = () => {
  const divBookTourRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divBookTourView = useInView(divBookTourRef, {once: true});


  const form: LegacyRef<HTMLFormElement> = useRef(null);
  const [formProcessing, setFormProcessing] = useState<boolean>(false);
  const [mailDialog, setMailDialog] = useState("");

  const EMAIL_SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
  const EMAIL_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
  const EMAIL_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;

  const submitMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
    <div className='2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-10'>

      <div className='w-full flex flex-col gap-y-6'>


        <div className='w-full lg:h-[530px] flex lg:flex-row flex-col-reverse lg:gap-x-6 lg:gap-y-0 gap-y-10'>


          <div className='lg:w-[50%] lg:pr-[5%] flex flex-col gap-y-3'>

            <div ref={divBookTourRef} className='flex '>
              {
                "Book A Tour".split("").map((char, index) =>
                  <motion.p
                    viewport={{once: true}}
                    key={`Welcome to${index}`}
                    variants={animateGradualSpacing}
                    initial={"offscreen"}
                    animate={divBookTourView ? "onscreen" : ""}
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

              className='text-justify text-sm'>
              {"Experience our exceptional estate features firsthand. Schedule your personalized tour now and take the first step toward your dream home."}
            </motion.p>



            <form ref={form} onSubmit={submitMessage} className="mt-6 flex flex-col justify-between gap-y-8">

              <input name='message_type' defaultValue={"Tour"} className='hidden' />

              <motion.div
                viewport={{once: true}}
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0}
              >
                <Input
                  label="Name" required type="text"
                  name="from_name" color='gray' size='md'
                  className='bg-white/50 px-4 py-6'
                  crossOrigin='' onPointerEnterCapture onPointerLeaveCapture
                />
              </motion.div>


              <motion.div
                viewport={{once: true}}
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.1}
              >
                <Input
                  label="Email" required type="email"
                  name="from_email" color='gray' size='md'
                  className='bg-white/50 px-4 py-6'
                  crossOrigin='' onPointerEnterCapture onPointerLeaveCapture
                />
              </motion.div>


              <motion.div
                viewport={{once: true}}
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.2}
              >
                <Input
                  label="Phone Number" required type="tel"
                  name="from_phone" color='gray' size='md'
                  pattern="\+[0-9]{1,3}[0-9]{10}"
                  className='bg-white/50 px-4 py-6'
                  crossOrigin='' onPointerEnterCapture onPointerLeaveCapture
                />
              </motion.div>


              <motion.div
                viewport={{once: true}}
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.3}
              >
                <Textarea
                  label="Any Important Information?"
                  name="message" color='gray' size='md'
                  className='bg-white/50 px-4 py-6'
                  onPointerEnterCapture onPointerLeaveCapture
                />
              </motion.div>


              <motion.div
                viewport={{once: true}}
                variants={animateFadeUp}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={0.4}
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





          <motion.div
            viewport={{ amount: 0.4, once: true }}
            variants={animateBlurIn}
            initial={"offscreen"}
            whileInView={"onscreen"}

            className='lg:w-[50%] lg:h-[530px] h-[400px] bg-gray-300 overflow-hidden'>

            <img alt='project picture' src={'images/pictures/others/tour.webp'} className='flex w-full h-full object-cover' />

          </motion.div>

        </div>


      </div>


    </div>
  )
}
