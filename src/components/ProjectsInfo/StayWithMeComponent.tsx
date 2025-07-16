import { motion } from "framer-motion";
import profileScreenshot from "../../assets/projects/staywithme/profile.png";
import mainScreenshot from "../../assets/projects/staywithme/main.png";
import { technologies } from "../../data/technologies";

export const StayWithMeComponent = () => (
  <div className="bg-gradient-to-b from-[#0a2342] via-[#0a2342]/10 to-transparent min-h-screen w-full pt-20">
    {/* Banner */}
    <motion.section
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col items-center pt-20 pb-32"
    >
      <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 drop-shadow-lg mb-2">StayWithMe</h1>
      <div className="text-lg text-blue-100 mb-4">AI Clone of real person from chat history</div>
      <motion.img
        src={mainScreenshot}
        alt="StayWithMe Main Page"
        className="rounded-2xl shadow-xl border border-white/10 max-w-xl w-full mx-auto my-6"
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
      className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-12"
    >
      <div>
        <div className="mb-6">
          <div className="uppercase text-xs text-blue-200 font-semibold mb-1">My Role</div>
          <div className="text-neutral-100">Full-Stack Engineer, Product Lead</div>
        </div>
        <div className="mb-6">
          <div className="uppercase text-xs text-blue-200 font-semibold mb-1">Team</div>
          <div className="text-neutral-100">Roman Loboda, Oleh Krainyk</div>
        </div>
        <div>
          <div className="uppercase text-xs text-blue-200 font-semibold mb-1">Timeline</div>
          <div className="text-neutral-100">8 month</div>
        </div>
      </div>
      <div>
        <div className="uppercase text-xs text-blue-200 font-semibold mb-1">Overview</div>
        <div className="text-blue-100 leading-relaxed">
          StayWithMe lets you create an AI version of a real person from WhatsApp or Telegram chat history. Upload your chat, process it with advanced NLP and chunking, store in Milvus vector DB, and pair with a cloned voice using ElevenLabs. Call and talk to your AI agent, powered by GPT-4o and real-time voice synthesis.
        </div>
      </div>
    </motion.section>

    {/* Highlights */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-5xl mx-auto px-6 py-12"
    >
      <div className="flex items-center mb-6">
        <span className="uppercase text-xs text-blue-200 font-semibold">Highlights</span>
      </div>
      <div className="text-neutral-100 text-lg mb-8">
        Modernizing how people interact with AI voice agents, using real chat data and advanced LLM pipelines.
      </div>
      <div className="grid grid-cols-1 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img src={profileScreenshot} alt="Main Page" className="rounded-xl shadow-lg border border-white/10 max-w-lg w-full mx-auto my-6" />
          <div className="text-blue-100 text-sm mt-2 text-center">Profile Page</div>
        </motion.div>
      </div>
    </motion.section>

    {/* Demo Video */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-3xl mx-auto px-6 py-12"
    >
      <div className="text-neutral-100 text-xl font-semibold mb-4">Demo Video</div>
      <div className="flex justify-center">
        <div className="rounded-xl shadow-xl border border-white/10 max-w-xl w-full mx-auto my-6 bg-black overflow-hidden">
          <div className="relative pb-[56.25%] h-0">
            <iframe
              src="https://www.youtube.com/embed/rM_PyL1wKDs"
              title="Cloning a Person"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-blue-100 text-sm text-center">Cloning a Person</div>
    </motion.section>

    {/* Tech Stack */}
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="text-neutral-100 text-xl font-semibold mb-4">Tech Stack</div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 shadow hover:scale-105 transition-transform"
          >
            {tech.logo && (
              <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain mb-2" />
            )}
            <span className="text-neutral-100 text-sm font-medium text-center">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.section>

    
  </div>
);

