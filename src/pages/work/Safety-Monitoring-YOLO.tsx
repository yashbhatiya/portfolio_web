// src/pages/work/Safety-Monitoring-YOLO.tsx
import React, { ReactElement } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/CustomCursor';
import InteractiveCanvas from '@/components/InteractiveCanvas';

interface MetricItem {
    value: string;
    label: string;
}

const SafetyDetection = (): ReactElement => {
    const metrics: MetricItem[] = [
        { value: '92%', label: 'Detection Accuracy' },
        { value: '30+', label: 'FPS Performance' },
        { value: '5', label: 'Safety Classes Detected' },
        { value: '30s', label: 'Alert Response Time' }
    ];

    const features: string[] = [
        'YOLOv8 Architecture',
        'Data Annotation',
        'Python Backend',
        'CUDA Acceleration',
        'Custom Dataset',
        'Real-time Alerts',
        'Multi-class Detection',
        'REST API Integration'
    ];

    return (
        <>
            <CustomCursor />
            <InteractiveCanvas />
            <Header />
            <div className="min-h-screen bg-secondary/50">
                <nav className="px-6 md:px-12 lg:px-24 py-8">
                    <Link
                        to="/work"
                        className="flex items-center text-lg font-medium group transition-all duration-300"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                        Back to Works
                    </Link>
                </nav>

                {/* Full-width landscape image with gradient overlay */}
                <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent z-10" />
                    <img
                        src="/PersonDetection.jpeg"
                        alt="Safety Detection using YOLO"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-8 left-0 right-0 z-20 text-center px-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Safety Detection using YOLO
                        </h1>
                        <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                            Real-time safety equipment detection using state-of-the-art computer vision
                        </p>
                    </div>
                </div>

                <div className="px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
                    {/* Project details in a single column layout */}
                    <div className="space-y-12 max-w-4xl mx-auto">
                        <div className="animate-slide-down opacity-0" style={{ animationDelay: '0.2s' }}>
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-1 bg-black rounded-full" />
                                <h2 className="ml-4 text-2xl font-semibold">Project Overview</h2>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                As part of my internship at L&T Energy Hydrocarbon, I worked on building a real-time safety violation detection system using computer vision. The goal was to enhance workplace safety by identifying violations such as missing helmets, vests, or unauthorized zone entries using CCTV footage and AI models.
                            </p>
                        </div>

                        <div className="animate-slide-down opacity-0" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-1 bg-black rounded-full" />
                                <h2 className="ml-4 text-2xl font-semibold">Technical Implementation</h2>
                            </div>
                            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                                Built on PyTorch and OpenCV, the model was trained on a custom dataset of annotated safety equipment images.
                                The system achieves real-time performance (30+ FPS) while maintaining 92% accuracy in diverse lighting conditions.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((item, i) => (
                                    <div
                                        key={`feature-${i}`}
                                        className="flex items-start p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all"
                                    >
                                        <div className="flex-shrink-0 w-3 h-3 bg-black rounded-full mt-1.5 mr-4" />
                                        <span className="text-gray-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="animate-slide-down opacity-0" style={{ animationDelay: '0.6s' }}>
                            <div className="flex items-center mb-8">
                                <div className="w-16 h-1 bg-black rounded-full" />
                                <h2 className="ml-4 text-2xl font-semibold">Impact & Applications</h2>
                            </div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                This system has the potential to significantly enhance on-site safety in industrial and construction zones. By detecting violations like missing helmets, vests, or unauthorized area access in real time, it can prevent accidents before they happen. The solution integrates seamlessly with existing CCTV infrastructure, making it highly scalable and cost-effective for deployment across large facilities. It also supports safety audits by providing visual logs of compliance and violations. Overall, the project contributes toward creating AI-powered, proactive safety environments aligned with L&T’s digital transformation goals.
                            </p>
                        </div>
                    </div>

                    {/* Metrics Section */}
                    <div className="mt-24 mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                The system delivers exceptional performance across key operational metrics
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {metrics.map((metric, i) => (
                                <div
                                    key={`metric-${i}`}
                                    className="animate-slide-down opacity-0 p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center"
                                    style={{ animationDelay: `${0.8 + i * 0.2}s` }}
                                >
                                    <div className="text-5xl font-bold text-black mb-4">{metric.value}</div>
                                    <div className="text-gray-600 text-lg">{metric.label}</div>
                                </div>
                            ))}
                        </div>


                    </div>
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

export default SafetyDetection;