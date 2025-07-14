import { motion } from "framer-motion";

export const HeroComponent = () => {
  return (
    <div className="flex items-center justify-center overflow-hidden py-15 px-12">

      
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
              <h1 className="text-5xl md:text-5xl font-bold lg:text-6xl text-neutral-200/100 mb-13 sm:mb-13 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
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
  );
};