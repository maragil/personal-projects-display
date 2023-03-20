function Input({
  value,
  id,
  placeholder,
  name,
  setDataInput,
  setErrorValidationRepo,
  setErrorValidationDemo,
  className,
  pattern,
  label,
}) {
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;
    if (inputName === "repo") setErrorValidationRepo("");
    if (inputName === "demo") setErrorValidationDemo("");
    setDataInput(inputValue, inputName);
  };
  const handleBlur = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

  const urlRegex =
    "^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[a-zA-Z0-9]+([\\-\\.]{1}[a-zA-Z0-9]+)*\\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\\/\\/.*)?$";
    if (inputName === "repo") {
      console.log(RegExp(urlRegex).test(inputValue));
      RegExp(urlRegex).test(inputValue) || !inputValue
        ? setErrorValidationRepo("")
        : setErrorValidationRepo(
            "Error: El formato debe ser https://github.com/..."
          );
    }
    if (inputName === "demo") {
      console.log(RegExp(urlRegex).test(inputValue));
      RegExp(urlRegex).test(inputValue) || !inputValue
        ? setErrorValidationDemo("")
        : setErrorValidationDemo(
            "Error: El formato debe ser http://beta.adalab.es/..."
          );
    }
  };
  return (
    <label className="label">{label}
    <input
      className={className}
      type="text"
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      onChange={handleInput}
      required
      pattern={pattern}
      onBlur={handleBlur}
    />
    </label>
  );
}

export default Input;
