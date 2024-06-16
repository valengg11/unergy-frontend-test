import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./components/project-card/ProjectCard";
import "./styles/main.scss";

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/landing/project/");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching the projects:", error);
      }
    };
    fetchProjects();
    
  }, []);

  return (
    <div className="app">
      <div className="header">
        <hr/>
        <h1>PROYECTOS</h1>
        <hr/>
      </div>
      <div className="projects_container">
        {projects.map(project =>
          <ProjectCard key={project.nombre_topico} project={project} />
        )}
      </div>
    </div>
  );
}

export default App;
