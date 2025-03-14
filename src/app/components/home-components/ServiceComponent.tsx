"use client";
import {
  animateFadeDown,
  animateFadeUp,
  animateBlurIn,
  animateFromLeft,
  animateFromRight,
} from "@/app/animation/animationVariants";
import { motion } from "motion/react";
import { useState } from "react";
import { FaUsersViewfinder } from "react-icons/fa6";
import { GiTreeGrowth } from "react-icons/gi";
import { IoConstructOutline } from "react-icons/io5";
import { MdOutlineManageHistory } from "react-icons/md";
import { SiAffinitydesigner } from "react-icons/si";

export const ServiceComponent = () => {
  const servicesData = [
    {
      title: "Design & Automation",
      description: `We believe that great design is the perfect blend of artistry and practicality. Our design team works passionately to transform ideas into innovative and functional spaces that inspire and elevate everyday living.`,
      icon: <SiAffinitydesigner className="size-[50px]" />,
    },

    {
      title: "Construction",
      description: `We bring a team of highly skilled engineers, architects, and project managers with years of experience to ensure precise execution from concept to completion.`,
      icon: <IoConstructOutline className="size-[50px]" />,
    },

    {
      title: "Project Management",
      description: `At Acegeld effective project management is the backbone of every successful endeavor. We take pride in our ability to plan, execute, and oversee projects with a meticulous approach that ensures quality, efficiency, and timely delivery.`,
      icon: <MdOutlineManageHistory className="size-[50px]" />,
    },
  ];

  const [projectHover, setProjectHover] = useState<string>("");

  return (
    <div className="2xl:w-[1200px] xl:w-[75%] lg:w-[85%] w-[90%] mx-auto flex flex-col justify-center items-center gap-y-10">
      <div className="lg:w-[70%] w-full mx-auto flex flex-col gap-y-3">
        <motion.h2
          viewport={{once: true}}
          variants={animateFadeDown}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0}
          className="base-color1 w-full flex justify-center items-center font-bold text-3xl"
        >
          {"Services"}
        </motion.h2>

        <motion.p
          viewport={{once: true}}
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0.5}
          className="text-sm"
        >
          {`At Acegeld, we specialize in bringing your vision to life with our wide range of services. From Construction Services—offering tailored solutions for residential and commercial projects, ensuring durability and perfection—to Interior Design, where we craft spaces that reflect your personality and enhance functionality. Our Decoration & Styling experts add the perfect touch of charm and sophistication to your space with bespoke designs and finishes.`}
        </motion.p>
      </div>

      <div className="w-full lg:h-[550px] flex lg:flex-row flex-col-reverse justify-between lg:gap-x-6 lg:gap-y-0 gap-y-16">
        <div className="lg:w-[50%] w-full px-[10px] h-full flex flex-col justify-between lg:gap-y-3 gap-y-8">
          {servicesData.map((item, index) => (
            <motion.div
              key={`serviceDataSample${index}`}
              viewport={{once: true}}
              variants={index % 2 === 0 ? animateFromRight : animateFromLeft}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={index * 0.25}
              className="w-full flex flex-col gap-y-2 bg-gray-100 transition-colors duration-500 rounded-xl p-4 shadow"
            >
              <div className="flex items-center gap-x-3 font-bold">
                {item.icon}

                <h3 className="text-xl">{item.title}</h3>
              </div>

              <p className="text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          viewport={{once: true}}
          variants={animateBlurIn}
          initial={"offscreen"}
          whileInView={"onscreen"}
          className="lg:w-[50%] w-full lg:h-full h-[500px] bg-gray-300 overflow-hidden"
        >
          <img
            alt="about picture"
            src="images/pictures/others/services.webp"
            className="flex w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
