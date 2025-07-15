import profileImg from '../../assets/static/profile.jpg';
import { motion } from 'framer-motion';

export const InfoComponent = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-start pb-24 pt-32 px-4">
      {/* Hero Section */}
      <div className="max-w-3xl w-full mx-auto mb-16">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-white rounded-full shadow-md"></span>
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

      {/* Experience Section */}
      <div className="max-w-5xl w-full mx-auto mb-20">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-white rounded-full shadow-md"></span>
          <span className="uppercase text-xs tracking-widest text-gray-400 font-semibold">Experience</span>
        </div>
        <div className="flex flex-col gap-12">
          {/* Experience Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-2xl font-semibold text-neutral-100">KaiTech</div>
            <div>
              <div className="font-semibold text-neutral-100">Full-Stack Engineer</div>
              <div className="text-gray-400 text-sm mb-2">Dec 2024 – Jul 2025 · Miami, FL</div>
              <div className="text-gray-300 text-base">
                Built and deployed a React + Node.js platform on Azure, automating paint/material estimate generation and insurer supplement negotiation. Reduced manual data entry by 70%, recovered $150 per repair on 12 pilot jobs.<br />
                Interviewed 200+ collision-shop owners/estimators, converted insights into product specs that shaped the SaaS roadmap.<br />
                Integrated PostHog and Google OAuth/JWT to track feature adoption and onboarded the first paying customer in under 30 days.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-2xl font-semibold text-neutral-100">Cardinal Group Companies</div>
            <div>
              <div className="font-semibold text-neutral-100">AI Solutions Developer</div>
              <div className="text-gray-400 text-sm mb-2">Jan 2024 – Dec 2024 · Miami, FL</div>
              <div className="text-gray-300 text-base">
                Designed and deployed an AI leasing agent using Python, Milvus, Azure, Docker, handling 1,200+ monthly customer inquiries. Improved average response time from 2 hours to under 5 minutes.<br />
                Built backend data pipeline processing 500K+ rows of customer communication data for semantic search, achieving 92% retrieval accuracy.<br />
                Deployed Milvus vector DB using Docker on Azure Linux VMs to support 10K+ semantic queries per day.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-2xl font-semibold text-neutral-100">Double U Marketing</div>
            <div>
              <div className="font-semibold text-neutral-100">Data Tools Developer</div>
              <div className="text-gray-400 text-sm mb-2">Nov 2022 – May 2023 · Miami, FL</div>
              <div className="text-gray-300 text-base">
                Developed internal tracking tools (Excel macros, Python scripting) monitoring 15+ campaign KPIs across 3 regions, boosting campaign performance by 24%.<br />
                Designed and implemented a CRM system using Python and web scraping to aggregate 1,500+ customer records from Google Maps, reducing manual entry by 60%.<br />
                Built interactive dashboards with Tableau, analyzing 200K+ rows of customer feedback data, driving a 10% increase in customer traffic and $120K in additional revenue.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="max-w-5xl w-full mx-auto mb-20">
        <div className="flex items-center gap-2 mb-8">
          <span className="w-2 h-2 bg-white rounded-full shadow-md"></span>
          <span className="uppercase text-xs tracking-widest text-gray-400 font-semibold">Education</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
