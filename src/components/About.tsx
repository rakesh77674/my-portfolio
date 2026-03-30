import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <span className="text-blue-600 mr-2">01.</span> About Me
          </h2>
          <div className="space-y-4 text-slate-600 dark:text-slate-400">
            <p>
              Hello! I'm a <span className="text-blue-600 font-medium">Healthcare Data Analyst</span> currently 
              pursuing my studies at <span className="text-slate-900 dark:text-slate-100 font-medium">Webster University</span>.
            </p>
            <p>
              My journey in data started with a fascination for how numbers can predict outcomes in patient care. 
              Since arriving in the US in 2025, I’ve been bridging the gap between complex datasets and 
              business intelligence.
            </p>
            <p>
              When I'm not writing SQL queries or building React components, I’m exploring statistical 
              modeling and advanced visualization techniques in Tableau and Power BI.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative z-10 border-2 border-blue-600 rounded-lg p-2 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
            <div className="bg-slate-200 dark:bg-slate-700 aspect-square rounded flex items-center justify-center text-slate-400">
              {/* Replace with <img src="/profile.jpg" /> */}
              <span>[ Profile Image ]</span>
            </div>
          </div>
          <div className="absolute top-4 left-4 w-full h-full border-2 border-slate-300 dark:border-slate-600 rounded-lg -z-0"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;