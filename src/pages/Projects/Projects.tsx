import { useEffect, useState } from 'react';
import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md';
import { Menu } from '../../components/Menu/Menu';
import { LoadingData } from '../../components/Misc/LoadingData';
import { Footer } from '../../components/Footer/Footer';
import { EditForm } from './parts/EditForm';
import './Projects.css';
import { JSONResponseType, ProjectType } from '../../shared/Types';
import { REMOTE_URL } from '../../shared/constants';

const deleteBtn = () => {
  alert('delete');
};

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
        <div className="container-fluid py-5">
          {projects.map((value, index) => {
            return (
              <div
                key={index}
                className="d-flex project justify-content-between"
              >
                <ul>
                  <li style={{ visibility: 'hidden' }}>fsfsdf</li>
                  <li className="p-1">
                    <MdOutlineEdit
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    />
                  </li>
                  <li className="p-1">
                    <MdDeleteForever onClick={deleteBtn} />
                  </li>
                </ul>
                <img
                  src={value.image}
                  width={256}
                  height={256}
                  alt=""
                  className="image mx-2"
                />
                <section className="project_information">
                  <section>
                    <p className="fw-bolder titulo">{value.title}</p>
                    <p className="fst-normal descricao">
                      {value.projectDescription}
                    </p>
                    <p className="fw-bolder titulo">
                      Estado :{' '}
                      <span className="fst-italic estado">{value.state}. </span>
                    </p>
                    <span className="fw-bolder titulo">
                      Link :{' '}
                      <a
                        target="_blank"
                        href={value.link}
                        className="fst-italic fw-lighter link"
                        rel="noreferrer"
                      >
                        Clique aqui{' '}
                      </a>
                    </span>
                  </section>
                  <EditForm project={value} />
                </section>
              </div>
            );
          })}
        </div>
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
