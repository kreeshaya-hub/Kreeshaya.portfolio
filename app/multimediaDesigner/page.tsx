"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion, AnimatePresence } from "framer-motion";

// Featured work
const projectsData = [
  {
    title: "Comedy Crowd Work",
    description: "Assistant Video Editor",
    url: "https://www.primevideo.com/detail/Rahul-Talks-To-People/0I2ET4A3FLUF8NJRU26JKAYEZM",
    thumbnail: "https://img.youtube.com/vi/csSMlWaOHYU/hqdefault.jpg",
    category: "Amazon Prime Video Specials",
  },
  {
    title: "Stand Up Special",
    description: "Assistant Video Editor",
    url: "https://www.primevideo.com/detail/Tathastu/0KLOGNAVG5L4R5TWY2G6VWKRG0",
    thumbnail: "https://img.youtube.com/vi/DhVzCgF7-b4/hqdefault.jpg",
    category: "Amazon Prime Video Specials",
  },
  {
    title: "Stand Up Special",
    description: "Assistant Video Editor",
    url: "https://www.primevideo.com/detail/Dongri-Danger/0P8UKXYQO8LF5A43UMHK3VX2GC/ref=atv_nb_lcl_ta_IN",
    thumbnail: "https://img.youtube.com/vi/kbjI2NhXWO8/hqdefault.jpg",
    category: "Amazon Prime Video Specials",
  },
  {
    title: "TVC Ad for Halidram's",
    description: "Lead Video Editor",
    url: "https://youtu.be/TkErtmsuiVI?si=2_3H_bYPrXEIMctK",
    thumbnail: "https://img.youtube.com/vi/TkErtmsuiVI/maxresdefault.jpg",
    category: "Commercial Films",
  },
  {
    title: "Z&M Commercial",
    description: "Lead Video Editor",
    url: "https://youtu.be/lP-Lk-GoX-A?si=05GvsoA3jY_yNca1",
    thumbnail: "https://img.youtube.com/vi/lP-Lk-GoX-A/maxresdefault.jpg",
    category: "Commercial Films",
  },
  {
    title: "Farzi Promo Commercial",
    description: "Lead Video Editor",
    url: "https://youtu.be/mvvruAVL90o?si=wE7Yr65ZJ7EQmJok",
    thumbnail: "https://img.youtube.com/vi/mvvruAVL90o/maxresdefault.jpg",
    category: "Commercial Films",
  },
  {
    title: "Masaba Masaba Show Promo",
    description: "Lead Video Editor",
    url: "https://www.instagram.com/reel/CglklBzJHaW/?igshid=MDE2OWE1N2Q%3D",
    thumbnail: "https://img.youtube.com/vi/rExZeNAxJu4/hqdefault.jpg",
    category: "Social Media Content",
  },
  {
    title: "Swiggy Promo",
    description: "Associate Video Editor",
    url: "https://youtu.be/18lzrEoGfWk?si=xqXT03vRX3GNbK1k",
    thumbnail: "https://img.youtube.com/vi/18lzrEoGfWk/hqdefault.jpg",
    category: "Social Media Content",
  },
  {
    title: "Talk Show",
    description: "Lead Video Editor",
    url: "https://youtu.be/VxQPwld0T_8?si=tdmwDIKEUXgYsIjD",
    thumbnail: "https://img.youtube.com/vi/VxQPwld0T_8/hqdefault.jpg",
    category: "Social Media Content",
  },
];

