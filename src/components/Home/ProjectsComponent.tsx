import { NavLink } from 'react-router-dom';
import stayWithMeImg from '../../assets/static/staywithme.png';
import kaitechautoImg from '../../assets/static/kaitechauto.png';
import { motion } from 'framer-motion';

export const ProjectComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12 overflow-hidden py-15 px-12">
      {/* StayWithMe Project Block */}
      <motion.div
        className="relative rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl h-[67vh] max-w-5xl w-full p-2 bg-gray-500/5 overflow-hidden"
      >
        <div className="relative rounded-xl border border-white/20 backdrop-blur-lg shadow-xl overflow-hidden h-[65vh] group">
          <div className="absolute top-0 left-0 w-full h-[63vh] bg-gradient-to-b from-[rgba(24,43,58,255)] via-[#1b4f72] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-400 ease-in-out pointer-events-none"></div>
          <NavLink to="/projects-info/staywithme">
            <div className="relative backdrop-blur-sm bg-black/10 px-8 py-16 sm:px-8 sm:py-16 md:px-16 md:py-20 h-full">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-6 left-6 space-y-1 text-lg sm:text-lg md:text-xl"
              >
                <div>
                  <p className="text-neutral-200/100 font-medium">
                    StayWithMe
                  </p>
                  <p className="text-gray-400">
                    AI clones of real people - from WhatsApp/Telegram data
                  </p>
                </div>
              </motion.h2>
              <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 group-hover:-translate-y-4 transition-transform duration-300 ease-out w-[68%]">
                <img
                  src={stayWithMeImg}
                  alt="StayWithMe Preview"
                  className="rounded-xl border border-white/20 w-full h-auto shadow-2xl drop-shadow-2xl"
                />
              </div>
            </div>
          </NavLink>
        </div>
      </motion.div>

      {/* Another Project Block */}
      <motion.div
        className="relative rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl h-[67vh] max-w-5xl w-full p-2 bg-gray-500/5 overflow-hidden"
      >
        <div className="relative rounded-xl border border-white/20 backdrop-blur-lg shadow-xl overflow-hidden h-[65vh] group">
          <div className="absolute top-0 left-0 w-full h-[63vh] bg-gradient-to-b from-[rgba(24,43,58,255)] via-[#1b4f72] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-400 ease-in-out pointer-events-none"></div>
          <NavLink to="/projects-info/kaitechauto">
            <div className="relative backdrop-blur-sm bg-black/10 px-8 py-16 sm:px-8 sm:py-16 md:px-16 md:py-20 h-full">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="absolute top-6 left-6 space-y-1 text-lg sm:text-lg md:text-xl"
              >
                <div>
                  <p className="text-neutral-200/100 font-medium">
                    KaiTechAuto
                  </p>
                  <p className="text-gray-400">
                    Automatic breakdown of materials usage to justify repair cost to insurance companies.
                  </p>
                </div>
              </motion.h2>
              <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2 group-hover:-translate-y-4 transition-transform duration-300 ease-out w-[68%]">
                <img
                  src={kaitechautoImg}
                  alt="Another Project Preview"
                  className="rounded-xl border border-white/20 w-full h-auto shadow-2xl drop-shadow-2xl"
                />
              </div>
            </div>
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};