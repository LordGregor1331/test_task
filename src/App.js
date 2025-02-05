import React, { useState, useEffect } from "react";
import Pagination from './components/Pagination'

const API_URL =
  "https://crm.server.pro-part.es/api/v1/secondary-projects/integration/projects?accessKey=A7gjfjj0WdBynt8d&secretKey=tGH5UlZcgNtAPrfq9MnmMhWji9j5vYXn&isPagination=true&size=30&page=0";

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({})
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
      .then((data) => {
        if (data.projects && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          console.error();
          setProjects([]);
        }
      })
      .catch((err) => setError(`Error: ${err}`))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1 className="page-title">Our apartments</h1>
      {loading && <p>Download...</p>}
      {error && <p>{error}</p>}
      
      {}
      <Pagination projects={projects} />
    </div>
  );
}

export default App;
