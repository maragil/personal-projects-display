import Input from './Input';
function FormProject(data) {
    return (
        <fieldset className='project'>
        <Input
          className='project__input'
          value={data.name}
          name='name'
          id='name'
          placeholder= 'Nombre del proyecto'
        />
        <Input
          className='project__input'
          value={data.slogan}
          name='slogan'
          id='slogan'
          placeholder= 'Slogan'
        />
        <Input
           className='project__input'
          value={data.repo}
          name='repo'
          id='repo'
          placeholder='Repo Ej. https://github.com/...'
          onChange={handleInput}
        />
        <Input
           className='project__input'
          value={data.demo}
          name='demo'
          id='demo'
          placeholder='Demo Ej. http://beta.adalab.es/...'
          onChange={handleInput}
        />
        <Input
           className='project__input'
          value={data.technologies}
          name='technologies'
          id='technologies'
          placeholder='Tecnologías'
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
    );
}

export default FormProject;