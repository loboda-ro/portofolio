import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="flex items-center justify-center min-h-screen overflow-hidden">
      {/* Outer Container with subtle outline */}
      <div className="relative rounded-2xl border border-white/5 backdrop-blur-sm shadow-2xl max-w-5xl w-full p-1">
        
        {/* Inner Browser Window Container */}
        <div className="relative rounded-xl border border-white/10 backdrop-blur-lg shadow-xl overflow-hidden" style={{height: '85vh'}}>
          
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
          <div className="relative backdrop-blur-sm bg-black/10 px-8 py-16 md:px-16 md:py-24 h-full">
            
            {/* Hero Text */}
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-16">
                Build tools for auto insurance,<br />
                voice AI & <span className="italic font-normal">agents.</span>
              </h1>
              
              <div className="space-y-2 text-lg md:text-xl">
                <p className="text-white font-medium">
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
              className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white opacity-60 text-3xl"
            >
              ↓
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};