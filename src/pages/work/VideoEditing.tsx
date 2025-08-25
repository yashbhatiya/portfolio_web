import React, { ReactElement, useState, useRef } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import InteractiveCanvas from '@/components/InteractiveCanvas';
import { motion } from "framer-motion";

const videos = [
    "/videos/project1.mp4",
    "/videos/project2.mp4",
    "/videos/project3.mp4",
    "/videos/project4.mp4",
    "/videos/project6.mp4",
];

const tools = [
    { name: "Pinterest", logo: "/logos/pinterest.svg" },
    { name: "Premmiere Pro", logo: "/logos/pr.svg" },
    { name: "Instagram", logo: "/logos/instagram.svg" },
    { name: "After Effects", logo: "/logos/ae.svg" },
    { name: "Notion", logo: "/logos/notion.svg" },
    { name: "Envato", logo: "/logos/envato.svg" },
    { name: "Photoshop", logo: "/logos/photoshop.svg" },
    { name: "Figma", logo: "/logos/figma.svg" },
    { name: "X", logo: "/logos/x.svg" }
];

const VideoPortfolioPage = (): ReactElement => {
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const [mutedStates, setMutedStates] = useState<boolean[]>(videos.map(() => true));

    const handleMouseEnter = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.play();
        }
    };

    const handleMouseLeave = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.pause();
            video.currentTime = 0; // reset to start
        }
    };

    const toggleMute = (index: number) => {
        const video = videoRefs.current[index];
        if (video) {
            video.muted = !video.muted;
            const newMutedStates = [...mutedStates];
            newMutedStates[index] = video.muted;
            setMutedStates(newMutedStates);
        }
    };

    return (
        <>
            <CustomCursor />
            <InteractiveCanvas />

            <div className="min-h-screen">
                {/* Back Nav */}
                <nav className="px-6 md:px-12 lg:px-24 py-8">
                    <Link
                        to="/work"
                        className="flex items-center text-lg font-medium group transition-all duration-300"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Works
                    </Link>
                </nav>

                {/* Hero Section with Multiple Videos */}
                <div className="relative px-6 md:px-12 lg:px-24 py-12">
                    <div className="max-w-7xl mx-auto justify-center">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 animate-slide-down opacity-0" style={{ animationDelay: '3.0s' }}>

                            Hi, this is my Video editing Portfolio

                        </h1>
                        <h2 className="bg-black text-white rounded-full px-6 py-2 text-sm md:text-base text-center">
                            Transforming Footage into Emotion
                        </h2>




                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            {videos.map((src, index) => (

                                <div
                                    key={index}
                                    className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                >
                                    <video
                                        ref={(el) => (videoRefs.current[index] = el)}
                                        src={src}
                                        muted={mutedStates[index]}
                                        loop
                                        className="w-full h-full object-cover rounded-2xl"
                                    />
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleMute(index);
                                        }}
                                        className="absolute bottom-3 right-3 bg-black/60 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition"
                                    >
                                        {mutedStates[index] ? "Unmute" : "Mute"}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Details */}
                <div className="px-6 md:px-6 lg:px-12 py-6">
                    <div className="max-w-7xl mx-auto space-y-6">
                        <div className="prose prose-lg max-w-none">
                            <h2 className="text-4xl font-semibold mb-3">These video projects showcase my creativity, editing, and storytelling skills.
                                Each clip demonstrates different aspects of my work and reflects my ability to
                                adapt across various styles and formats.</h2>
                        </div>

                        {/* Tech Stack / Tools */}
                        <div className="flex flex-wrap justify-center gap-3 mt-6">
                            {['Premiere Pro', 'After Effects', 'Motion Design', 'UI Animation', '3D Animation', 'Cinematography', 'Color Grading'].map((tech, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-100 px-3 py-1.5 rounded-md text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Future Plans */}
                <div className="bg-black text-white py-12 justify-center">
                    <h2 className="text-center text-3xl font-bold mb-8">My Workflow</h2>
                    <div className="flex flex-warp gap-8 max-w-5xl mx-auto px-6">
                        {tools.map((tool, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.1 }}
                                className="flex flex-col items-center space-y-2"
                            >
                                <img
                                    src={tool.logo}
                                    alt={tool.name}
                                    className="w-16 h-16 object-contain"
                                />
                                <p className="text-sm">{tool.name}</p>
                            </motion.div>
                        ))}
                    </div>


                    {/* Return */}
                    <div className="mt-16 text-center">
                        <a href="/work" className="text-center text-blue-500 hover:text-blue-700 underline">
                            Return to Work
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default VideoPortfolioPage;
