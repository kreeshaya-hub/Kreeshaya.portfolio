"use client";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

interface NavigationProps {
	currentPage: "webDeveloper" | "multimediaDesigner" | "contact";
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		);
		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/500 border-zinc-800"
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{currentPage === "contact" ? (
							<>
								<button
									onClick={() => router.push("/webDeveloper")}
									className="duration-200 text-zinc-400 hover:text-zinc-100"
								>
									Web Developer
								</button>
								<button
									onClick={() => router.push("/multimediaDesigner")}
									className="duration-200 text-zinc-400 hover:text-zinc-100"
								>
									Multimedia Designer
								</button>
							</>
						) : (
							<button
								onClick={() =>
									setTimeout(() => {
										router.push(
											currentPage === "multimediaDesigner"
												? "/webDeveloper"
												: "/multimediaDesigner"
										);
									}, 10)
								}
								className="duration-200 text-zinc-400 hover:text-zinc-100"
							>
								{currentPage === "multimediaDesigner"
									? "Web Developer"
									: "Multimedia Designer"}
							</button>
						)}

						<button
							onClick={() => router.push("/contact")}
							className="duration-200 text-zinc-400 hover:text-zinc-100"
						>
							Contact
						</button>
					</div>

					<button
						onClick={() => router.push("/")}
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6" />
					</button>
				</div>
			</div>
		</header>
	);
};
