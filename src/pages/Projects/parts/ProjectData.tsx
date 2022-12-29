import { MdDeleteForever, MdOutlineEdit } from 'react-icons/md';
import { ProjectType } from '../../../shared/Types';
import { EditForm } from './EditForm';

type ProjectDataType = {
  data: Array<ProjectType>;
};

const deleteBtn = () => {
  alert('delete');
};

export const ProjectData = (projects: ProjectDataType) => (
  <div className="container-fluid py-5">
    {projects.data.map((value, index) => {
      return (
        <div key={index} className="d-flex project justify-content-between">
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
              <p className="fst-normal descricao">{value.projectDescription}</p>
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
);
