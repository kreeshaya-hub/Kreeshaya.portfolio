"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion, AnimatePresence } from "framer-motion";

export default function WebDeveloper() {
  const [showContent, setShowContent] = useState(false);
  const [showTitleInNavbar, setShowTitleInNavbar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card>
      <div className="flex flex-col items-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Navigation key="web" currentPage="webDeveloper" />

        {/* Title Slide Animation */}
        <motion.div
          className={`fixed top-20 left-0 right-0 flex justify-center z-50 ${
            showContent ? "pointer-events-none" : ""
          }`}
          initial={{ top: "50%", opacity: 1 }}
          animate={showContent ? { top: "0", opacity: 0 } : { top: "50%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => setShowTitleInNavbar(true)}
        >
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
            Web Developer
          </h1>
        </motion.div>

        {/* Animated Content */}
        <AnimatePresence>
          {showContent && (
            <motion.div
              className="w-full px-6 pt-40 mx-auto space-y-12 max-w-7xl lg:px-8 md:space-y-16 md:pt-48 lg:pt-56"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {/* Placeholder: Skills Section */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Skills
                </h2>
                <p className="mt-4 text-zinc-400">
                  Frontend & backend technologies used for building modern web apps.
                </p>
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind", "Node.js", "MongoDB"].map((skill) => (
                    <div
                      key={skill}
                      className="group text-center bg-zinc-800 text-zinc-100 p-4 rounded-lg hover:scale-105 transition-transform duration-300 hover:shadow-xl hover:ring-4 hover:ring-sky-500"
                    >
                      <h3 className="font-bold">{skill}</h3>
                    </div>
                  ))}
                </div>
              </section>

              {/* Placeholder: Tools Section */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Tools I Use
                </h2>
                <p className="mt-4 text-zinc-400">
                  A few dev tools & platforms I work with regularly.
                </p>
                <div className="mt-6 flex flex-wrap gap-4">
                  {["Visual Studio Code", "Git & GitHub", "Figma", "Postman", "Vercel", "Firebase"].map((tool) => (
                    <div
                      key={tool}
                      className="px-4 py-2 bg-zinc-700 rounded-full text-sm text-white shadow hover:scale-105 transition"
                    >
                      {tool}
                    </div>
                  ))}
                </div>
              </section>

              {/* Placeholder: Projects Section */}
              <section>
                <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
                  Recent Projects
                </h2>
                <p className="mt-4 text-zinc-400">Here's a preview of a few apps I’ve built.</p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[1, 2, 3].map((index) => (
                    <Card key={index}>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-white">Project {index}</h3>
                        <p className="mt-2 text-zinc-400 text-sm">
                          This is a placeholder for a web application showcasing frontend and backend integration.
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
