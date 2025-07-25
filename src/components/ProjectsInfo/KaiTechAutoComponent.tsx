import { motion } from "framer-motion";
import mainScreenshot from "../../assets/projects/kaitechauto/kaitechauto-main.png";
import profileScreenshot from "../../assets/projects/kaitechauto/kaitechauto-inventory.png";
import { technologies } from "../../data/technologies";

const techStackIds = [
  "javascript",
  "react",
  "express",
  "nodejs",
  "azure",
  "sql"
];
const filteredTech = technologies.filter(tech => techStackIds.includes(tech.id));

export const KaiTechAutoComponent = () => (
  <div className="bg-gradient-to-b from-[#0a2342] via-[#0a2342]/10 to-transparent min-h-screen w-full pt-20">
    {/* Banner */}
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center pt-20 pb-16 sm:pb-32 px-2 sm:px-6"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 drop-shadow-lg mb-2">KaiTechAuto</h1>
      <div className="text-base sm:text-lg text-blue-100 mb-4">Automatic breakdown of materials usage to justify repair cost to insurance companies</div>
      <motion.img
        src={mainScreenshot}
        alt="KaiTechAuto Main Page"
        className="rounded-2xl shadow-xl border border-white/10 w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto my-6"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </motion.section>

    {/* Overview */}
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-2 py-6 sm:px-6 sm:py-12"
    >
      <div>
        <div className="mb-6">
          <div className="uppercase text-xs sm:text-sm text-blue-200 font-semibold mb-1">My Role</div>
          <div className="text-neutral-100 text-base sm:text-lg">Co-Founder, Full-Stack Engineer</div>
        </div>
        <div className="mb-6">
          <div className="uppercase text-xs sm:text-sm text-blue-200 font-semibold mb-1">Team</div>
          <div className="text-neutral-100 text-base sm:text-lg">Roman Loboda, Oleh Krainyk</div>
        </div>
        <div>
          <div className="uppercase text-xs sm:text-sm text-blue-200 font-semibold mb-1">Timeline</div>
          <div className="text-neutral-100 text-base sm:text-lg">1 month</div>
        </div>
      </div>
      <div>
        <div className="uppercase text-xs sm:text-sm text-blue-200 font-semibold mb-1">Overview</div>
        <div className="text-blue-100 leading-relaxed text-base sm:text-lg">
          KaiTechAuto is a tool for auto collision shops to automatically break down and justify materials usage for insurance claims. It streamlines the process of documenting and submitting repair costs, using modern web technologies and automation to save time and increase approval rates.
        </div>
      </div>
    </motion.section>

    {/* Highlights */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto px-2 py-6 sm:px-6 sm:py-12"
    >
      <div className="flex items-center mb-6">
        <span className="uppercase text-xs sm:text-sm text-blue-200 font-semibold">Highlights</span>
      </div>
      <div className="text-neutral-100 text-base sm:text-lg mb-8">
        Modernizing insurance claim documentation for auto repair shops with automation and a user-friendly interface.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={mainScreenshot} alt="Main Page" className="rounded-xl shadow-lg border border-white/10 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto my-6" />
          <div className="text-blue-100 text-xs sm:text-sm mt-2 text-center">Estimates Page</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src={profileScreenshot} alt="Profile Page" className="rounded-xl shadow-lg border border-white/10 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto my-6" />
          <div className="text-blue-100 text-xs sm:text-sm mt-2 text-center">Inventory Page</div>
        </motion.div>
      </div>
    </motion.section>

    {/* Demo Video */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto px-2 py-6 sm:px-6 sm:py-12"
    >
      <div className="text-neutral-100 text-lg sm:text-xl font-semibold mb-4">Demo Video</div>
      <div className="flex justify-center">
        <div className="rounded-xl shadow-xl border border-white/10 w-full max-w-xs sm:max-w-md md:max-w-xl mx-auto my-6 bg-black overflow-hidden">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/IXL2p1WCu2A"
              title="KaiTechAuto Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-blue-100 text-xs sm:text-sm text-center">KaiTechAuto Demo</div>
    </motion.section>

    {/* Tech Stack */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto px-2 py-6 sm:px-6 sm:py-12"
    >
      <div className="text-neutral-100 text-lg sm:text-xl font-semibold mb-4">Tech Stack</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 sm:gap-4">
        {filteredTech.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow hover:scale-105 transition-transform"
          >
            {tech.logo && (
              <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain mb-2" />
            )}
            <span className="text-neutral-100 text-xs sm:text-sm font-medium text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  </div>
);