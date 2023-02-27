import useInput from "./custom-Hooks/useInput";
import "../index.css";

const isNotEmpty = (value) => value.trim() !== "";
const emailisValid = (value) => value.includes("@");

const BasicForm = () => {
  const {
    value: enteredName,
    valueIsValid,
    valueChangeHandler: nameHandler,
    resetInputValue,
    hasError,
    inputBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    valueChangeHandler: lastNameHandler,
    resetInputValue: resetLastName,
    hasError: lastNameHasError,
    inputBlurHandler: inputLastBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    valueChangeHandler: emailHandler,
    resetInputValue: resetEmail,
    hasError: emailHasError,
    inputBlurHandler: inputEmailBlurHandler,
  } = useInput(emailisValid);

  const NameClass = hasError ? "form-control invalid" : "form-control";
  const LastNameClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailClass = emailHasError ? "form-control invalid" : "form-control";

  let formIsValid = false;
  let check = true;

  if (valueIsValid) {
    formIsValid = true;
  }
  console.log("check", isNotEmpty);
  const submitHandler = (event) => {
    event.preventDefault();
    resetInputValue();
    resetLastName();
    resetEmail();
  };

  return (
    <form className="control-group" onSubmit={submitHandler}>
      <div className={NameClass}>
        <label>Name</label>
        <input
          onChange={nameHandler}
          onBlur={inputBlurHandler}
          type="text"
          value={enteredName}
        />

        {hasError && <p className="error-text">Name field cannot be empty</p>}
      </div>
      <div className={LastNameClass}>
        <label>Last Name</label>
        <input
          onChange={lastNameHandler}
          type="text"
          value={enteredLastName}
          onBlur={inputLastBlurHandler}
        />
        {lastNameHasError && (
          <p className="error-text">Last Name field cannot be empty</p>
        )}
      </div>
      <div className={emailClass}>
        <label>Email Address</label>
        <input
          onChange={emailHandler}
          type="email"
          value={enteredEmail}
          onBlur={inputEmailBlurHandler}
        />
        {emailHasError && (
          <p className="error-text">Field name cannot be empty</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
