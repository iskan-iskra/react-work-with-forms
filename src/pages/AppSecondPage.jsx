import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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

export const AppSecondPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yupShema),
  });

  useEffect(() => {
    console.log("rerender");
  });

  return (
    <>
      <h1>second page</h1>
      <form onSubmit={handleSubmit(submit)}>
        <input
          {...register(input_names.user_name)}
          type="text"
          placeholder="user name"
        />
        {errors[input_names.user_name] && (
          <div>{errors[input_names.user_name].message}</div>
        )}
        <hr />
        <input
          {...register(input_names.user_pass)}
          type="password"
          placeholder="password"
        />
        {errors[input_names.user_pass] && (
          <div>{errors[input_names.user_pass].message}</div>
        )}

        <hr />
        <Button type="submit">отправить</Button>
      </form>
    </>
  );
};
