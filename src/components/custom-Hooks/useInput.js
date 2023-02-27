import { useReducer } from "react";

const initialState = {
  value: "",
  isTouched: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RESET": {
      return { value: "", isTouched: false };
    }
    case "INPUT": {
      return { value: action.value, isTouched: state.isTouched };
    }
    case "BLUR": {
      return { isTouched: true, value: state.value };
    }
  }
  return { reducer };
};

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(reducer, initialState);

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;
  const isTouched = inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
    console.log(isTouched);
  };

  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const resetInputValue = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isTouched,
    valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    resetInputValue,
    hasError,
  };
};

export default useInput;
