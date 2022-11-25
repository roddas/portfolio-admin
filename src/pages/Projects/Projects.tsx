import { CSSProperties, FC, useEffect, useState } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { NoData } from '../../components/Misc/NoData';
import { Footer } from '../../components/Footer/Footer';

import './Projects.css';
import { JSONResponseType, ProjectType } from '../../shared/Types';
import { REMOTE_URL } from '../../shared/constants';

const deleteBtn = () => {
  alert('delete');
};

export const ProjectsPage: FC = () => {
  const [projects, updateProjects] = useState<Array<ProjectType>>();
  const [isClicked, setClicked] = useState(false);

  const editBtn = () => {
    const editImage = document.querySelector('.editBtn');
    editImage?.setAttribute('src', isClicked ? 'edit.svg' : 'x.svg');
    setClicked(!isClicked);
  };

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
                className="d-flex project justify-content-center"
              >
                <ul>
                  <li
                    className="p-1"
                    style={{ visibility: 'hidden' } as CSSProperties}
                  >
                    <img
                      onClick={() => {
                        editBtn();
                      }}
                      src="edit.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </li>
                  <li className="p-1">
                    <img
                      onClick={() => {
                        editBtn();
                      }}
                      className="editBtn"
                      src="edit.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </li>
                  <li className="p-1">
                    <img
                      onClick={() => {
                        deleteBtn();
                      }}
                      src="delete.svg"
                      width={16}
                      height={16}
                      alt=""
                    />
                  </li>
                </ul>
                <div className="data d-flex justify-content-center mb-3'">
                  <section className="projectImage justify-content-end">
                    <img src={value.image} width={256} height={256} alt="" />
                  </section>
                  <section className="projectInformations align-items-center p-3">
                    <p className="fw-bolder titulo">{value.title}</p>
                    <p className="fst-normal">{value.projectDescription}</p>
                    <p className="fw-bolder titulo">
                      Estado :{' '}
                      <span className="fst-italic">{value.state}. </span>
                    </p>
                    <span className="fw-bolder titulo">
                      Link :{' '}
                      <a
                        target="_blank"
                        href={value.link}
                        className="fst-italic fw-lighter"
                        rel="noreferrer"
                      >
                        Clique aqui{' '}
                      </a>
                    </span>
                    <div>{isClicked ? 'Clicado' : 'não'}</div>
                  </section>
                </div>
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
      <NoData />
      <Footer />
    </>
  );
};
