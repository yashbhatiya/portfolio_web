// src/pages/work/FPSGamePage.tsx
import React, { ReactElement, useState } from 'react';
import { ArrowLeft, Gamepad, Cpu, Server, Zap, Map, Users, Code, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import InteractiveCanvas from '@/components/InteractiveCanvas';

interface FeatureCard {
    icon: ReactElement;
    title: string;
    description: string;
}

interface TeamMember {
    name: string;
    role: string;
}

const FPSGamePage = (): ReactElement => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const gameImages = [
        "/FPSGame1.png",
        "/FPSGame2.png",
        "/FPSGame3.png"
    ];

    const teamMembers: TeamMember[] = [
        { name: 'Yash Bhatiya', role: 'Lead Developer' },
        { name: 'Jal Kaka', role: '3D Modeling & Animation' },
        { name: 'Rushil Vyas', role: 'AI Programming' },
    ];

    const features: FeatureCard[] = [
        {
            icon: <Gamepad size={24} />,
            title: 'Immersive Gameplay',
            description: 'Realistic first-person mechanics with responsive controls and dynamic environments'
        },
        {
            icon: <Cpu size={24} />,
            title: 'Advanced AI',
            description: 'Three-tier enemy AI system with varying difficulty levels and intelligent pathfinding'
        },
        {
            icon: <Server size={24} />,
            title: 'Multiplayer Ready',
            description: 'Architecture designed for future multiplayer implementation'
        },
        {
            icon: <Zap size={24} />,
            title: 'High Performance',
            description: 'Optimized to run at 120 FPS on diverse hardware configurations'
        },
        {
            icon: <Map size={24} />,
            title: 'Campus Environment',
            description: 'Detailed recreation of Parul University campus as game map'
        },
        {
            icon: <Volume2 size={24} />,
            title: 'Immersive Audio',
            description: 'Directional sound design with weapon-specific effects and environmental audio'
        },
    ];

    const metrics = [
        { value: '120', label: 'FPS Performance', unit: 'FPS' },
        { value: '3', label: 'Weapon Types', unit: '' },
        { value: '92%', label: 'Player Satisfaction', unit: '' },
        { value: '0.2s', label: 'AI Response Time', unit: '' },
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === gameImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? gameImages.length - 1 : prevIndex - 1
        );
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <>

            <CustomCursor />
            <InteractiveCanvas />
            <div className="min-h-screen">
                <nav className="px-6 md:px-12 lg:px-24 py-8">
                    <Link
                        to="/work"
                        className="flex items-center text-lg font-medium group transition-all duration-300"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Works
                    </Link>
                </nav>

                {/* Hero Section with Game Screen Carousel */}
                <div className="relative px-6 md:px-12 lg:px-24 py-12">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                {/* Game Screen Frame */}
                                <div className="absolute inset-0 rounded-2xl transform rotate-1 -z-10"></div>
                                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-700">
                                    <div className="aspect-video relative overflow-hidden">
                                        {/* Carousel navigation buttons */}
                                        <button
                                            onClick={prevImage}
                                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all"
                                            aria-label="Previous image"
                                        >
                                            <ChevronLeft className="text-white w-6 h-6" />
                                        </button>

                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 rounded-full p-2 hover:bg-black/70 transition-all"
                                            aria-label="Next image"
                                        >
                                            <ChevronRight className="text-white w-6 h-6" />
                                        </button>

                                        {/* Image counter */}
                                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-black/70 px-3 py-1 rounded-full text-white text-sm">
                                            {currentImageIndex + 1} / {gameImages.length}
                                        </div>

                                        {/* Game Images */}
                                        <div className="relative w-full h-full">
                                            {gameImages.map((image, index) => (
                                                <div
                                                    key={index}
                                                    className={`absolute inset-0 transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                                        }`}
                                                >
                                                    <img
                                                        src={image}
                                                        alt={`FPS Game Screenshot ${index + 1}`}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            ))}
                                        </div>

                                        {/* Game UI Elements */}
                                        <div className="absolute top-4 left-4 flex items-center z-10">
                                            <div className="bg-red-500 w-3 h-3 rounded-full mr-2"></div>
                                            <span className="text-white text-sm font-mono">REC</span>
                                        </div>
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="text-white font-mono text-sm">120 FPS</div>
                                        </div>

                                    </div>

                                    {/* Game Info Footer */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/30 p-3 text-center">
                                        <div className="text-gray-400 text-sm">
                                            Parul University Campus • Unity Engine • Multiplayer Ready
                                        </div>
                                    </div>
                                </div>

                                {/* Thumbnail Navigation */}
                                <div className="flex justify-center mt-6 space-x-3">
                                    {gameImages.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToImage(index)}
                                            className={`w-3 h-3 rounded-full transition-all ${index === currentImageIndex
                                                ? 'bg-blue-600 scale-125'
                                                : 'bg-gray-300 hover:bg-gray-400'
                                                }`}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h1 className="text-4xl md:text-5xl font-bold">
                                    3D First Person Shooting Game
                                </h1>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    {teamMembers.map((member, i) => (
                                        <div
                                            key={i}
                                            className="bg-gray-100 px-4 py-2 rounded-lg flex items-center"
                                        >
                                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                            <span className="font-medium">{member.name}</span>
                                            <span className="text-gray-500 ml-2">{member.role}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="prose prose-lg max-w-none">
                                    <h3 className="text-xl font-semibold mb-3">ABSTRACT</h3>
                                    <p className="text-gray-700">
                                        Innovative Warfare is a 3D first-person shooter designed for immersive gaming experiences.
                                        Developed using Unity Engine, it features responsive controls, dynamic maps, engaging game modes,
                                        and multiplayer support. The game showcases our team's creativity and technical expertise in
                                        delivering compelling FPS experiences within academic environments.
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-3 mt-6">
                                    {['Unity Engine', 'C# Programming', 'Blender', 'AI Pathfinding', 'NavMesh',
                                        'Raycasting', '3D Modeling', 'Game Optimization'].map((tech, i) => (
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
                    </div>
                </div>

                {/* Features Section */}
                <div className="px-6 md:px-12 lg:px-24 py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center bg-gray-200 px-4 py-1 rounded-full mb-4">
                                <Code className="mr-2 h-4 w-4" />
                                <span className="font-medium">TECHNICAL FEATURES</span>
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Game Development Architecture</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Advanced systems working together to create an immersive gaming experience
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="text-blue-600 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                    <p className="text-gray-700">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Implementation & Results */}
                <div className="px-6 md:px-12 lg:px-24 py-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Implementation Details */}
                            <div>
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-1 bg-blue-500 rounded-full"></div>
                                    <h2 className="ml-4 text-2xl font-semibold">Implementation Highlights</h2>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                1
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Advanced AI System</h3>
                                            <p className="text-gray-700">
                                                Three-tier enemy AI with NavMesh pathfinding, dynamic behavior patterns,
                                                and difficulty-based accuracy algorithms.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                2
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Realistic Campus Environment</h3>
                                            <p className="text-gray-700">
                                                Detailed recreation of Parul University campus with accurate landmarks,
                                                textures, and lighting effects.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                3
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Weapon Mechanics</h3>
                                            <p className="text-gray-700">
                                                Three distinct weapon types with unique ballistics, recoil patterns,
                                                and sound profiles using raycasting technology.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="flex-shrink-0 mr-4">
                                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                4
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-1">Animation System</h3>
                                            <p className="text-gray-700">
                                                Fluid character animations for movement, combat, and interactions
                                                synchronized with gameplay actions.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Results & Metrics */}
                            <div>
                                <div className="flex items-center mb-8">
                                    <div className="w-12 h-1 bg-green-500 rounded-full"></div>
                                    <h2 className="ml-4 text-2xl font-semibold">Performance & Results</h2>
                                </div>

                                <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6">
                                    <div className="grid grid-cols-2 gap-6 mb-8">
                                        {metrics.map((metric, i) => (
                                            <div
                                                key={i}
                                                className="bg-white border border-gray-200 rounded-xl p-5 text-center"
                                            >
                                                <div className="text-3xl font-bold text-gray-900">
                                                    {metric.value}
                                                    {metric.unit && <span className="text-lg">{metric.unit}</span>}
                                                </div>
                                                <div className="text-gray-600 mt-1">{metric.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    <h3 className="font-semibold text-lg mb-3">Key Achievements</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1 w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span>Optimized performance achieving 120 FPS on mid-range hardware</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1 w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span>Positive user feedback with 92% satisfaction rate during testing</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1 w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span>Successfully implemented three-tier AI system with distinct behaviors</span>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="flex-shrink-0 mt-1 w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                            <span>Created recognizable campus environment without precise measurements</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Future Implementation */}
                <div className="px-6 md:px-12 lg:px-24 py-16 bg-gray-900 text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Future Development Roadmap</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                Planned enhancements and features for the next evolution of the game
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                                <div className="text-blue-400 mb-4">
                                    <Users size={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Multiplayer Mode</h3>
                                <p className="text-gray-300">
                                    Competitive and cooperative gameplay modes for up to 16 players with dedicated server support.
                                </p>
                            </div>

                            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                                <div className="text-yellow-400 mb-4">
                                    <Map size={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Expanded Campus</h3>
                                <p className="text-gray-300">
                                    Additional university buildings and landmarks with more detailed textures and interactive elements.
                                </p>
                            </div>

                            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                                <div className="text-green-400 mb-4">
                                    <Zap size={32} />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Enhanced AI</h3>
                                <p className="text-gray-300">
                                    Machine learning integration for adaptive enemy behavior and improved squad tactics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Acknowledgements */}
                <div className="mt-16 text-center">
                    <a href="/work" className="text-center text-blue-500 hover:text-blue-700 underline">
                        Return to Work
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default FPSGamePage;