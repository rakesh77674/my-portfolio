import React from 'react';

const Skills: React.FC = () => {
  const skillSets = [
    {
      category: "PROGRAMMING LANGUAGES",
      skills: ["SQL (PostgreSQL/T-SQL)", "Python", "R", "TypeScript"]
    },
    {
      category: "DATA VISUALIZATION",
      skills: ["Power BI Desktop", "Tableau", "Excel Dashboards", "D3.js"]
    },
    {
      category: "LIBRARIES & TOOLS",
      skills: ["Pandas & NumPy", "React.js", "Scikit-Learn", "Git/GitHub"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-header">Technical Skills</h2>
      
      <div className="skills-grid">
        {skillSets.map((set, index) => (
          <div className="skill-card" key={index}>
            <span className="skill-category-title">{set.category}</span>
            <ul className="skill-item-list">
              {set.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;