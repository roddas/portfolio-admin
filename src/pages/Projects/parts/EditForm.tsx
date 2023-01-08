import { FormEvent } from 'react';
import './EditForm.css';
import { ProjectType } from '../../../shared/Types';
import { PROJECTS_URL } from '../../../shared/constants';
import { updateData } from '../../../utils/forms/fetch';

type EditFormProps = {
  project: ProjectType;
};

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  const form = document.querySelector('form') as HTMLElement;
  try {
    const response = await updateData(form);
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

export const EditForm = (params: EditFormProps) => {
  const { title, projectDescription, link, id } = params.project;
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
              action={PROJECTS_URL}
              encType="multipart/form-data"
              method="POST"
            >
              <div className="modal-body">
                <section>
                  <input
                    className="form-control mb-1"
                    type="text"
                    name="title"
                    value={title}
                    id="title"
                    required
                  />
                  <textarea
                    name="projectDescription"
                    value={projectDescription}
                    id="projectDescription"
                    className="form-control mb-1"
                    required
                  ></textarea>
                  <div className="form-check mb-1 ">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="state"
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
                      name="state"
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
                  <input type="hidden" name="id" value={id} />
                </section>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-primary"
                >
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
