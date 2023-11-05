import React, { useEffect, useRef } from "react";
import { srConfig } from "../config";
import sr from "../utils/sr";
import LinkTag from "../components/LinkTag";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function About() {
  const styles = {
    aboutSection: `py-20`,
    aboutHeading: `text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 text-left font-bold mb-10 lg:mb-7`,
    aboutContent: `flex flex-col xl:flex-row gap-5 md:space-x-10 justify-between`,
    aboutText: `space-y-3 order-2 mt-5 md:mt-0 xl:order-none tracking-wide leading-7 md:leading-6`,
    aboutListSkills: `grid grid-cols-2 gap-3 md:gap-2 list-inside`,
    aboutImageContent: `flex mx-auto rounded-md overflow-hidden justify-center order-1 xl:order-none items-center`,
    aboutImage: `object-contain w-7/12 md:w-8/12 lg:w-5/12 xl:w-full rounded-xl grayscale hover:grayscale-0`,
  };

  const skills = [
    "JavaScript",
    "HTML",
    "React Js || Vite Js",
    "Node JS [ Express , Prisma ]",
    "Tailwind Css",
    "MySQL",
  ];
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <section id="about" ref={revealContainer} className={styles.aboutSection}>
      <div className="inline-flex space-x-2">
        <h1 className={styles.aboutHeading}>About Me</h1>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            Hi, my name is Muhammad M Nasrullah Arif, you can be called Arif and I attended a
            bootcamp at{" "}
            <LinkTag style="text-violet-500 link" url="https://purwadhika.com/">
              Purwadhika Digital School Fullstack Web Developer
            </LinkTag>
          </p>
          <p>
            I am someone who is interested in the world of IT, especially in IT website-based
            programming. At the moment I like programming languages javascript
          </p>
          <p>
            I am very interested in learning new things, especially in the world of IT, and am
            capable work in groups or individually.
          </p>
          <p>Below are some of the skills I have, including::</p>
          <ul className={styles.aboutListSkills}>
            {skills &&
              skills.map((skill, i) => (
                <li className="before:content-['▸'] before:mr-2 before:text-violet-700" key={i}>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
        <div className={styles.aboutImageContent}></div>
      </div>
    </section>
  );
}
