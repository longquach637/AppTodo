import React from "react";
import { useState } from "react";

export default function Login(props) {
  const { email: propsEmail, password: propsPassword, dispatch } = props;
  const [isLoginDisabled, setIsLoginDisabled] = React.useState(true);
  const [email, setEmail] = React.useState(propsEmail || "");
  const [password, setPassword] = React.useState(propsPassword || "");

  React.useEffect(() => {
    validateForm();
  }, [email, password]);

  const validateEmail = (text) => /@/.test(text);

  const validateForm = () => {
    setIsLoginDisabled(password.length < 8 || !validateEmail(email));
  };

  const handlePasswordChange = (evt) => {
    const passwordValue = evt.target.value.trim();
    setPassword(passwordValue);
  };

  const handleSubmit = () => {
    dispatch("submit(email, password)");
    setIsLoginDisabled(true);
  };

  const handleDelete = () => {};

  const [counter, setcounter] = useState(0);

  return (
    <form>
      <span className="mx-auto" />
      <input
        type="password"
        id="my-2"
        onChange={handlePasswordChange}
        value={password}
      />
      <input
        type="button"
        className="btn btn-primary"
        onClick={handleSubmit}
        disabled={isLoginDisabled}
        value="Submit"
      />
      <button onClick={handleDelete}>Delelte</button>
      <div>
        <h1>This is counter app</h1>
        <div id="counter-value">{counter}</div>
        <button id="increment-btn" onClick={() => setcounter(counter + 1)}>
          Increment
        </button>
        <button id="decrement-btn" onClick={() => setcounter(counter - 1)}>
          Decrement
        </button>
      </div>
    </form>
  );
}
