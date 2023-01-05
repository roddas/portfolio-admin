import './EditForm.css';
import { ProjectType } from '../../../shared/Types';

type EditFormProps = {
  project: ProjectType;
};

const handleSubmit = () => {
  alert('Oskay');
};

export const EditForm = (params: EditFormProps) => {
  const { title, projectDescription, link } = params.project;
  // const elementClassName = `form mb-3 ${isVisible ? 'active' : 'hidden'}`;
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Editar o projeto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form
              action="#"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
              method="post"
            >
              <div className="modal-body">
                <section>
                  <input
                    className="form-control mb-1"
                    type="text"
                    name="titulo"
                    value={title}
                    id="titulo"
                    required
                  />
                  <textarea
                    name="descricao"
                    value={projectDescription}
                    id="descricao"
                    className="form-control mb-1"
                    required
                  ></textarea>
                  <div className="form-check mb-1 ">
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
                  <div className="form-check mb-1">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
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
                    className="form-control mb-1"
                    name="link"
                    value={link}
                    id="link"
                    required
                  />
                  <input
                    type="file"
                    name="image"
                    className="form-control mb-1"
                    id="image"
                    required
                  />
                </section>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-primary">
                  Atualizar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
