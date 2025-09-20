"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>React</li>
        <li>Strapi</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>SQL Server</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Development, HENRY</li>
        <li>Programming Basics, Egg Education</li>
        <li>English Teaching, National University of Cuyo, Argentina</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Full Stack Developer - Henry</li>
        <li>Porgamming Basics - Egg Education</li>
        <li>Intro to Java - Edutin Academy</li>
        <li>Data Structures and Backend with Java - Coursera</li>
        <li>UX UI Web and Mobile Design - UDEMY</li>
        {/* <li>Flutter - UDEMY</li> */}
        <li>Certificate of Proficiency in English, Cambridge University</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.5 }}
      className="text-text-secondary"
      id="about"
    >
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
          <Image
            src="/IMG_1514.jpg"
            alt="aboutImage"
            width={500}
            height={500}
            className="rounded-2xl absolute"
          />
        </div>
        <div className="mt-4 md:mt-0 flex flex-col h-full">
          <h2 className="text-4xl text-left text-secondary font-extralight mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a driven Full Stack Developer with a unique blend of language
            expertise and coding proficiency. I am quite astonished at the
            profound impact that technology is exerting on our well-being, and I
            am increasingly eager to take part in this generational headway.
            Skilled in React.js, Next.js, Node.js, HTML, CSS, and Javascript,
            among others, I am particularly keen for creating appealing
            interfaces and optimizing user performance. My background in English
            translation enhances my clear communication, bridging diverse
            perspectives in global software development. Along with freelance
            Full Stack Developer work, I have recently completed a Web and
            Mobile Design course and a Backend with Java course. I am firmly
            committed to ongoing learning and excited to contribute my evolving
            expertise to the exponential growth in web and mobile development
            for the benefit of our community.
          </p>
          <div className="flex flex-row justify-start mt-8 text-2xl">
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
