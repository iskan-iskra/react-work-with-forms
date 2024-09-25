import { useAppForm } from "@/use";
import { useEffect, useRef, useState } from "react";
import { Button, Container } from "react-bootstrap";

const input_names = {
  user_name: "user_name",
  user_pass: "user_pass",
};

const errorFormInitial = {
  user_name: false,
  user_pass: false,
};

export const AppMainPage = () => {
  useEffect(() => {
    console.log("rerender");
  });

  const [inputValue, setInputValue] = useState("");
  const [errorForm, setErrorForm] = useState(errorFormInitial);

  const inputValueHandler = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const inputEl = useRef();

  const inputUncotrolledHanlder = () => {
    console.log(inputEl.current.value);
    inputEl.current.value;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const formEl = e.currentTarget;

    const formData = new FormData(formEl);

    const inputName = formData.get(input_names.user_name);

    const inputPassWord = formData.get(input_names.user_pass);

    const newErrors = Object.assign({}, errorFormInitial);

    if (inputPassWord.length < 5) {
      newErrors.user_pass = true;
    }

    if (inputName === "test") {
      newErrors.user_name = true;
    }

    setErrorForm((prev) => ({ ...prev, ...newErrors }));

    if (Object.values(newErrors).some(Boolean)) {
      return;
    }
    console.log("RESEND FORM DATA TO SERVER");
    console.log(
      `payload: user_pass: ${inputPassWord}; user_name: ${inputName}`
    );
  };

  const { values, errors, handleChange, handleSubmit } = useAppForm(
    {
      name: "",
      password: "",
    },
    {
      name: (v) => v === "test",
      password: (v) => v.length < 5,
    }
  );

  return (
    <Container className="pb-2">
      <h1>main page</h1>
      <h6>через new Form (submit)</h6>

      <form onSubmit={formSubmitHandler}>
        <input
          name={input_names.user_name}
          type="text"
          placeholder="user name"
        />
        {errorForm.user_name && <div>Введите корректное имя пользователя</div>}
        <hr />
        <input
          name={input_names.user_pass}
          type="password"
          placeholder="password"
        />
        {errorForm.user_pass && <div>Введите корректный пароль</div>}

        <hr />
        <Button type="submit">отправить</Button>
      </form>

      <hr />

      <h6>контролируемый компонент</h6>

      <input type="text" value={inputValue} onChange={inputValueHandler} />

      <hr />

      <h6>не контролируемый компонент</h6>

      <input type="text" ref={inputEl} onChange={inputUncotrolledHanlder} />

      <hr />

      <h6>custom form with hook</h6>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="user name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <div>Введите корректное имя пользователя</div>}
        <hr />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <div>Введите корректный пароль</div>}

        <hr />
        <Button type="submit">отправить</Button>
      </form>
    </Container>
  );
};
