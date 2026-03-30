import React from 'react';
// Import your actual project screenshots here
// import healthProject from '../assets/health-analysis.png';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Health Insurance Analysis",
      description: "My personal healthcare project I made in 2026.",
      link: "#",
      image: "https://via.placeholder.com/600x400" // Replace with your imported image
    },
    {
      title: "Data Visualization Terminal",
      description: "A dashboard for tracking clinical metrics and patient outcomes.",
      link: "#",
      image: "https://via.placeholder.com/600x400"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} />
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <a href={project.link} className="view-project-link">View Project →</a>
          </div>
        ))}
      </div>

      <div className="more-projects-footer">
        <h3>Want to See More?</h3>
        <a href="https://github.com/rakesh" className="view-project-link">View All Projects →</a>
      </div>
    </section>
  );
};

export default Projects;