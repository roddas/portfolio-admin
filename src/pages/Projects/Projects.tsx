import { useEffect, useState } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { LoadingData } from '../../components/Misc/LoadingData';
import { Footer } from '../../components/Footer/Footer';
import './Projects.css';
import { JSONResponseType, ProjectType } from '../../shared/Types';
import { REMOTE_URL } from '../../shared/constants';
import { ProjectData } from './parts/ProjectData';

export const ProjectsPage = () => {
  const [projects, updateProjects] = useState<Array<ProjectType>>();

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(REMOTE_URL + '/projects');
        const jsonData = (await response.json()) as JSONResponseType;
        const { statusCode, data } = jsonData;

        if (Number(statusCode) !== 200) {
          console.error(statusCode);
        } else {
          updateProjects([...data]);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getProjects();
  }, []);

  if (projects) {
    return (
      <>
        <Menu />
        <ProjectData data={projects} />
        <Footer />
      </>
    );
  }
  return (
    <>
      <Menu />
      <LoadingData />
      <Footer />
    </>
  );
};
