import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showContactMenu, setShowContactMenu] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isProjectPage = location.pathname.startsWith("/projects-info/");

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowContactMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isProjectPage) {
    return (
      <div className="fixed top-0 left-0 z-50 flex items-center px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-10">
        <button
          onClick={() => navigate(-1)}
          className="text-neutral-100 flex items-center rounded-full px-3 py-1 sm:px-4 sm:py-2 h-[40px] sm:h-[45px] text-sm sm:text-base bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.2),0_8px_20px_rgba(0,0,0,0.2)] border border-white/20 hover:bg-gray-400/10"
        >
          <span className="mr-2">&larr;</span> Back
        </button>
      </div>
    );
  }

  const isInfo = location.pathname === "/info";
  
  return (
    <>
      {/* Desktop Version - Original Design */}
      <div className="hidden lg:flex fixed top-0 left-0 right-0 z-50 justify-between items-center text-neutral-100 font-sans px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-10 bg-gradient-to-b from-black/50 to-transparent">
        <div>
          <div className="text-base sm:text-lg font-semibold">Roman Loboda</div>
          <div className="text-xs sm:text-sm text-gray-400">Full-Stack Developer</div>
        </div>
        <div>
          <div className="relative flex items-center justify-center rounded-full px-2 py-1 text-base h-[40px] sm:h-[45px] transition-all duration-500 ease-in-out bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.2),0_8px_20px_rgba(0,0,0,0.2)] border border-white/20">
            <div className={`absolute top-[-2px] left-8 h-[2px] w-6 bg-white rounded-tl rounded-tr shadow-[0_0_10px_4px_rgba(255,255,255,0.4)] transition-transform duration-500 ease-in-out ${isInfo ? "translate-x-20" : "translate-x-0"}`}></div>
            <div className="flex space-x-2 sm:space-x-4">
              <NavLink to="/" end className={({isActive}) => `relative px-4 py-1 rounded-full transition-colors duration-500 ease-in-out ${isActive ? "bg-gray-400/20" : "hover:bg-gray-400/10"}`}>Work</NavLink>
              <NavLink to="/info" end className={({isActive}) => `relative px-4 py-1 rounded-full transition-colors duration-500 ease-in-out ${isActive ? "bg-gray-400/20" : "hover:bg-gray-400/10"}`}>Info</NavLink>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border border-gray-500/20 pointer-events-none"></div>
          </div>
        </div>
        <div className="flex space-x-2 sm:space-x-6">
          <a href="https://www.linkedin.com/in/roman-loboda/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline text-xs sm:text-base">
            <span>LinkedIn</span>
            <span className="text-sm">↗</span>
          </a>
          <a href="https://drive.google.com/file/d/1B3y0wwLaR7vvnfFLawIebIpSxYScsIo9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 hover:underline text-xs sm:text-base" >
            <span>Resume</span>
            <span className="text-sm">↗</span>
          </a>
        </div>
      </div>

      {/* Mobile Version - Reference Image Style */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center text-neutral-100 font-sans px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-10">
        {/* Left side - Navigation Pill */}
        <div className="relative">
          <div className="relative flex items-center justify-center rounded-full px-2 py-1 text-base h-[40px] sm:h-[45px] transition-all duration-500 ease-in-out bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.2),0_8px_20px_rgba(0,0,0,0.2)] border border-white/20">
            <div className={`absolute top-[-2px] left-7 h-[2px] w-6 bg-white rounded-tl rounded-tr shadow-[0_0_10px_4px_rgba(255,255,255,0.4)] transition-transform duration-500 ease-in-out ${isInfo ? "translate-x-19" : "translate-x-0"}`}></div>
            <div className="flex space-x-2 sm:space-x-4">
              <NavLink to="/" end className={({isActive}) => `relative px-4 py-1 rounded-full transition-colors duration-500 ease-in-out ${isActive ? "bg-gray-400/20" : "hover:bg-gray-400/10"}`}>Work</NavLink>
              <NavLink to="/info" end className={({isActive}) => `relative px-4 py-1 rounded-full transition-colors duration-500 ease-in-out ${isActive ? "bg-gray-400/20" : "hover:bg-gray-400/10"}`}>Info</NavLink>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-full border border-gray-500/20 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Right side - Contact Icon with Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <motion.button
            onClick={() => setShowContactMenu(!showContactMenu)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.2),0_8px_20px_rgba(0,0,0,0.2)] border border-white/20 hover:bg-gray-400/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              rotate: showContactMenu ? 180 : 0,
              backgroundColor: showContactMenu ? "rgba(156, 163, 175, 0.1)" : "rgba(255, 255, 255, 0.05)"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span className="text-lg font-semibold">@</span>
          </motion.button>
          
          {/* Dropdown Menu with Animation */}
          <AnimatePresence>
            {showContactMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ 
                  duration: 0.3, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
                className="absolute right-0 top-12 mt-2 w-48 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-[5px] shadow-[inset_0_1px_1px_rgba(255,255,255,0.6),inset_0_-1px_1px_rgba(0,0,0,0.2),0_8px_20px_rgba(0,0,0,0.2)] border border-white/20 overflow-hidden"
              >
                <motion.a 
                  href="https://www.linkedin.com/in/roman-loboda/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-400/10 transition-colors duration-200"
                  onClick={() => setShowContactMenu(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1, duration: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  LinkedIn ↗
                </motion.a>
                <motion.a 
                  href="https://drive.google.com/file/d/1B3y0wwLaR7vvnfFLawIebIpSxYScsIo9/view?usp=sharing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-sm text-gray-300 hover:bg-gray-400/10 transition-colors duration-200"
                  onClick={() => setShowContactMenu(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  whileHover={{ x: 5 }}
                >
                  Resume ↗
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};