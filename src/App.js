import {useEffect, useState} from 'react';
import axios from 'axios';

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

  console.log(projects)

  return (
    <div className="app">
      <h1>Projectos</h1>
    </div>
  );
}

export default App;
