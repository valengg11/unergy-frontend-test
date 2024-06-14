import {useEffect, useState} from 'react';
import axios from 'axios';
import ProjectCard from './components/project-card/ProjectCard';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('/api/landing/project/');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching the projects:', error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="app">
      <h1>Projectos</h1>
      {projects.map(project => (
        <ProjectCard key={project.nombre_topico} project={project} />
      ))}
    </div>
  );
}

export default App;
