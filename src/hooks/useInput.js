import { useState } from "react";

const useInput = (initialValue, validationFunction) => {
  const [value, setValue] = useState(initialValue);
  const [touched, setTouched] = useState(false);

  const reset = () => {
    setValue(initialValue);
  };

  const hanleInputChange = (event) => {
    setValue(event.target.value);
    setTouched(false);
  };

  const handleInputBlur = () => {
    setTouched(true);
  };

  const isValid = validationFunction(value);

  return {
    value,
    reset,
    hanleInputChange,
    handleInputBlur,
    hasError: touched && !isValid,
    touched,
    isValid,
  };
};

export default useInput;