export default function MultimediaDesigner() {
  const [showContent, setShowContent] = useState(false);
  const [showTitleInNavbar, setShowTitleInNavbar] = useState(false);
  const categories = ["Commercial Films", "Amazon Prime Video Specials", "Social Media Content"];

  useEffect(() => {
    // Start the animation sequence after the initial page load
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000); // Wait for 2 seconds before starting the transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card>
      <div className="flex flex-col items-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Navigation currentPage="multimedia" />
        
        <motion.div 
          className="fixed top-20 left-0 right-0 flex justify-center z-50"
          initial={{ top: "50%", opacity: 1 }}
          animate={showContent ? { top: "0", opacity: 0 } : { top: "50%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => setShowTitleInNavbar(true)}
        >
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
            Multimedia Designer
          </h1>
        </motion.div>

        <AnimatePresence>
          {showContent && (
            <motion.div 
              className="w-full px-6 pt-40 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-48 lg:pt-56"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row gap-16">
                {/* Skills Section */}
                <div className="lg:w-2/3">
                  <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                    Skills
                  </h2>
                  <p className="mt-4 text-zinc-400">
                    Please have a look at my skills before diving into my portfolio. I am proficient in a wide range of skills related to multimedia production, video editing, and web design.
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                    <div className="group text-center bg-zinc-800 text-zinc-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:ring-4 hover:ring-orange-500">
                      <h3 className="font-bold">Video Editing</h3>
                      <p className="text-zinc-400">Premiere Pro, After Effects, Final Cut Pro, Adobe Audition (Audio-editing)</p>
                    </div>
                    <div className="group text-center bg-zinc-800 text-zinc-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:ring-4 hover:ring-orange-500">
                      <h3 className="font-bold">Web Design</h3>
                      <p className="text-zinc-400">Figma, Adobe XD, Canva, Adobe Photoshop, Adobe Illustrator</p>
                    </div>
                    <div className="group text-center bg-zinc-800 text-zinc-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:ring-4 hover:ring-orange-500">
                      <h3 className="font-bold">Web Development</h3>
                      <p className="text-zinc-400">HTML, CSS, JavaScript, Express, React, Next.js</p>
                    </div>
                    <div className="group text-center bg-zinc-800 text-zinc-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:ring-4 hover:ring-orange-500">
                      <h3 className="font-bold">Miscellaneous</h3>
                      <p className="text-zinc-400">Adaptability Skills, Communication Skills, Leadership Skills</p>
                    </div>
                  </div>
                </div>
                {/* Previously Worked For Section */}
                <div className="lg:w-1/3 text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
                    Previously worked for
                  </h2>
                  <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4">
                    {/* Clickable logos with hover effects */}
                    <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dv_web_force_root" target="_blank" rel="noopener noreferrer">
                      <img src="/AmazonPrime.png" alt="Amazon Prime Video" className="h-20 mx-auto object-contain bg-zinc-800 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:ring-4 hover:ring-orange-500" />
                    </a>
                    <a href="https://www.youtube.com/c/TheBiggerPicture" target="_blank" rel="noopener noreferrer">
                      <img src="/BPF.jpg" alt="The Bigger Picture Films" className="h-20 mx-auto object-contain bg-zinc-800 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:ring-4 hover:ring-orange-500" />
                    </a>
                    <a href="https://ottawa.ca/en" target="_blank" rel="noopener noreferrer">
                      <img src="/cityOfOttawa.png" alt="The City of Ottawa" className="h-20 mx-auto object-contain bg-zinc-800 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:ring-4 hover:ring-orange-500" />
                    </a>
                    <a href="https://www.linkedin.com/company/only-much-louder/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                      <img src="/OML.png" alt="Only Much Louder" className="h-20 mx-auto object-contain bg-zinc-800 rounded-lg p-3 transition-transform duration-300 hover:scale-110 hover:ring-4 hover:ring-orange-500" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-zinc-800" />

              {/* Projects Section */}
              <div className="max-w-2xl mx-auto lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Projects
                </h2>
                <p className="mt-4 text-zinc-400">
                  Here are some of my recent multimedia/video editing projects, including YouTube content, OTT shows, TVC commercials, and social media content.
                </p>
              </div>

              <div className="w-full h-px bg-zinc-800" />

              {categories.map((category) => (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-zinc-100 mt-10">{category}</h3>
                  <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
                    {projectsData
                      .filter((project) => project.category === category)
                      .map((project, index) => (
                        <Card key={index}>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                          >
                            <article className="relative w-full h-full p-4 md:p-8 transition-transform duration-300 group-hover:scale-105">
                              <div className="flex items-center justify-between gap-2">
                                <div className="text-xs text-zinc-100">Featured Work</div>
                              </div>

                              <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="mt-4 rounded-md w-full h-52 object-cover group-hover:drop-shadow-orange"
                              />

                              <h2 className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white">
                                {project.title}
                              </h2>
                              <p className="mt-2 text-zinc-400 group-hover:text-zinc-300">
                                {project.description}
                              </p>

                              <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
                                <p className="text-zinc-200 group-hover:text-zinc-50">
                                  Watch now &rarr;
                                </p>
                              </div>
                            </article>
                          </a>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
