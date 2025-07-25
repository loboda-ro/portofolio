import profileImg from '../../assets/static/profile.jpg';
import { motion } from 'framer-motion';

export const InfoComponent = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center pb-24 pt-32 px-4">
      {/* Hero Section */}
      <div className="max-w-3xl w-full mx-auto mb-16">
        <div className="flex flex-col items-left text-left">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_4px_rgba(255,255,255,0.3)]"></span>
            <span className="uppercase text-xs tracking-widest text-gray-400 font-semibold">About Me</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-100 mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            I’m passionate about creating products that solve
            <span className="font-display italic font-light text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-t from-gray-400 to-white mt-2"> real problems.</span>
          </h1>
        </div>
      </div>

      {/* Main Content: Image + Story */}
      <div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        {/* Image Card */}
        <motion.div>
          <div className="p-6 flex flex-col items-center justify-center">
            <img
              src={profileImg}
              alt="Roman Loboda profile"
              className="w-64 h-80 object-cover rounded-xl border border-white/20 shadow-lg"
            />
          </div>
        </motion.div>
        {/* Story Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="flex flex-col justify-center"
        >
          <div className="text-lg md:text-xl text-gray-300 mb-6">
            <span className="font-semibold text-white">Hi, I’m Roman.</span> I’m a Full-Stack Engineer & AI Solutions Developer based in Miami, FL. I build tools for auto insurance, AI voice agents, and data-driven business automation.<br /><br />
            I visited 200+ collision shops to learn the industry, built and deployed SaaS products, and love turning field insights into real-world software.
          </div>
        </motion.div>
      </div>
      {/*  Decoration line */}
      <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 6 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-1"
      />

      {/* Experience Section */}
      <div className="max-w-5xl w-full mx-auto mb-20 px-8 pt-16">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_4px_rgba(255,255,255,0.3)]"></span>
          <span className="uppercase text-xs tracking-widest text-gray-400 font-semibold">Experience</span>
        </div>
        <div className="flex flex-col gap-12">
          {/* Experience Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-2xl font-semibold text-neutral-100">KaiTech</div>
            <div>
              <div className="font-semibold text-neutral-100">Co-Founder & Full-Stack Engineer</div>
              <div className="text-gray-400 text-sm mb-2">Dec 2024 – Jul 2025 · Miami, FL</div>
              <div className="text-gray-300 text-base">
                Visited 200+ collision shops, built a React/Node.js tool for supplements and materials estimates, got paying customers. Shut down after seeing limited market demand.<br />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-2xl font-semibold text-neutral-100">Cardinal Group Companies</div>
            <div>
              <div className="font-semibold text-neutral-100">AI Solutions Developer</div>
              <div className="text-gray-400 text-sm mb-2">Jan 2024 – Dec 2024 · Miami, FL</div>
              <div className="text-gray-300 text-base">
                AI leasing agent (Python, Milvus, Azure, Docker) with vector database memory, automating customer communication.<br />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-2xl font-semibold text-neutral-100">Double U Marketing</div>
            <div>
              <div className="font-semibold text-neutral-100">Data Tools Developer</div>
              <div className="text-gray-400 text-sm mb-2">Nov 2022 – May 2023 · Miami, FL</div>
              <div className="text-gray-300 text-base">
                Built Python automation scripts and to clean and process large datasets for marketing analytics.<br />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Decoration line */}
      <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 6 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-1"
      />
      {/* Education Section */}
      <div className="max-w-5xl w-full mx-auto mb-20 px-8 pt-16">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_4px_rgba(255,255,255,0.3)]"></span>
          <span className="uppercase text-xs tracking-widest text-gray-400 font-semibold">Education</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-2xl font-semibold text-neutral-100">Telora</div>
          <div>
            <div className="font-semibold text-neutral-100">Fellowship for ambitious hackers</div>
            <div className="text-gray-400 text-sm mb-2">Jan 2025 · Miami, FL</div>
            <div className="text-gray-300 text-base">One of 6 funded teams selected from 900+ applicants.</div>
          </div>

        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          <div className="text-2xl font-semibold text-neutral-100">Florida International University</div>
          <div>
            <div className="font-semibold text-neutral-100">BBA in Business Analytics</div>
            <div className="text-gray-400 text-sm mb-2">May 2024 · Miami, FL</div>
            <div className="text-gray-300 text-base">Relevant Coursework: Python for Data Science, Machine Learning, Database Management, Statistics</div>
          </div>
        </div>
      </div>
    </div>
  );
};
