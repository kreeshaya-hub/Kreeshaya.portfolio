"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { motion, AnimatePresence } from "framer-motion";

// Featured work data...

export default function WebDeveloper() {
  const [showContent, setShowContent] = useState(false);
  const [showTitleInNavbar, setShowTitleInNavbar] = useState(false);
  const categories = ["Commercial Films", "Amazon Prime Video Specials", "Social Media Content"];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card>
      <div className="flex flex-col items-center w-screen min-h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Navigation currentPage="webDeveloper" />
        
        <motion.div 
          className="fixed top-20 left-0 right-0 flex justify-center z-50"
          initial={{ top: "50%", opacity: 1 }}
          animate={showContent ? { top: "0", opacity: 0 } : { top: "50%", opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          onAnimationComplete={() => setShowTitleInNavbar(true)}
        >
          <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap bg-clip-text">
            Web Developer
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
              {/* Add your web developer content here */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Card>
  );
}
