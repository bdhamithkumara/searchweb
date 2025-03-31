import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Play } from "lucide-react";

export default function Features() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLDivElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-video-tilt-up");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (videoRef.current) {
            observer.observe(videoRef.current);
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current);
            }
        };
    }, []);

    const y = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"])
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1])
    const rotate = useTransform(scrollYProgress, [0, 0.5], [10, 0])

    const handlePlayClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <section
                ref={sectionRef}
                className="min-h-9 py-5 relative overflow-hidden lg:max-w-6xl mx-auto  "
            >
                <motion.div
                    style={{ opacity, y, scale, rotateX: rotate }}
                    className="bg-white text-black rounded-2xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-200 lg:mx-10 mx-2 lg:-mt-20 bg-[url('/4196430.jpg')] bg-cover bg-center bg-no-repeat"
                >
                    <div ref={videoRef}>
                        <div className="bg-transparent aspect-video relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white flex items-center justify-center">
                                <div className="relative">
                                    <div
                                        onClick={handlePlayClick}
                                        className="lg:w-20 lg:h-20 w-12 h-12 rounded-full bg-black flex items-center justify-center z-10 relative cursor-pointer transition-transform hover:scale-105"
                                    >
                                        <div className="w-20 h-20 absolute rounded-full animate-ping bg-black/20"></div>
                                        <Play className="text-[#ffffff] h-8 w-8 ml-1" />
                                    </div>
                                    <div className="absolute -inset-4 bg-black/10 blur-xl rounded-full"></div>
                                </div>

                                <div className="absolute lg:bottom-6 bottom-0 left-0 right-0 text-center lg:block hidden">
                                    <div className="bg-black text-white inline-block px-4 py-2 rounded-full">
                                        <span className="flex items-center gap-2">
                                            <span className="text-[#ffffff]">Watch presentation</span>
                                            <span className="lg:text-sm text-[12px] opacity-70 text-[#ffffff]">1 min</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" onClick={closeModal}>
                    <div
                        className="bg-white rounded-lg p-4 w-full max-w-4xl"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="relative">
                            <button
                                onClick={closeModal}
                                className="absolute -top-2 -right-2 bg-white rounded-full p-1 border border-gray-200"
                            >
                                ✕
                            </button>
                            <div className="aspect-video">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/GhJTlVlxysE?si=6hkNSVZZLU_FMZE5&autoplay=1`}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}