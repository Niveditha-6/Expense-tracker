import { useState } from "react";
const useForm = (addExpense) => {
  const [state, setState] = useState({});

    const handleSubmit = (e) => {
      e.preventDefault();
      addExpense();
    };
  const handleInputChange = (e) => {
    setState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return [state, handleInputChange, setState, handleSubmit];
};
export default useForm;
