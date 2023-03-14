function Input(value, id, placeholder, name, onChange, className) {
    return (
        <input
            className={className}
            type='text'
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;