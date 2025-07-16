import { NavLink } from 'react-router-dom';
import stayWithMeImg from '../../assets/static/staywithme.png';
import kaitechautoImg from '../../assets/static/kaitechauto.png';
import { motion } from 'framer-motion';

export const ProjectComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 sm:gap-20 overflow-hidden py-16 px-4 sm:py-20 sm:px-6 md:px-12">
      {/* StayWithMe Project Block */}
      <motion.div
        className="relative rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl w-full max-w-5xl p-2 bg-gray-500/5 overflow-hidden"
      >
        <div className="relative rounded-xl border border-white/20 backdrop-blur-lg shadow-xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(24,43,58,255)] via-[#1b4f72] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-400 ease-in-out pointer-events-none"></div>
          <NavLink to="/projects-info/staywithme">
            <div className="relative backdrop-blur-sm bg-black/10 w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-12">
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                >
                  StayWithMe
                </motion.h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
                  AI clones of real people - from WhatsApp/Telegram data
                </p>
              </div>
              <div className="flex justify-center mt-6  md:-mb-[8%] lg:-mb-[10%]">
                <div className="w-4/5 sm:w-3/4 md:w-5/6 transform group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                  <img
                    src={stayWithMeImg}
                    alt="StayWithMe Preview"
                    className="rounded-lg border border-white/20 w-full h-auto shadow-2xl drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </motion.div>

      {/* KaiTechAuto Project Block */}
      <motion.div
        className="relative rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl w-full max-w-5xl p-2 bg-gray-500/5 overflow-hidden"
      >
        <div className="relative rounded-xl border border-white/20 backdrop-blur-lg shadow-xl overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[rgba(24,43,58,255)] via-[#1b4f72] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-400 ease-in-out pointer-events-none"></div>
          <NavLink to="/projects-info/kaitechauto">
            <div className="relative backdrop-blur-sm bg-black/10 w-full h-full flex flex-col justify-between p-6 sm:p-8 md:p-12">
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
                >
                  KaiTechAuto
                </motion.h2>
                <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-4">
                  Automatic breakdown of materials usage to justify repair cost to insurance companies
                </p>
              </div>
              <div className="flex justify-center mt-6 md:-mb-[8%] lg:-mb-[10%]">
                <div className="w-5/6 sm:w-3/4 md:w-5/6 transform group-hover:-translate-y-2 transition-transform duration-300 ease-out">
                  <img
                    src={kaitechautoImg}
                    alt="KaiTechAuto Preview"
                    className="rounded-lg border border-white/20 w-full h-auto shadow-2xl drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      </motion.div>
    </div>
  );
};