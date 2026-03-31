import React from 'react';
// Import your actual project screenshots here
// import healthProject from '../assets/health-analysis.png';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: "Health Cost Insurance Analysis",
      description: "My personal healthcare project I made in 2026.",
      link: "https://github.com/rakesh77674/Insurance_cost_Analysis",
      image: "https://imgs.search.brave.com/zuH5ZOf8W2mBOPAmc8MfFoajjAKRKy-HHRdUCotUbNM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9mYWly/Y2FyZWluc3VyYW5j/ZS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMDEvSGVh/bHRoLUluc3VyYW5j/ZS1Db3N0LWluLUZs/b3JpZGEtMTAyNHg2/ODMuanBn" 
    },
    {
      title: "Gym Management System",
      description: "End-to-end Gym Management Data Platform featuring OLTP database design.",
      link: "https://github.com/rakesh77674/gym-analytics-data-warehouse",
      image: "https://imgs.search.brave.com/LI9yAuzFK3Iy-M75VWdYoHMcQ9BFFBalTf6Zc6bQxCo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zcGFy/a21lbWJlcnNoaXAu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA0L0d5bS1N/YW5hZ2VtZW50LVN5/c3RlbS1JZGVhcy5w/bmc"
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
        <a href="https://github.com/rakesh77674?tab=repositories" className="view-project-link">View All Projects →</a>
      </div>
    </section>
  );
};

export default Projects;