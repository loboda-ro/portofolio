import { motion } from "framer-motion";

export const HeroComponent = () => {
  return (
    <>
      {/* Desktop Version - Original Browser Window Design */}
      <div className="hidden lg:flex items-center justify-center overflow-hidden py-50 px-12 scroll-fade-in">
        <div className="relative rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl max-h-145 max-w-5xl w-full p-2 bg-opacity-0 overflow-hidden" 
            style={{
            WebkitMaskImage: 'linear-gradient(to bottom, white 50%, transparent 100%)',
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'cover',
            maskImage: 'linear-gradient(to bottom, white 50%, transparent 100%)',
            maskRepeat: 'no-repeat',
            maskSize: 'cover',
          }}>

          {/* Inner Browser Window Container */}
          <div className="relative rounded-xl border border-white/20 backdrop-blur-lg shadow-xl overflow-hidden" style={{height: '85vh'}}>
            
            {/* Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-b from-gray-600/40 to-gray-700/40 border-b border-gray-600/20">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-300 text-sm opacity-60">+</div>
            </div>
            
            {/* Window Content */}
            <div className="relative backdrop-blur-sm bg-black/10 px-8 py-16 sm:px-8 sm:py-16 md:px-16 md:py-20 h-full">
              
              {/* Hero Text */}
              <div className="text-left">
                <h1 className="text-5xl md:text-5xl font-bold lg:text-6xl text-neutral-200/100 mb-13 sm:mb-13 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] leading-snug
">
                  Build tools for auto insurance,<br />
                  voice AI & <span className="font-normal text-neutral-500/100 font-display text-8xl sm:text-7xl italic bg-gradient-to-t from-gray-400 to-white bg-clip-text text-transparent">agents.</span>
                </h1>
                
                <div className="space-y-2 text-lg sm:text-lg md:text-xl">
                  <p className="text-neutral-200/100 font-medium">
                      Based in Miami, FL
                  </p>
                  <p className="text-gray-400">
                      Previously built startup for auto collision shops & raised $40,000.
                  </p>
                </div>
              </div>
              
              {/* Moving Arrow */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-center font-light text-white text-5xl pointer-events-none py-16"
              >
                ↓
              </motion.div>
              
            </div>
            
          </div>
          
        </div>
      </div>

      {/* Mobile Version - Reference Image Style */}
      <div className="lg:hidden text-neutral-100 flex items-center justify-center overflow-hidden pt-40 md:py-35 lg:py-35 px-4 sm:px-6 md:px-12 scroll-fade-in">
        <div className="max-w-4xl w-full text-left">
          
          {/* Top line with bullet point and name/title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300/80 text-sm sm:text-base mb-7 flex items-center space-x-2"
          >
            <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_4px_rgba(255,255,255,0.5)] inline-block"></span>
            <span>Roman Loboda — Full-Stack Developer</span>
          </motion.div>
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-neutral-200 mb-12 leading-none drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] "
          >
            Build tools for auto insurance,<br />
            voice AI & <span className="font-light text-5xl italic font-display bg-gradient-to-t from-gray-500 to-white bg-clip-text text-transparent">agents.</span>
          </motion.h1>
          
          {/* Sub-text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-16 leading-relaxed"
          >
            Based in Miami, FL.<br />
            <span className="text-gray-300/50"> Previously built startup for auto collision shops & raised $40,000.</span>
          </motion.p>
          
          {/* Bottom call to action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-start space-y-4"
          >
            {/* Decorative line */}
            <div className="w-screen h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            
            {/* Arrow and text */}
            <div className="flex items-center space-x-2 text-gray-400 text-md sm:text-base pb-10">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="text-center font-light text-white text-3xl pointer-events-none"
              >
                <span className="text-xl">↓</span>
              </motion.div>
              <span>Scroll Down</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </>
  );
};