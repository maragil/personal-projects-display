import Input from "./Input";
import TextArea from "./TextArea";
function FormProject({
  data,
  setDataInput,
  setErrorValidationDemo,
  setErrorValidationRepo,
  errorValidationRepo,
  errorValidationDemo,
}) {
  return (
    <fieldset className="project">
      <Input
        className="project__input"
        value={data.name}
        name="name"
        id="name"
        placeholder="Nombre del proyecto"
        setDataInput={setDataInput}
      />
      <Input
        className="project__input"
        value={data.slogan}
        name="slogan"
        id="slogan"
        placeholder="Slogan"
        setDataInput={setDataInput}
      />
      <Input
        className="project__input"
        value={data.repo}
        name="repo"
        setErrorValidationRepo={setErrorValidationRepo}
        id="repo"
        pattern="((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$"
        placeholder="Repo Ej. https://github.com/..."
        setDataInput={setDataInput}
      />

      <span className={"text--error " + (!errorValidationRepo ? "hidden" : "")}>
        {errorValidationRepo}
      </span>
      <Input
        className="project__input"
        value={data.demo}
        name="demo"
        id="demo"
        setErrorValidationDemo={setErrorValidationDemo}
        pattern="(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-zA-Z0-9]+([\\-\\.]{1}[a-zA-Z0-9]+)*\\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\\/\\/.*)?$"
        placeholder="Demo Ej. http://beta.adalab.es/..."
        setDataInput={setDataInput}
      />
      <span className={"text--error " + (!errorValidationDemo ? "hidden" : "")}>
        {errorValidationDemo}
      </span>
      <Input
        className="project__input"
        value={data.technologies}
        name="technologies"
        id="technologies"
        placeholder="Tecnologías"
        setDataInput={setDataInput}
      />
      <TextArea
        className="project__textarea"
        type="text"
        placeholder="Descripción"
        name="desc"
        id="desc"
        value={data.desc}
        setDataInput={setDataInput}
      ></TextArea>
    </fieldset>
  );
}

export default FormProject;
