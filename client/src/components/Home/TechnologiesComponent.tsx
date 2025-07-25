import { motion } from 'framer-motion';
import { technologies, categoryColors, categoryNames } from '../../data/technologies';

export const TechnologiesComponent = () => {
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {  acc[tech.category] = []; } acc[tech.category].push(tech);
    return acc;
  }, {} as Record<string, typeof technologies>);

    return (
    <div className="flex items-center justify-center overflow-hidden py-6 pb-8 px-4 mb:py-8 lg:py-8 sm:px-12 scroll-reveal">
      <motion.div 
        className="relative rounded-2xl border border-white/20 backdrop-blur-sm shadow-2xl max-w-5xl w-full p-2 bg-opacity-0 overflow-hidden"
      >
        
        {/* Inner Container */}
        <div className="relative rounded-xl border border-white/20 backdrop-blur-lg shadow-xl overflow-hidden p-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-neutral-200/100 mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              Current technologies
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Modern tools and technologies I work with
            </motion.p>
            
            {/* Decorative line */}
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white/60 to-transparent mx-auto mt-6"
            />
          </div>

          {/* Technologies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(groupedTechnologies).map(([category, techs], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: categoryIndex * 0.1,
                  ease: "easeInOut" 
                }}
                className="group scroll-reveal"
              >
                <div className={`relative rounded-xl border border-white/20 backdrop-blur-sm p-8 bg-gradient-to-br ${categoryColors[category as keyof typeof categoryColors]} hover:bg-opacity-40 transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:shadow-white/10 md:hover:bg-opacity-40`}>
                  
                  {/* Category Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-semibold text-neutral-200/100 mb-3 group-hover:text-white transition-colors duration-300">
                      {categoryNames[category as keyof typeof categoryNames]}
                    </h3>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-white/60 to-transparent rounded-full group-hover:w-20 transition-all duration-300"></div>
                  </div>

                  {/* Technologies List */}
                  <div className="space-y-4">
                    {techs.map((tech, techIndex) => (
                      <motion.div
                        key={tech.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                        transition={{ 
                          duration: 0.4, 
                          delay: (categoryIndex * 0.1) + (techIndex * 0.05),
                          ease: "easeInOut"
                        }}
                        className="flex items-center space-x-4 group/item"
                      >
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          {tech.logo ? (
                            <motion.img
                              src={tech.logo}
                              alt={`${tech.name} logo`}
                              className="w-8 h-8 object-contain"
                              whileHover={{ scale: 1.2, rotate: 8 }}
                              transition={{ duration: 0.2 }}
                            />
                          ) : (
                            <motion.div 
                              className="w-4 h-4 rounded-full shadow-lg"
                              style={{ backgroundColor: tech.color }}
                              whileHover={{ scale: 1.8 }}
                              transition={{ duration: 0.2 }}
                            ></motion.div>
                          )}
                        </div>
                        
                        {/* Tech Info */}
                        <div className="flex-1">
                          <div className="text-neutral-200/100 font-medium text-lg group-hover/item:text-white transition-colors duration-200">
                            {tech.name}
                          </div>
                          {tech.description && (
                            <div className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors duration-200">
                              {tech.description}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover Effect Overlay - Only on Desktop */}
                  <div className="absolute inset-0 rounded-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-white/5 to-transparent md:block hidden"></div>
                  
                  {/* Glow Effect - Only on Desktop */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden md:block"
                       style={{
                         background: `radial-gradient(circle at center, ${techs[0]?.color}20 0%, transparent 60%)`
                       }}>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Decoration */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="inline-flex items-center space-x-3 text-gray-400 text-sm">
              <span>Always learning new technologies</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};