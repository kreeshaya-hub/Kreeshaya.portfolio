"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/kreeshaya-subramanian-b89562251/",
		label: "LinkedIn",
		handle: "@kreeshaya",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:kreeshayaworks@gmail.com",
		label: "Email",
		handle: "kreeshayaworks@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/kreeshaya-hub",
		label: "Github",
		handle: "kreeshaya-hub",
	},
];

export default function Example() {
	const [showContent, setShowContent] = useState(false);
	const [showTitleInNavbar, setShowTitleInNavbar] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowContent(true);
		}, 2000); // same 2s delay as other pages
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation key="contact" currentPage="contact" />

			{/* Sliding Title */}
			<motion.div
				className="fixed left-0 right-0 flex justify-center z-40"
				initial={{ top: "50%", transform: "translateY(-50%)", opacity: 1 }}
				animate={{ top: "5.5rem", transform: "translateY(0%)", opacity: 1 }}
				transition={{ duration: 1.5, ease: "easeInOut" }}
				onAnimationComplete={() => setShowTitleInNavbar(true)}
			>
				<h1 className="py-3.5 px-0.5 text-4xl text-transparent bg-white bg-clip-text cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-7xl whitespace-nowrap">
					Contact
				</h1>
			</motion.div>

			{/* Content fade-in */}
			<AnimatePresence>
				{showContent && (
					<motion.div
						className="container flex items-center justify-center min-h-screen px-4 mx-auto pt-52"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16">
							{socials.map((s, index) => (
								<Card key={index}>
									<Link
										href={s.href}
										target="_blank"
										className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16"
									>
										<span
											className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
											aria-hidden="true"
										/>
										<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
											{s.icon}
										</span>
										<div className="z-10 flex flex-col items-center">
											<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
												{s.handle}
											</span>
											<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
												{s.label}
											</span>
										</div>
									</Link>
								</Card>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
