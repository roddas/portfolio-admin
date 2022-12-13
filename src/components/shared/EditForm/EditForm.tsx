import './EditForm.css';

export const EditForm = () => (
  <>
    <div className="form mb-3">
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
