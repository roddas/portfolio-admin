import './EditForm.css';
import { ProjectType } from '../../../shared/Types';
type EditFormProps = {
  project: ProjectType;
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
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
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
                <input
                  type="submit"
                  className="btn mt-3 btn-primary"
                  value="Atualizar"
                />
              </section>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
