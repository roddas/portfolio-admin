import './EditForm.css';

type EditFormVisibility = {
  isVisible: boolean;
};

export const EditForm = (visibility: EditFormVisibility) => {
  const { isVisible } = visibility;

  const elementClassName = `form mb-3 ${isVisible ? 'active' : 'hidden'}`;
  return (
    <>
      <div className={elementClassName}>
        <form
          encType="multipart/form-data"
          method="POST"
          action="#"
          className="my-3 editForm"
        >
          <input
            type="file"
            name="image"
            className="form-control"
            id="image"
            required
          />
          <input
            type="submit"
            className="btn mt-3 btn-primary"
            value="Atualizar"
          />
        </form>
      </div>
    </>
  );
};
