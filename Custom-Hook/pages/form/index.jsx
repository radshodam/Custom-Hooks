import { useState, useEffect } from "react";

function useInputValidation(initialValue, validationFunction) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(null);

  useEffect(() => {
    validateInput(value);
  }, [value]);

  function validateInput(value) {
    if (validationFunction(value)) {
      setError(null);
    } else {
      setError("Invalid input");
    }
  }

  function handleChange(event) {
    const newValue = event.target.value;
    setValue(newValue);
  }

  return [value, handleChange, error];
}

function Index() {
  const [phone, setPhone, phoneError] = useInputValidation("", (value) =>
    /^[0-9]{10}$/.test(value)
  );
  const [password, setPassword, passwordError] = useInputValidation(
    "",
    (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(value)
  );
  const [repeatPassword, setRepeatPassword, repeatPasswordError] =
    useInputValidation("", (value) => value === password);

  const [address, setAddress, addressError] = useInputValidation(
    "",
    (value) => value.trim().length > 0
  );

  function handleSubmit(event) {
    event.preventDefault();

    // Submit form data
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone:
        <input type="text" value={phone} onChange={setPhone} />
        {phoneError && <span>{phoneError}</span>}
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={setPassword} />
        {passwordError && <span>{passwordError}</span>}
      </label>
      <br />
      <label>
        Repeat Password:
        <input
          type="password"
          value={repeatPassword}
          onChange={setRepeatPassword}
        />
        {repeatPasswordError && <span>{repeatPasswordError}</span>}
      </label>
      <br />
      <label>
        Address:
        <input type="text" value={address} onChange={setAddress} />
        {addressError && <span>{addressError}</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Index;
