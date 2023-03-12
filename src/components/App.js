/* IMPORT */

import "../styles/App.scss";
import cover from "../images/cover.jpeg";
import user from "../images/user.jpeg";
import logoAdalab from "../images/logo-adalab.png";
import { useState } from "react";
import dataApi from "../service/api";

function App() {
 /* const [name, setName] = useState("");
  const [slogan, setSlogan] = useState("");
  const [repo, setRepo] = useState("");
  const [demo, setDemo] = useState("");
  const [tec, setTec] = useState("");
  const [desc, setDesc] = useState("");
  const [nameUser, setNameUser] = useState("");
  const [jobUser, setJobUser] = useState("");*/
  const [urlCard, setUrlCard] = useState('');
  const [data, setData] = useState ({
    name: '',
    slogan: '',
    repo: '',
    demo: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
    image:'https://via.placeholder.com/140x130',
    photo:'https://via.placeholder.com/140x130',
  })
  let classHidden = 'hidden';
 /* function isValidText(text){
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*$/.test(text);
  }
  function isValidJob(text){
  return /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]*$/.test(text);
  }
  // function isValidMail(text){
  // // return /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(text);

  // return /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(text);
  // const urlRegex = `^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-zA-Z0-9]+([\\-\\.]{1}[a-zA-Z0-9]+)*\\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\\/\\/.*)?$`;

  // }
  const isValidRepo = (webpage) => {
  const urlRegex = "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-zA-Z0-9]+([\\-\\.]{1}[a-zA-Z0-9]+)*\\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\\/\\/.*)?$";
  return RegExp(urlRegex).test(webpage);
};*/

  /* EFECTOS */
  /* FUNCIONES HANDLER */
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setData({ ...data, [inputName]: inputValue });
    /*if (inputName === "name") {
      setData({
        ...data,name:inputValue
      });
      console.log(data);
    } else if (inputName === "slogan") {
      setData({
        ...data,slogan:inputValue
      });
    } else if (inputName === "repo") {
      setData({
        ...data,repo:inputValue
      });
    } else if (inputName === "demo")
    {if (isValidRepo(inputValue)){
      setData({
        ...data,demo:inputValue
      });
      console.log(isValidRepo(inputValue));
    } else if (inputName === "technologies") {
      setData({
        ...data,tec:inputValue
      });
    } else if (inputName === "desc") {
      setData({
        ...data,desc:inputValue
      });
    } else if (inputName === "autor")
    { if (isValidText(inputValue))
      setData({
        ...data,nameUser:inputValue
      });
    } else  setData({
      ...data,jobUser:inputValue
    });;*/
  };

  const handleClickCreate = (ev) => {
    ev.preventDefault();
    dataApi(data)
      .then(info => {
        console.log(info);
        setUrlCard(info.cardURL);
        
    })
  }
  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  /* HTML */
  return (
    <div className='container'>
      <header className='header'>
        <i className='fa-solid fa-laptop-code header__icon'></i>
        <p className='header__text'>Proyectos Molones</p>
        <img className='header__logo--adalab' src={logoAdalab} alt='Imagen de Adalab' />
      </header>
      <main className='main'>
        <section className='preview'>
          <img className='image' src={cover} alt='' />

          <section className='autor'>
            <section className='info-project'>
              <p className='subtitle'>Personal Project Card</p>
              <hr className='line' />

              <h2 className='title-project'>{data.name || "Elegant workspace"}</h2>
              <p className='slogan'>{data.slogan || "Diseños Exclusivos"}</p>
              <p className='desc'>
                {data.desc ||
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit Libero, delectus? Voluptates at hic aliquam porro ad suscip harum laboriosam saepe earum doloribus aperiam, ullam culpa accusantium placeat odit corrupti ipsum!"}
              </p>
              <section className='technologies'>
                <p className='text'>{data.technologies || "React JS, MongoDB"}</p>
                <div className='icons'>
                  <a href={data.repo}><i className='fas fa-globe icon'></i></a>
                  <a href={data.demo}><i className='fab fa-github icon'></i></a>
                </div>
              </section>
            </section>

            <section className='info-autor'>
              <img className='image-autor' src={user} alt='' />
              <p className='job'>{data.job || "Full Stack Developer"}</p>
              <p className='name'>{data.autor || "Emmelie Björklund"}</p>
            </section>
          </section>
        </section>

        <section className='form'>
          <h2 className='form__title'>Información</h2>

          <section className='ask-info'>
            <p className='ask-info__subtitle'>Cuéntanos sobre el proyecto</p>
            <hr className='line' />
          </section>

          <fieldset className='project'>
            <input
              className='project__input'
              type='text'
              placeholder='Nombre del proyecto'
              name='name'
              id='name'
              value={data.name}
              onChange={handleInput}
            />
            <input
              className='project__input'
              type='text'
              name='slogan'
              id='slogan'
              placeholder='Slogan'
              value={data.slogan}
              onChange={handleInput}
            />
            <input
              className='project__input'
              type='text'
              name='repo'
              id='repo'
              placeholder='Repo'
              value={data.repo}
              onChange={handleInput}
            />
            <input
              className='project__input'
              type='text'
              placeholder='Demo'
              name='demo'
              id='demo'
              value={data.demo}
              onChange={handleInput}
            />
            <input
              className='project__input'
              type='text'
              placeholder='Tecnologías'
              name='technologies'
              id='technologies'
              value={data.technologies}
              onChange={handleInput}
            />
            <textarea
              className='project__textarea'
              type='text'
              placeholder='Descripción'
              name='desc'
              id='desc'
              value={data.desc}
              onChange={handleInput}
            ></textarea>
          </fieldset>

          <section className='ask-info'>
            <p className='ask-info__subtitle'>Cuéntanos sobre la autora</p>
            <hr className='line' />
          </section>

          <fieldset className='autor'>
            <input
              className='autor__input'
              type='text'
              placeholder='Nombre'
              name='autor'
              id='autor'
              value={data.autor}
              onChange={handleInput}
            />
            <input
              className='autor__input'
              type='text'
              placeholder='Trabajo'
              name='job'
              id='job'
              value={data.job}
              onChange={handleInput}
            />
          </fieldset>

          <section className='buttons-img'>
            <button className='buttons-img__btn'>Subir foto de proyecto</button>
            <button className='buttons-img__btn'>Subir foto de autora</button>
          </section>
          <section className='buttons-img'>
            <button className='buttons-img__btn' onClick={handleClickCreate}>Crear Tarjeta</button>
          </section>

          <section className='card'>
            <span className=''> La tarjeta ha sido creada:</span>
            <a href={urlCard} className='' target='_blank' rel='noreferrer'>{urlCard}</a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
