/* IMPORT */

import "../styles/App.scss";
import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";
import logoAdalab from "../images/logo-adalab.png";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [repo, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [tec, setTec] = useState("");
  const [desc, setDesc] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [jobUser, setJobUser] = useState("");
  /* EFECTOS */
  /* FUNCIONES HANDLER */
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === "name") {
      setName(inputValue);
    } else if (inputName === "slogan") {
      setSlogan(inputValue);
    } else if (inputName === "repo") {
      setRepo(inputValue);
    } else if (inputName === "demo") {
      setDemo(inputValue);
    } else if (inputName === "technologies") {
      setTec(inputValue);
    } else if (inputName === "desc") {
      setDesc(inputValue);
    } else if (inputName === "autor") {
      setNameUser(inputValue);
    } else setJobUser(inputValue);
  };
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  /* HTML */
  return (
    <div className='container'>
      <header className='header'>
        <i className='fa-solid fa-laptop-code icon'></i>
        <p className='text'>Proyectos Molones</p>
        <img className='logo--adalab' src={logoAdalab} alt='Imagen de Adalab' />
      </header>
      <main className='main'>
        <section className='preview'>
          <img className='image' src={cover} alt='' />

          <section className='autor'>
            <section className='info-project'>
              <p className='subtitle'>Personal Project Card</p>
              <hr className='line' />

              <h2 className='title'>{name || "Elegant workspace"}</h2>
              <p className='slogan'>{slogan || "Diseños Exclusivos"}</p>
              <p className='desc'>
                {desc ||
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Libero, delectus? Voluptates at hic aliquam porro ad suscip harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!"}
              </p>
              <section className='technologies'>
                <p className='text'>{tec || "React JS, MongoDB"}</p>
              </section>
            </section>

            <section className='info-autor'>
              <img className='image' src={user} alt='' />
              <p className='job'>{jobUser || "Full Stack Developer"}</p>
              <p className='name'>{nameUser || "Emmelie Björklund"}</p>
            </section>
          </section>
        </section>

        <section className='form'>
          <h2 className='form__title'>Información</h2>

          <section className='ask-info'>
            <p className='subtitle'>Cuéntanos sobre el proyecto</p>
            <hr className='line' />
          </section>

          <fieldset className='project'>
            <input
              className='project__input'
              type='text'
              placeholder='Nombre del proyecto'
              name='name'
              id='name'
              value={name}
              onChange={handleInput}
            />
            <input
              className='project__input'
              type='text'
              name='slogan'
              id='slogan'
              placeholder='Slogan'
              value={slogan}
              onChange={handleInput}
            />
            <input
              className='project__input'
              type='text'
              name='repo'
              id='repo'
              placeholder='Repo'
              value={repo}
              onChange={handleInput}
            />
            <input
              className='project__input'
              type='text'
              placeholder='Demo'
              name='demo'
              id='demo'
              value={demo}
              onChange={handleInput}
            />
            <input
              className='project__input'
              type='text'
              placeholder='Tecnologías'
              name='technologies'
              id='technologies'
              value={tec}
              onChange={handleInput}
            />
            <textarea
              className='project__textarea'
              type='text'
              placeholder='Descripción'
              name='desc'
              id='desc'
              value={desc}
              onChange={handleInput}
            ></textarea>
          </fieldset>

          <section className='ask-info'>
            <p className='subtitle'>Cuéntanos sobre la autora</p>
            <hr className='line' />
          </section>

          <fieldset className='autor'>
            <input
              className='autor__input'
              type='text'
              placeholder='Nombre'
              name='autor'
              id='autor'
              value={nameUser}
              onChange={handleInput}
            />
            <input
              className='autor__input'
              type='text'
              placeholder='Trabajo'
              name='job'
              id='job'
              value={jobUser}
              onChange={handleInput}
            />
          </fieldset>

          <section className='buttons-img'>
            <button className='buttons-img__btn'>Subir foto de proyecto</button>
            <button className='buttons-img__btn'>Subir foto de autora</button>
          </section>
          <section className='buttons-img'>
            <button className='buttons-img__btn'>Crear Tarjeta</button>
          </section>

          <section className='card'>
            <span className=''> La tarjeta ha sido creada: </span>
            <a href='' className='' target='_blank' rel='noreferrer'></a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
