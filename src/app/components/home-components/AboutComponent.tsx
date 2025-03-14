"use client";
import { interFont, pacificoFont } from "@/app/fonts/fontsConfig";
import { rootUrl } from "@/app/variables/sharedVariables";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import React, { LegacyRef, useRef } from "react";
import CountUp from "react-countup";
// import { useCountUp } from "react-countup";
import { BsHouses } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { LiaAwardSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";
import { motion, useInView } from "motion/react";
import {
  animateBlurIn,
  animateFadeDown,
  animateFadeUp,
  animateGradualSpacing,
  animateRotateFromRight,
} from "@/app/animation/animationVariants";

export const AboutComponent = () => {
  const divCountRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divCountView = useInView(divCountRef, {once: true});

  const aboutContent =
    "Welcome to Acegeld, a premier service-oriented company renowned for her expertise in construction, high-quality finishes and top-tier furnishing solutions. Known for delivering excellence and innovation, we tailor our services to meet diverse needs of clients both locally and internationally.";

  return (
    <div className="2xl:w-[1200px] xl:w-[75%] lg:w-[85%] w-[90%] mx-auto flex flex-col justify-center items-center gap-y-10">
      <div className="flex gap-x-1">
        {"You  are  welcome  aboard".split("").map((char, index) => (
          <motion.p
                    viewport={{once: true}}
            key={`Welcome to${index}`}
            variants={animateGradualSpacing}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={index}
            exit="hidden"
            className={`${pacificoFont.className} tracking-tighter base-color1 text-xl text-center`}
          >
            {char}
          </motion.p>
        ))}
      </div>

      <div className="w-full flex lg:flex-row flex-col lg:justify-between lg:gap-x-6 lg:gap-y-0 gap-y-6 ">
        <motion.div
                    viewport={{once: true}}
          variants={animateBlurIn}
          initial={"offscreen"}
          whileInView={"onscreen"}
          className="lg:w-[50%] w-full lg:min-h-[500px] min-h-[400px] bg-gray-300 overflow-hidden"
        >
          <img
            alt="about picture"
            src="images/pictures/pages/about.webp"
            className="flex w-full lg:min-h-[500px] min-h-[400px] h-full object-cover"
          />
        </motion.div>

        <div className="lg:w-[50%] lg:mt-0 mt-12 w-full px-[10px] h-full flex flex-col gap-y-3">
          <motion.h2
            viewport={{once: true}}
            variants={animateFadeDown}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}
            className="base-color1 w-full flex justify-center items-center font-bold text-3xl"
          >
            {"About Us"}
          </motion.h2>

          <motion.div
                    viewport={{once: true}}
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0.5}
            className="flex flex-col w-full"
          >
            <p className="text-sm">{aboutContent}</p>

            <div className="flex w-full">
              <Link
                href={`${rootUrl}/about`}
                className="mt-2 flex items-center gap-x-2 base-color1 font-bold"
              >
                <p className="text-sm">{"Read More"}</p>

                <FaArrowRight className="size-5" />
              </Link>
            </div>
          </motion.div>

          <div
            ref={divCountRef}
            className="w-full grid grid-cols-2 mt-12 gap-y-8"
          >
            {divCountView && (
              <>
                <motion.div
                    viewport={{once: true}}
                  variants={animateRotateFromRight}
                  initial={"offscreen"}
                  animate={divCountView ? "onscreen" : ""}
                  custom={0}
                  className="flex items-center gap-x-3 font-bold"
                >
                  <BsHouses className="lg:size-[50px] size-[30px]" />

                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <CountUp
                        end={30}
                        className="lg:text-4xl text-3xl base-color1"
                      />

                      <h2 className="lg:text-4xl text-3xl base-color1">
                        {"+"}
                      </h2>
                    </div>

                    <h3>{"Houses"}</h3>
                  </div>
                </motion.div>

                <motion.div
                    viewport={{once: true}}
                  variants={animateRotateFromRight}
                  initial={"offscreen"}
                  animate={divCountView ? "onscreen" : ""}
                  custom={0.3}
                  className="flex items-center gap-x-3 font-bold"
                >
                  <GrProjects className="lg:size-[50px] size-[30px]" />

                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <CountUp
                        end={5}
                        className="lg:text-4xl text-3xl base-color1"
                      />

                      <h2 className="lg:text-4xl text-3xl base-color1">
                        {"+"}
                      </h2>
                    </div>

                    <h3>{"Projects"}</h3>
                  </div>
                </motion.div>

                <motion.div
                    viewport={{once: true}}
                  variants={animateRotateFromRight}
                  initial={"offscreen"}
                  animate={divCountView ? "onscreen" : ""}
                  custom={0.6}
                  className="flex items-center gap-x-3 font-bold"
                >
                  <LiaAwardSolid className="lg:size-[50px] size-[30px]" />

                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <CountUp
                        end={10}
                        className="lg:text-4xl text-3xl base-color1"
                      />

                      <h2 className="lg:text-4xl text-3xl base-color1">
                        {"+"}
                      </h2>
                    </div>

                    <h3>{"Awards"}</h3>
                  </div>
                </motion.div>

                <motion.div
                    viewport={{once: true}}
                  variants={animateRotateFromRight}
                  initial={"offscreen"}
                  animate={divCountView ? "onscreen" : ""}
                  custom={0.9}
                  className="flex items-center gap-x-3 font-bold"
                >
                  <PiUsersThree className="lg:size-[50px] size-[30px]" />

                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <CountUp
                        end={105}
                        className="lg:text-4xl text-3xl base-color1"
                      />

                      <h2 className="lg:text-4xl text-3xl base-color1">
                        {"+"}
                      </h2>
                    </div>

                    <h3>{"Clients"}</h3>
                  </div>
                </motion.div>
              </>
            )}
          </div>

          <motion.div
                    viewport={{once: true}}
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}
            className="w-[80%] flex flex-col gap-y-2 mt-12"
          >
            <p className="font-bold">
              {`Let’s connect, your dream home is just a message away!`}
            </p>

            <Link href={`${rootUrl}/contact`}>
              <Button
                onClick={() => {}}
                className={` tracking-widest text-[15px] base-background2 w-full h-[40px] sm:hover:bg-[#f0f0f0]
                                text-gray-900 sm:hover:text-orange-800 sm:hover:transition-colors hover:ease-linear sm:hover:duration-500`}
                placeholder=""
                onPointerEnterCapture
                onPointerLeaveCapture
              >
                <span className={`${interFont.className} capitalize text-sm`}>
                  {"Speak To Us"}
                </span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
