function Input({value, id, placeholder, name, setDataInput, className}) {
    console.log(setDataInput);
    const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    setDataInput(inputValue,inputName);
    };
    return (
        <input
            className={className}
            type='text'
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={handleInput}
        />
    );
}

export default Input;