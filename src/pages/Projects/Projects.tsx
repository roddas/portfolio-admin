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
  const toggleButton = () => {
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
                    style={{ visibility: 'hidden' } as CSSProperties}
                    className="p-1"
                  >
                    <MdOutlineEdit />
                  </li>
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
                <div className="data d-flex justify-content-center mb-3'">
                  <section className="projectImage justify-content-end">
                    <img src={value.image} width={256} height={256} alt="" />
                  </section>
                  <section className="projectInformations align-items-center p-3">
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
                </div>
              </div>
            );
          })}
          <EditForm isVisible={isClicked} />
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

/*
const editBtn = () => {
  // alert('edit');
  const imageElement = document.querySelector('.projectImage');
  // Creates the base form
  const newForm = document.createElement('form');
  newForm.action = '';
  newForm.className = 'my-3';
  newForm.method = 'POST';
  newForm.enctype = 'multipart/form-data';

  // Creates the div to wrap the element
  const div = document.createElement('div');
  div.className = 'mb-3';

  // Creates the input element to upload the image
  const inputFile = document.createElement('input');
  inputFile.type = 'file';
  inputFile.className = 'form-control';
  inputFile.id = 'formFile';
  inputFile.required = true;

  // Creates the submit button
  const inputSubmit = document.createElement('input');
  inputSubmit.type = 'submit';
  inputSubmit.className = 'btn btn-primary';
  inputSubmit.innerText = 'Atualizar';

  // Append the label and input to the wrapper
  div.appendChild(inputFile);
  newForm.appendChild(div);
  newForm.appendChild(inputSubmit);
  imageElement?.appendChild(newForm);
};

*/
