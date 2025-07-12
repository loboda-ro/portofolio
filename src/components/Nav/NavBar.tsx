import { useState } from "react";




export const NavBar = () => {


    const [activeTab, setActiveTab] = useState<"work" | "info">("work");

    const handleActive = (tab: "work" | "info") => {
        setActiveTab(tab);
    };

    return (
        <div className="flex justify-between items-center text-neutral-100/100 font-sans">
            <div>
                <div className="text-base font-semibold">Roman Loboda</div>
                <div className="text-xs text-gray-400">Full-Stack Developer</div>
            </div>
            <div>
                <div className="relative flex items-center justify-center bg-gray-300/10 rounded-full px-2 py-1 text-base hover:bg-gray-400/20 h-[45px] transition-all duration-500 ease-in-out">
                    <div className={`absolute top-[-2px] left-8 h-[2px] w-6 bg-white rounded-tl rounded-tr shadow-[0_0_10px_4px_rgba(255,255,255,0.4)] transition-transform duration-500 ease-in-out ${activeTab === "info" ? "translate-x-20" : "translate-x-0"}`}></div>
                        <div className="flex space-x-4">
                            <a href="#" onClick={() => handleActive("work")} className={`relative px-4 py-1 rounded-full transition-colors duration-500 ease-in-out ${activeTab === "work" ? "bg-gray-400/20" : "hover:bg-gray-400/10"}`}>Work</a>
                            <a href="#" onClick={() => handleActive("info")} className={`relative px-4 py-1 rounded-full transition-colors duration-500 ease-in-out ${activeTab === "info" ? "bg-gray-400/20" : "hover:bg-gray-400/10"}`}>Info</a>
                        </div>
                    <div className="absolute top-0 left-0 w-full h-full rounded-full border border-gray-500/20 pointer-events-none"></div>
                </div>
            </div>
            <div className="flex space-x-6">
                <a href="https://www.linkedin.com/in/roman-loboda/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline">
                    <span>LinkedIn</span>
                    <span className="text-sm">↗</span>
                </a>
                <a href="https://drive.google.com/file/d/1B3y0wwLaR7vvnfFLawIebIpSxYScsIo9/view?usp=sharing" target="_blank"  rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline" >
                    <span>Resume</span>
                    <span className="text-sm">↗</span>
                </a>
            </div>
        </div>
    );
};