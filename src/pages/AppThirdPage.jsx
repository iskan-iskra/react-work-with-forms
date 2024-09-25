import { useFormik } from "formik";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { object, string } from "yup";

const input_names = {
  user_name: "user_name",
  user_pass: "user_pass",
};

const submit = (data) => {
  console.log("resend:", data);
};

const yupShema = object({
  [input_names.user_name]: string()
    .required("Имя обязательное")
    .test("custom-check", "имя Test уже занято", (v) => v !== "test"),
  [input_names.user_pass]: string()
    .required("Пароль обязательный")
    .min(5, "Пароль должен состоять более чем из 5 символов"),
});

export const AppThirdPage = () => {
  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      [input_names.user_name]: "",
      [input_names.user_pass]: "",
    },
    validationSchema: yupShema,
    onSubmit: submit,
  });

  useEffect(() => {
    console.log("rerender");
  });

  return (
    <>
      <h1>third page</h1>
      <form onSubmit={handleSubmit}>
        <input
          name={input_names.user_name}
          type="text"
          placeholder="user name"
          value={values[input_names.user_name]}
          onChange={handleChange}
        />
        {errors[input_names.user_name] && (
          <div>{errors[input_names.user_name]}</div>
        )}
        <hr />
        <input
          name={input_names.user_pass}
          type="password"
          placeholder="password"
          value={values[input_names.user_pass]}
          onChange={handleChange}
        />
        {errors[input_names.user_pass] && (
          <div>{errors[input_names.user_pass]}</div>
        )}

        <hr />
        <Button type="submit">отправить</Button>
      </form>
    </>
  );
};
