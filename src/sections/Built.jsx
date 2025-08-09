// import React, { useEffect, useRef } from "react";
// import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";
// import { srConfig } from "../config";
// import project1 from "../assets/event.jpg";
// import project2 from "../assets/pizza.jpg";
// import project3 from "../assets/erajaya-maritim.jpeg";
// import project4 from "../assets/instagram.png";

// import LinkTag from "../components/LinkTag";
// import sr from "../utils/sr";
// import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

// export default function Built() {
//   const styles = {
//     builtSection: `py-20 flex flex-col justify-center`,
//     // builtContent: `text-slate-800 dark:text-slate-200`,
//     builtItem: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mb-10`,
//     builtItemSecond: `grid grid-flow-row md:grid-cols-2 md:space-x-10 mt-10`,
//     builtItemCoverImg: `object-cover w-full hover:scale-110	ease-in-out duration-500  `,
//     builtItemCoverImg1: "object-cover w-300 h-100 hover:scale-110 ease-in-out duration-500",
//     builtItemContent: `space-y-5 flex flex-col relative justify-center`,
//     builtItemHeading: `text-xl text-violet-700`,
//     builtItemSubheading: `text-3xl w-max bg-clip-text font-bold`,
//     builtItemText: `leading-7`,
//     builtItemIcon: `w-5 h-5 hover:text-violet-500 motion-reduce:transition-none
//     motion-reduce:hover:transform-none hover:-translate-y-1 duration-100 ease-in`,
//     builtItemLink: `hover:text-violet-500 w-max`,
//   };

//   const revealContainer = useRef(null);
//   const prefersReducedMotion = usePrefersReducedMotion();

//   useEffect(() => {
//     if (prefersReducedMotion) {
//       return;
//     }
//     sr.reveal(revealContainer.current, srConfig());
//   }, []);

//   return (
//     <>
//       {/* <section ref={revealContainer} id="built" className={styles.builtSection}>
//         <h1 className="text-5xl pb-3 bg-clip-text dark:text-transparent bg-gradient-to-r from-violet-500 to-sky-300 mb-8 md:mb-7 font-bold">
//           Some Things I've Built
//         </h1>
//         <div className={styles.builtItem}>
//           <figure>
//             <img
//               className={styles.builtItemCoverImg}
//               draggable="false"
//               loading="lazy"
//               src={project1}
//               alt="project1"
//             />
//           </figure>
//           <div className={styles.builtItemContent}>
//             <h1 className={styles.builtItemHeading}>Featured Project</h1>
//             <LinkTag
//               url="https://event-managements.vercel.app/home"
//               style={styles.builtItemSubheading}
//             >
//               Events Managements
//             </LinkTag>
//             <p className={styles.builtItemText}>
//               A leading event management website, where you can plan, organize and manage your
//               events perfectly.This website can run events, start from business conferences to art
//               exhibitions, wedding parties to music festivals, and all kinds of other activities.
//             </p>
//             <div className="flex flex-row space-x-6">
//               <LinkTag
//                 className={styles.builtItemLink}
//                 url="https://github.com/arif211204/event-managements"
//               >
//                 <FaGithub className={styles.builtItemIcon} />
//               </LinkTag>
//               <LinkTag
//                 className={styles.builtItemLink}
//                 url="https://event-managements.vercel.app/home"
//               >
//                 <FaExternalLinkSquareAlt className={styles.builtItemIcon} />
//               </LinkTag>
//             </div>
//           </div>
//         </div>

