"use client";
import {
  animateFadeDown,
  animateFadeUp,
  animateFromRight,
  animateGradualSpacing,
} from "@/app/animation/animationVariants";
import { interFont } from "@/app/fonts/fontsConfig";
import { Button } from "@material-tailwind/react";
import { motion, useInView } from "motion/react";
import Link from "next/link";
import { LegacyRef, useRef } from "react";
import CountUp from "react-countup";
import { BsHouses } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { LiaAwardSolid } from "react-icons/lia";
import { PiUsersThree } from "react-icons/pi";

export const InfoComponent = () => {
  const divHistoryRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divHistoryView = useInView(divHistoryRef, {once: true});

  const divIntroRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divIntroView = useInView(divHistoryRef, {once: true});

  const divCounterRef: LegacyRef<HTMLDivElement> = useRef(null);
  const divCounterView = useInView(divCounterRef, {once: true});

  return (
    <div className="2xl:w-[75%] w-[90%] mx-auto flex flex-col justify-center gap-y-16">
      <div className="w-full flex flex-col gap-y-6">
        <div ref={divIntroRef} className="flex flex-col gap-y-2">
          <motion.p
                    viewport={{once: true}}
            variants={animateFadeDown}
            initial={"offscreen"}
            animate={divIntroView ? "onscreen" : ""}
            custom={0.4}
            className="text-justify text-sm"
          >
            {
              "Welcome to Acegeld, a premier service-oriented company renowned for her expertise in construction, high-quality finishes and top-tier furnishing solutions. Known for delivering excellence and innovation, we tailor our services to meet diverse needs of clients both locally and internationally."
            }
          </motion.p>

          <motion.p
                    viewport={{once: true}}
            variants={animateFadeDown}
            initial={"offscreen"}
            animate={divIntroView ? "onscreen" : ""}
            custom={0.2}
            className="text-justify text-sm"
          >
            {
              "At Acegeld, our commitment to quality, precision and client satisfaction defines everything we do. We combine modern techniques with timeless design principles to create spaces that inspire. From homes that bring loved ones closer to organizational space that foster collaboration and innovation, we design with purpose and passion. At Acegeld, we craft spaces that excites connection, celebrate togetherness and elevate everyday living."
            }
          </motion.p>

        </div>

        <div className="w-full flex flex-col gap-y-3">
          <div ref={divHistoryRef} className="flex">
            {"Who We Are".split("").map((char, index) => (
              <motion.p
                    viewport={{once: true}}
                key={`Our History${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                animate={divHistoryView ? "onscreen" : ""}
                custom={index}
                style={{ whiteSpace: "pre-wrap" }}
                className="base-color1 text-xl font-bold"
              >
                {char}
              </motion.p>
            ))}
          </div>

          <motion.p
                    viewport={{once: true}}
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}
            className="text-justify text-sm"
          >
            {`At Acegeld, we are a team of seasoned professionals and 
              skilled technicians committed to delivering safe, structurally stable, 
              functional and aesthetically captivating building projects. Our approach 
              focuses on innovation, attention to detail and a deep understanding of our 
              clients’ visions, ensuring every project reflects their unique needs and 
              aspirations. With dedication to quality control and excellence at every 
              stage/phase, we transform ideas into spaces that inspire, elevate and stands 
              the test of time.
            `}
          </motion.p>
        </div>




        <div className="w-full flex flex-col gap-y-3">
          <div className="flex ">
            {"Our Vision".split("").map((char, index) => (
              <motion.p
                    viewport={{once: true}}
                key={`Welcome to${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={index}
                style={{ whiteSpace: "pre-wrap" }}
                className="base-color1 text-xl font-bold "
              >
                {char}
              </motion.p>
            ))}
          </div>

          <motion.p
                    viewport={{once: true}}
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}
            className="text-justify text-sm"
          >
            {
              ` To be the leading service-oriented company, setting the 
                benchmark in construction, finishing and furnishing through innovative 
                solutions, exceptional craftsmanship and timely delivery. At Acegeld, we 
                strive to exceed expectations, transform visions to remarkable realities and 
                become the number one choice for quality and excellence.`
            }
          </motion.p>
        </div>



        <div className="w-full flex flex-col gap-y-3">
          <div className="flex ">
            {"What We Do".split("").map((char, index) => (
              <motion.p
                    viewport={{once: true}}
                key={`Welcome to${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={index}
                style={{ whiteSpace: "pre-wrap" }}
                className="base-color1 text-xl font-bold "
              >
                {char}
              </motion.p>
            ))}
          </div>

          <motion.p
                    viewport={{once: true}}
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}
            className="text-justify text-sm"
          >
            {
              `At Acegeld, we deliver exceptional solutions in construction, 
              finishing and furnishing. We create spaces that are structurally sound, 
              visually stunning and tailored to our clients’ needs. 
              From concept to completion, we ensure every project meets the highest 
              standards of quality, safety and innovation. With a steadfast commitment to 
              delivering on time and on schedule, we build homes, design work spaces and 
              craft infrastructure that inspire and endure. At Acegeld we turn vision to 
              reality.`
            }
          </motion.p>
        </div>


        <div className="w-full flex flex-col gap-y-3">
          <div className="flex ">
            {"Why Choose Us".split("").map((char, index) => (
              <motion.p
                    viewport={{once: true}}
                key={`Welcome to${index}`}
                variants={animateGradualSpacing}
                initial={"offscreen"}
                whileInView={"onscreen"}
                custom={index}
                style={{ whiteSpace: "pre-wrap" }}
                className="base-color1 text-xl font-bold "
              >
                {char}
              </motion.p>
            ))}
          </div>


          <motion.p
                    viewport={{once: true}}
            variants={animateFadeUp}
            initial={"offscreen"}
            whileInView={"onscreen"}
            custom={0}
            className="text-justify text-sm"
          >
            {
              `At Acegeld, we pride ourselves on delivering excellence in every aspect of construction, finishing, and furnishing. Here’s why clients trust us to bring their visions to life:`
            }
          </motion.p>

          <ul className="flex flex-col gap-y-3">
            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"1. Expertise You Can Count On: "}</span>
              {
                "With years of experience, our team of skilled professionals ensures precision and quality in every project. From groundbreaking construction to the finest finishing touches, we excel in creating spaces that inspire."
              }
            </motion.li>

            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"2. Tailored Solutions: "}</span>
              {
                "We understand that every project is unique. That’s why we offer personalized services, ensuring your space reflects your style, needs, and budget."
              }
            </motion.li>

            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"Timely Delivery: "}</span>
              {
                "Your time is valuable, and we ensure your projects are completed on schedule."
              }
            </motion.li>

            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"3. End-to-End Services: "}</span>
              {"Acegeld is your one-stop solution. Whether you need construction, interior finishing, or custom furnishing, we manage everything from concept to completion seamlessly.."}
            </motion.li>

            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"4. Commitment to Quality: "}</span>
              {
                "We use only the highest quality materials and industry-best practices to deliver results that stand the test of time. Your satisfaction is our top priority."
              }
            </motion.li>

            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"5. Timely Delivery: "}</span>
              {
                "We respect your time and work efficiently to meet deadlines without compromising on quality."
              }
            </motion.li>

            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"6. Transparent Pricing: "}</span>
              {
                "No hidden fees, no surprises—just clear and competitive pricing. We provide detailed cost breakdowns to help you plan with confidence."
              }
            </motion.li>

            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"7. Eco-Friendly Practices: "}</span>
              {
                "We care about the environment and strive to incorporate sustainable materials and practices in our projects whenever possible."
              }
            </motion.li>

            <motion.li
                    viewport={{once: true}}
              variants={animateFadeUp}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="text-justify text-sm"
            >
              <span className="font-bold">{"8. Outstanding Customer Support: "}</span>
              {
                "Our team is always ready to assist you, from the initial consultation to post-project follow-ups. Your peace of mind is important to us."
              }
            </motion.li>

          </ul>
        </div>
      </div>

      <div
        ref={divCounterRef}
        className="w-full h-full grid lg:grid-cols-4 grid-cols-2 justify-center items-center gap-x-16 gap-y-10"
      >
        {divCounterView && (
          <>
            <motion.div
                    viewport={{once: true}}
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0}
              className="flex gap-x-3 font-bold"
            >
              <BsHouses className="lg:size-[50px] size-[30px]" />

              <div className="flex flex-col">
                <div className="flex items-center">
                  <CountUp
                    end={30}
                    className="lg:text-4xl text-3xl base-color1"
                  />

                  <h2 className="lg:text-4xl text-3xl base-color1">{"+"}</h2>
                </div>

                <h3>{"Houses"}</h3>
              </div>
            </motion.div>

            <motion.div
                    viewport={{once: true}}
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.3}
              className="flex gap-x-3 font-bold"
            >
              <GrProjects className="lg:size-[50px] size-[30px]" />

              <div className="flex flex-col">
                <div className="flex items-center">
                  <CountUp
                    end={5}
                    className="lg:text-4xl text-3xl base-color1"
                  />

                  <h2 className="lg:text-4xl text-3xl base-color1">{"+"}</h2>
                </div>

                <h3>{"Projects"}</h3>
              </div>
            </motion.div>

            <motion.div
                    viewport={{once: true}}
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.6}
              className="flex gap-x-3 font-bold"
            >
              <LiaAwardSolid className="lg:size-[50px] size-[30px]" />

              <div className="flex flex-col">
                <div className="flex items-center">
                  <CountUp
                    end={10}
                    className="lg:text-4xl text-3xl base-color1"
                  />

                  <h2 className="lg:text-4xl text-3xl base-color1">{"+"}</h2>
                </div>

                <h3>{"Awards"}</h3>
              </div>
            </motion.div>

            <motion.div
                    viewport={{once: true}}
              variants={animateFromRight}
              initial={"offscreen"}
              whileInView={"onscreen"}
              custom={0.9}
              className="flex gap-x-3 font-bold"
            >
              <PiUsersThree className="lg:size-[50px] size-[30px]" />

              <div className="flex flex-col">
                <div className="flex items-center">
                  <CountUp
                    end={105}
                    className="lg:text-4xl text-3xl base-color1"
                  />

                  <h2 className="lg:text-4xl text-3xl base-color1">{"+"}</h2>
                </div>

                <h3>{"Clients"}</h3>
              </div>
            </motion.div>
          </>
        )}
      </div>

      <div className="lg:w-[40%] md:w-[50%] w-full flex flex-col gap-y-2 ">

      <motion.p
                    viewport={{once: true}}
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0}
          className="text-sm"
        >
          {`Transform Your Space with Acegeld.`}
        </motion.p>


        <motion.p
                    viewport={{once: true}}
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0}
          className="text-sm"
        >
          {`Let us turn your vision into reality. Partner with us for innovative designs, flawless finishes, and impeccable furnishing services.`}
        </motion.p>

        <motion.p
                    viewport={{once: true}}
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0}
          className="font-bold"
        >
          {`Ready to start? Contact us today to discuss your project!`}
        </motion.p>

        <motion.div
          viewport={{ amount: 0.4, once: true }}
          variants={animateFadeUp}
          initial={"offscreen"}
          whileInView={"onscreen"}
          custom={0.2}
        >
          <Link href={"/pages/client-pages/highlights-page"}>
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
  );
};
