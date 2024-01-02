// ProjectsPage.tsx
import React from 'react';
import { ApiResponse, useGetProjectsQuery } from '../../store/API/Api';

interface Project {
  id: number;
  title: string;
  description: string;
  owner: string;
}

const ProjectsPage: React.FC = () => {
  const { data, error, isLoading } = useGetProjectsQuery({ status: 'active', role: 'owner' });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    // Проверяем, является ли ошибка типом SerializedError
    if ('status' in error && error.status === 'FETCH_ERROR' && error.error) {
      console.error(`Fetch error: ${error.error}`);
    } else {
      // Или обрабатываем другие типы ошибок
      console.error(`Unknown error: ${JSON.stringify(error)}`);
    }
    return <div>Error loading data</div>;
  }

  const projects: Project[] = (data as ApiResponse)?.result?.projects?.projects || [];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>Owner: {project.owner}</p>
            {/* Добавьте вывод других полей проекта, если необходимо */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsPage;
