"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Game Development",
    title: "Retro Minecat",
    description:
      "Developed a 3D mobile game featuring procedurally generated levels, interactive mechanics, and custom gameplay systems. Implemented core features such as player movement, collision detection, enemy AI, and dynamic object interactions using Unity and C#. Designed and integrated custom assets, menus, and a scoring system for a seamless user experience.",
    stack: [{ name: "Unity" }, { name: "C#" }, { name: "Blender" }],
    image: "/assets/work/gamePic1.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "project 2",
    description:
      "Tindog is a playful mockup of a Tinder-inspired site for dogs, built using the Bootstrap framework. It features a responsive design and custom styling to create a fun, user-friendly experience while showcasing my front-end development skills.",
    stack: [{ name: "HTML5" }, { name: "CSS3" }, { name: "Bootstrap" }],
    image: "/assets/work/Tindog 1.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Game Development",
    title: "project 3",
    description:
      "Developed a 2D platformer game in Godot, featuring dynamic water mechanics and fast-paced gameplay. Designed and implemented core features such as player movement, level progression, and a scoring system. Modified prebuilt assets, composed original music, and crafted challenging levels to deliver an engaging and cohesive gaming experience.",
    stack: [{ name: "Godot Engine" }, { name: "GDScript" }, { name: "Ableton Live" }],
    image: "/assets/work/risingtides.png",
    live: "https://justyodeling.itch.io/rising-tides",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {/* github project button */}
                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
<SwiperSlide key={index} className="w-full">
  <div className="relative w-full h-[460px] overflow-hidden flex justify-center items-center">
    {/* overlay */}
    <div className="absolute inset-0 bg-transparent z-10"></div>
    {/* image */}
    <Image
      src={project.image}
      alt={`${project.title} image`}
      layout="fill"
      objectFit="contain"
      className="z-0"
    />
  </div>
</SwiperSlide>

                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
