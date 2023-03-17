import Input from "./Input";
import TextArea from "./TextArea";
function FormProject({ data, setDataInput }) {
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
        id="repo"
        placeholder="Repo Ej. https://github.com/..."
        setDataInput={setDataInput}
      />
      <Input
        className="project__input"
        value={data.demo}
        name="demo"
        id="demo"
        placeholder="Demo Ej. http://beta.adalab.es/..."
        setDataInput={setDataInput}
      />
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
