import Input from "./Input"; 
function FormAuthor(data) {
    return (
        <fieldset className='autor'>
        <Input
            className='autor__input'
            value={data.autor}
            name='autor'
            id='autor'
            placeholder='Nombre'
            onChange={handleInput}
          />
           <Input
            className='autor__input'
            value={data.job}
            name='job'
            id='job'
            placeholder='Trabajo'
            onChange={handleInput}
          />
        </fieldset>
    );
}

export default FormAuthor;