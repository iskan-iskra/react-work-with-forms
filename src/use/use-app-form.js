import { useState } from "react";

export const useAppForm = (initialValues, validators = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    // Валидация при вводе
    if (validators[name]) {
      const error = validateField(name, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    }
  };

  const validateField = (name, value) => {
    const validator = validators[name];
    if (validator) {
      return validator(value);
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(values).forEach((key) => {
      newErrors[key] = validateField(key, values[key]);
    });
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("данные отправлены на сервер");
    } else {
      console.log("ошибки:", errors);
    }
  };

  return { values, errors, handleChange, handleSubmit };
};