//         <div className={styles.builtItemSecond}>
//           <div className={styles.builtItemContent}>
//             <h1 className={styles.builtItemHeading}>Featured Project</h1>
//             <LinkTag
//               url="https://pos-pizzazzz.netlify.app/admin/login"
//               style={styles.builtItemSubheading}
//             >
//               Point Of Sales
//             </LinkTag>
//             <p className={styles.builtItemText}>
//               A Point of Sale (POS) website, designed to help your business manage sales
//               transactions easily and efficiently. POS is a modern solution allows you to accept
//               payments from customers, and manage data sales well.
//             </p>
//             <p>
//               username : admin1
//               <br />
//               <span> password : 12345678</span>
//             </p>
//             <p>
//               username : cashier1
//               <br />
//               <span> password : 12345678</span>
//             </p>
//             <p>
//               If you want to go to the cashier login page, you have to change the route to something
//               like this:
//               <br />
//               https://pos-pizzazzz.netlify.app/cashier/login
//             </p>
//             <div className="flex flex-row space-x-6">
//               <LinkTag
//                 className={styles.builtItemLink}
//                 url="https://github.com/arif211204/POS-PIZZAZZZ"
//               >
//                 <FaGithub className={styles.builtItemIcon} />
//               </LinkTag>
//               <LinkTag
//                 className={styles.builtItemLink}
//                 url="https://pos-pizzazzz.netlify.app/admin/login"
//               >
//                 <FaExternalLinkSquareAlt className={styles.builtItemIcon} />
//               </LinkTag>
//             </div>
//           </div>
//           <figure>
//             <img
//               className={styles.builtItemCoverImg}
//               src={project2}
//               draggable="false"
//               loading="lazy"
//               alt="project1"
//             />
//           </figure>
//         </div>

//         <div className={styles.builtItemSecond}>
//           <figure>
//             <img
//               className={styles.builtItemCoverImg}
//               src={project3}
//               draggable="false"
//               loading="lazy"
//               alt="project1"
//             />
//           </figure>
//           <div className={styles.builtItemContent}>
//             <h1 className={styles.builtItemHeading}>Featured Project</h1>
//             <LinkTag url="https://erajayamaritim.com/" style={styles.builtItemSubheading}>
//               Erajaya Maritim
//             </LinkTag>
//             <p className={styles.builtItemText}>
//               Erajaya Maritim website, an informative and interactive platform supported by
//               WordPress technology. This website is dedicated to providing information about Erajaya
//               Maritim, a company that focuses on the maritime industry and related services.
//             </p>
//             <div className="flex flex-row space-x-6">
//               <LinkTag className={styles.builtItemLink} url="https://erajayamaritim.com/">
//                 <FaExternalLinkSquareAlt className={styles.builtItemIcon} />
//               </LinkTag>
//             </div>
//           </div>
//         </div>

//         <div className={styles.builtItemSecond}>
//           <div className={styles.builtItemContent}>
//             <h1 className={styles.builtItemHeading}>Featured Project</h1>
//             <LinkTag url="https://coinancy.netlify.app" style={styles.builtItemSubheading}>
//               Instagram (Mobile Version)
//             </LinkTag>
//             <p className={styles.builtItemText}>
//               Instagram mobile version clone website! A close replica of the appearance and
//               functionality of the most popular social media platform in the world, namely
//               Instagram. With this clone website, you can experience a similar experience to
//               Instagram from your computer or mobile device. This website allows you to view, upload
//               and share photos just like you do on Instagram official. You can explore the homepage,
//               discover various interesting content, as well interact with other users' posts by
//               giving "Likes," comments and Follow
//             </p>

//             <div className="flex flex-row space-x-6">
//               <LinkTag
//                 className={styles.builtItemLink}
//                 url="https://github.com/arif211204/Intagram-FE"
//               >
//                 <FaGithub className={styles.builtItemIcon} />
//               </LinkTag>
//               {/* <LinkTag
//                 className={styles.builtItemLink}
//                 url="https://pos-pizzazzz.netlify.app/admin/login"
//               >
//                 <FaExternalLinkSquareAlt className={styles.builtItemIcon} />
//               </LinkTag> */}
//             </div>
//           </div>
//           <figure>
//             <img
//               className={styles.builtItemCoverImg1}
//               width={200}
//               height={100}
//               src={project4}
//               draggable="false"
//               loading="lazy"
//               alt="project1"
//             />
//           </figure>
//         </div>
//       </section> */}
//     </>
//   );
// }
