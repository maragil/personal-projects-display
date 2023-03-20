import Input from "./Input";
function FormAuthor({ data, setDataInput }) {
  return (
    <fieldset className="autor">
      <label className="card" htmlFor="autor">
        Nombre del autor
        <Input
          className="autor__input"
          value={data.autor}
          name="autor"
          id="autor"
          placeholder="Nombre"
          setDataInput={setDataInput}
        />
      </label>
      <Input
        className="autor__input"
        value={data.job}
        name="job"
        id="job"
        placeholder="Trabajo"
        setDataInput={setDataInput}
      />
    </fieldset>
  );
}

export default FormAuthor;
