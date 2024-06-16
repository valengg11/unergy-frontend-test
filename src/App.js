import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ProjectCard from "./components/project-card/ProjectCard";
import "./styles/main.scss";
import Filter from "./components/filter/Filter";

function App() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("/api/landing/project/");
        setProjects(response.data);
        setFilteredProjects(response.data);
      } catch (error) {
        console.error("Error fetching the projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const handleFilterChange = useCallback(
    filterType => {
      switch (filterType) {
        case "todos":
          setFilteredProjects(projects);
          break;
        case "financiados":
          const financedProjects = projects.filter(
            project => project.porc_avance_financiacion > 0
          );
          setFilteredProjects(financedProjects);
          break;
        case "noFinanciados":
          const notFinancedProjects = projects.filter(
            project => project.porc_avance_financiacion === 0
          );
          setFilteredProjects(notFinancedProjects);
          break;
        default:
          setFilteredProjects(projects);
          break;
      }
    },
    [projects]
  );

  return (
    <div className="app">
      <div className="header">
        <hr />
        <h1>NUESTROS PROYECTOS</h1>
        <hr />
      </div>
      <Filter handleFilter={handleFilterChange} />
      <div className="projects_container">
        {filteredProjects.map(project =>
          <ProjectCard key={project.nombre_topico} project={project} />
        )}
      </div>
    </div>
  );
}

export default App;
