import { CSSProperties, useEffect, useState } from 'react';
import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Menu } from '../../components/Menu/Menu';
import { NoData } from '../../components/Misc/NoData';
import { Footer } from '../../components/Footer/Footer';
import { EditForm } from '../../components/shared/EditForm/EditForm';
import './Projects.css';
import { JSONResponseType, ProjectType } from '../../shared/Types';
import { REMOTE_URL } from '../../shared/constants';

const deleteBtn = () => {
  alert('delete');
};

export const ProjectsPage = () => {
  const [projects, updateProjects] = useState<Array<ProjectType>>();
  const [isClicked, setClicked] = useState(false);
  const [isEdited, setEdited] = useState(false);
  const [isVisible, setVisible] = useState(true);

  const toggleButton = () => {
    setClicked(!isClicked);
    setEdited(!isEdited);
    setVisible(!isVisible);
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
                className="d-flex project justify-content-between"
              >
                <ul>
                  <li className="p-1">
                    {!isClicked ? (
                      <MdOutlineEdit onClick={toggleButton} />
                    ) : (
                      <AiFillCloseCircle onClick={toggleButton} />
                    )}
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
                  <section className={isVisible ? 'active' : 'hidden'}>
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
                  <section className={isVisible ? 'hidden' : 'true'}>
                    <input
                      type="text"
                      name="titulo"
                      value={value.title}
                      id="titulo"
                      required
                    />
                    <textarea
                      name="descricao"
                      value={value.projectDescription}
                      id="descricao"
                      className="form-control .my-3"
                      required
                    ></textarea>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault1"
                      >
                        Em andamento
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexRadioDefault2"
                      >
                        Finalizado
                      </label>
                    </div>
                    <input
                      type="text"
                      name="link"
                      value={value.link}
                      id="link"
                      required
                    />
                    <EditForm isVisible={isClicked} />
                  </section>
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
      <NoData />
      <Footer />
    </>
  );
};
