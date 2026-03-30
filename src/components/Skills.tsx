const skills = [
  { category: "Languages", items: ["Python", "SQL", "R", "JavaScript (React)"] },
  { category: "Visualization", items: ["Power BI", "Tableau", "Excel", "Matplotlib"] },
  { category: "Tools", items: ["Pandas", "NumPy", "Git", "Google Analytics"] }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-10 flex items-center">
        <span className="text-blue-600 mr-2">03.</span> Tech Stack
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skillGroup, i) => (
          <div key={i} className="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-lg">
            <h3 className="font-bold text-blue-600 mb-4 uppercase tracking-widest text-sm">
              {skillGroup.category}
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {skillGroup.items.map(skill => (
                <li key={skill} className="flex items-center text-slate-600 dark:text-slate-400">
                  <span className="text-blue-500 mr-2">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;