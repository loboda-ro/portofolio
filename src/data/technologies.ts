import milvusLogo from '../assets/static/milvus_logo.png';

export interface Technology {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'cloud' | 'database' | 'tools' | 'ai';
  color: string;
  description?: string;
  logo?: string;
}

export const technologies: Technology[] = [
  // Backend
  { 
    id: 'python', 
    name: 'Python', 
    category: 'backend', 
    color: '#3776AB', 
    description: 'Backend Language',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  { 
    id: 'javascript', 
    name: 'JavaScript/TypeScript', 
    category: 'frontend', 
    color: '#F7DF1E', 
    description: 'Programming Language',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  { 
    id: 'typescript', 
    name: 'TypeScript', 
    category: 'frontend', 
    color: '#3178C6', 
    description: 'Type Safety',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
  },
  { 
    id: 'nodejs', 
    name: 'Node.js/Express', 
    category: 'backend', 
    color: '#339933', 
    description: 'Runtime & Framework',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  { 
    id: 'express', 
    name: 'Express.js', 
    category: 'backend', 
    color: '#000000', 
    description: 'Web Framework',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  
  // Frontend
  { 
    id: 'react', 
    name: 'React', 
    category: 'frontend', 
    color: '#61DAFB', 
    description: 'Frontend Framework',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  
  // Cloud & Infrastructure
  { 
    id: 'docker', 
    name: 'Docker', 
    category: 'cloud', 
    color: '#2496ED', 
    description: 'Containerization',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
  },
  { 
    id: 'azure', 
    name: 'Azure', 
    category: 'cloud', 
    color: '#0078D4', 
    description: 'Cloud Platform (VMs, CosmosDB)',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg'
  },
  { 
    id: 'git', 
    name: 'Git', 
    category: 'cloud', 
    color: '#F05032', 
    description: 'Version Control',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  
  // Database
  { 
    id: 'postgresql', 
    name: 'PostgreSQL', 
    category: 'database', 
    color: '#336791', 
    description: 'Relational Database',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  { 
    id: 'sql', 
    name: 'SQL', 
    category: 'database', 
    color: '#E48E00', 
    description: 'Database Language',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
  },
  { 
    id: 'milvus', 
    name: 'Milvus', 
    category: 'database', 
    color: '#00D4AA', 
    description: 'Vector Database',
    logo: milvusLogo
  },
];

export const categoryColors = {
  frontend: 'from-blue-500/20 to-cyan-500/20',
  backend: 'from-green-500/20 to-emerald-500/20',
  cloud: 'from-purple-500/20 to-indigo-500/20',
  database: 'from-orange-500/20 to-red-500/20',
  ai: 'from-pink-500/20 to-purple-500/20',
  tools: 'from-gray-500/20 to-slate-500/20',
} as const;

export const categoryNames = {
  frontend: 'Frontend',
  backend: 'Backend',
  cloud: 'Cloud & Infrastructure',
  database: 'Database',
  ai: 'AI & Machine Learning',
  tools: 'Tools & Design',
} as const; 