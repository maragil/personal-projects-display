/* IMPORT */
import "../styles/App.scss";


import { useState } from "react";
import dataApi from "../service/api";
import Header from "./Header";
import Preview from "./main/Preview";
import FormAuthor from "./main/FormAuthor";
import FormProject from "./main/FormProject";
import GetAvatar from "./avatar/GetAvatar";

function App() {
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
    image:'',
    photo:'',
  })

  const [avatar, setAvatar] = useState('');
  const [autor, setAutor] = useState('');

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
  // const handleInput = (ev) => {
  //   const inputValue = ev.target.value;
  //   const inputName = ev.target.name;
  //   setData({ ...data, [inputName]: inputValue });
  // };
  const setDataInput = (inputValue,inputName) =>{
    setData({ ...data, [inputName]: inputValue });
  }
  const handleClickCreate = (ev) => {
    ev.preventDefault();
    dataApi(data)
      .then(info => {
        console.log(info);
        setUrlCard(info.cardURL);
    })
  };

  const updateAvatar = (avatar) => {
    setData({...data, image: avatar});
  };

  const updateAutor = (autor) => {
    setData({...data, photo: autor});
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  /* HTML */
  return (
    <div className='container'>
      <Header/>
      <main className='main'>
        <Preview

          data={data}

        />
        <section className='form'>
          <h2 className='form__title'>Información</h2>

          <section className='ask-info'>
            <p className='ask-info__subtitle'>Cuéntanos sobre el proyecto</p>
            <hr className='line' />
          </section>

          <FormProject
            data={data}
            setDataInput={setDataInput} />

          <section className='ask-info'>
            <p className='ask-info__subtitle'>Cuéntanos sobre la autora</p>
            <hr className='line' />
          </section>

          <FormAuthor
            data={data}
            setDataInput={setDataInput} />

          <section className='buttons-img'>
            {/* <button className='buttons-img__btn'
            >Subir foto de proyecto</button> */}

            <GetAvatar avatar={avatar}
            updateAvatar={updateAvatar}
            value='Subir foto del ptoyecto'
            className='buttons-img__btn'
            />

            <GetAvatar avatar={autor}
            updateAvatar={updateAutor}
            value='Subir foto autora'
            className='buttons-img__btn'
            />

            <button className='buttons-img__btn'>Subir foto de autora</button>
          </section>
          <section className='buttons-img'>
            <button className='buttons-img__btn' onClick={handleClickCreate}>Crear Tarjeta</button>
          </section>

          <section className={'card ' + (!urlCard ? 'hidden' : '')}>
            <span className=''> La tarjeta ha sido creada:</span>
            <a href={urlCard} className='card' target='_blank' rel='noreferrer'>{urlCard}</a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;
