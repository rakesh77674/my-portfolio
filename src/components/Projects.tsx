import { motion } from 'framer-motion';

const projects = [
  {
    title: "Health Insurance Analysis",
    desc: "Exploratory Data Analysis (EDA) on insurance premiums to identify key cost drivers using Python.",
    tools: ["Python", "Pandas", "Seaborn", "Scikit-Learn"],
    github: "#",
    demo: "#"
  },
  {
    title: "Sales Performance Dashboard",
    desc: "Interactive Power BI dashboard visualizing regional sales trends and KPI achievement.",
    tools: ["Power BI", "DAX", "SQL"],
    github: "#",
    demo: "#"
  },
  {
    title: "SQL Operations Database",
    desc: "Database schema design and complex query optimization for a retail inventory system.",
    tools: ["PostgreSQL", "Data Modeling"],
    github: "#",
    demo: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-12 flex items-center">
        <span className="text-blue-600 mr-2">02.</span> Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ y: -10 }}
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
          >
            <h3 className="text-xl font-bold mb-3">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm leading-relaxed">
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tools.map(tool => (
                <span key={tool} className="text-xs font-mono px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.github} className="text-sm font-bold hover:text-blue-500 underline">GitHub</a>
              <a href={project.demo} className="text-sm font-bold hover:text-blue-500 underline">Live Demo</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;