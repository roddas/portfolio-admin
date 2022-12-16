import './EditForm.css';
import { ProjectType } from '../Types';
type EditFormProps = {
  isVisible: boolean;
  project: ProjectType;
};

export const EditForm = (params: EditFormProps) => {
  const { isVisible } = params;
  const { title, projectDescription, link } = params.project;
  // const elementClassName = `form mb-3 ${isVisible ? 'active' : 'hidden'}`;
  return (
    <>
      <section className={isVisible ? 'hidden' : 'true'}>
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
          <label className="form-check-label" htmlFor="flexRadioDefault1">
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
          <label className="form-check-label" htmlFor="flexRadioDefault2">
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
    </>
  );
};
