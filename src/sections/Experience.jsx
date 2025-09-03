import React, { useEffect, useRef } from "react";
import { srConfig } from "../config";
import sr from "../utils/sr";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

export default function Experience() {
  const styles = {
    experienceSection: `py-20`,
    experienceHeading: `text-5xl bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 text-left font-bold mb-10 lg:mb-7`,
    experienceContent: `space-y-8`,
    experienceItem: `flex flex-col md:flex-row gap-4 md:gap-8 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-violet-500 dark:hover:border-violet-500 transition-colors duration-300`,
    experienceHeader: `flex flex-col md:flex-row md:items-center md:justify-between gap-2`,
    experienceTitle: `text-xl font-semibold text-gray-900 dark:text-white`,
    experienceCompany: `text-violet-600 dark:text-violet-400 font-medium`,
    experienceLocation: `text-sm text-gray-500 dark:text-gray-400`,
    experienceDate: `text-sm text-gray-600 dark:text-gray-400`,
    experienceDescription: `text-gray-700 dark:text-gray-300 leading-relaxed`,
    experienceHighlights: `mt-3 space-y-1`,
    experienceHighlight: `text-sm text-gray-600 dark:text-gray-400 before:content-['•'] before:mr-2 before:text-violet-500`,
    experienceSkills: `flex flex-wrap gap-2 mt-3`,
    skillTag: `px-3 py-1 text-xs font-medium bg-violet-100 dark:bg-violet-900 text-violet-800 dark:text-violet-200 rounded-full`,
  };

  const experiences = [
    // {
    //   title: "Fullstack & Mobile Developer",
    //   company: "Australian Mining Company",
    //   date: "Dec 2024 - June 2025",
    //   location: "Australia · Remote",
    //   description: "Developed comprehensive applications for mining operations, including both web and mobile solutions to support various mining activities and operational requirements.",
    //   highlights: [
    //     "Built full-stack applications for mining operations management",
    //     "Developed mobile applications for field workers and operational staff",
    //     "Created solutions for real-time data monitoring and reporting",
    //     "Implemented systems for equipment tracking and maintenance scheduling",
    //     "Designed user interfaces optimized for challenging field conditions"
    //   ],
    //   skills: ["Full-stack Development", "Mobile Development", "React Native", "React.js", "Node.js", "Mining Software", "Real-time Data", "Field Applications", "Equipment Management", "Operational Systems"]
    // },
  
    {
      title: "Co-Founder & Development Team Lead",
      company: "PT SKY MULTI CREATIVE",
      date: "Nov 2024 - Present",
      location: "Bandung, Jawa Barat, Indonesia · Remote",
      description: "Currently developing a web platform designed to simplify the concert ticketing process. This project aims to deliver a seamless digital solution, making it easier and safer for music fans to access their favorite events.",
      highlights: [
        "Dynamic Search System: Allowing users to find concerts based on location, category, or favorite artists",
        "Streamlined Ticket Purchase Process: Designing a user-friendly checkout experience with strong transaction security",
        "Real-Time Notifications & Updates: Keeping users informed about upcoming events and their interests",
        "Data Management for Organizers: Developing an admin dashboard to monitor ticket sales and manage events efficiently"
      ],
      skills: ["TypeScript", "MySQL", "React.js", "Node.js", "API Development", "Database Design", "System Architecture", "Team Leadership", "Project Management", "Performance Optimization"]
    },
    // {
    //   title: "IT Developer",
    //   company: "TrustMetric",
    //   date: "Sep 2024 - Present",
    //   location: "Jakarta Pusat, Jakarta Raya, Indonesia · Contract",
    //   description: "As an IT Developer, I build secure API endpoints, backoffice systems, and customer portals using RSA encryption and digital signatures. I ensure performance, scalability, and data integrity while collaborating with cross-functional teams to deliver responsive and secure web applications that follow industry best practices for usability, security, and maintainability.",
    //   highlights: [
    //     "Built secure API endpoints with RSA encryption and digital signatures",
    //     "Developed backoffice systems and customer portals",
    //     "Ensured performance, scalability, and data integrity",
    //     "Collaborated with cross-functional teams",
    //     "Implemented industry best practices for security and maintainability"
    //   ],
    //   skills: ["API Development", "RSA Encryption", "Digital Signatures", "Backoffice Systems", "Customer Portals", "Security", "Performance Optimization", "Scalability", "Data Integrity", "Cross-functional Collaboration", "Industry Best Practices"]
    // },
    {
      title: "Web Developer & Mobile Developer",
      company: "PT Sempoa Prima Teknologi",
      date: "Mar 2024 - Present",
      location: "Jakarta Barat, Jakarta Raya, Indonesia · On-site",
      description: "Developing and maintaining ERP systems and financial management platforms. Working on multiple projects including Sempoa ERP system and Biko Processing platform.",
      highlights: [
        "Sempoa ERP System: Asset management, depreciation, consolidated reports, and multi-company structure",
        "Biko Processing: Invoice processing, daily reports, partner management, and API development",
        "Anugrah Widjaja And Partners: Professional company profile website development"
      ],
      skills: ["Laravel", "WordPress", "Express.js", "MySQL", "jQuery", "API Development", "ERP Systems", "Financial Systems", "Cron Jobs", "Multi-company Architecture"]
    },
    {
      title: "Lead Frontend",
      company: "Freelance",
      date: "Apr 2025 - Aug 2025",
      location: "Jakarta Raya, Indonesia · Remote",
      description: "Served as Lead Frontend Developer for a government project at the Attorney General's Office of the Republic of Indonesia. Led frontend development team and implemented modern, responsive, and secure web interfaces.",
      highlights: [
        "Led frontend development team for government project",
        "Designed and implemented modern, responsive, and secure web interfaces",
        "Oversaw frontend application architecture",
        "Collaborated with backend teams and ensured code quality"
      ],
      skills: ["Frontend Leadership", "React.js", "TypeScript", "Government Systems", "Security Standards", "Team Management", "System Architecture", "Performance Optimization"]
    }
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
    <section id="experience" ref={revealContainer} className={styles.experienceSection}>
      <div className="inline-flex space-x-2">
        <h1 className={styles.experienceHeading}>Experience</h1>
      </div>
      <div className={styles.experienceContent}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceItem}>
            <div className="flex-1">
              <div className={styles.experienceHeader}>
                <div>
                  <h3 className={styles.experienceTitle}>{experience.title}</h3>
                  <p className={styles.experienceCompany}>{experience.company}</p>
                  <p className={styles.experienceLocation}>{experience.location}</p>
                </div>
                <p className={styles.experienceDate}>{experience.date}</p>
              </div>
              <p className={styles.experienceDescription}>{experience.description}</p>
              {experience.highlights && (
                <div className={styles.experienceHighlights}>
                  {experience.highlights.map((highlight, highlightIndex) => (
                    <p key={highlightIndex} className={styles.experienceHighlight}>
                      {highlight}
                    </p>
                  ))}
                </div>
              )}
              <div className={styles.experienceSkills}>
                {experience.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.skillTag}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 