import { React, useState } from "react";
import styles from "./Form.module.css";
import User from "../User/User";
import ErrorModal from "../ErrorModal/ErrorModal";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState()

  function saveUsername(event) {
    setUsername(event.target.value);
  }
  function saveAge(event) {
    setAge(event.target.value);
  }
  function addUserHandler(event) {
    event.preventDefault();
    
    
    if (age.trim().length === 0 || username.trim().length === 0) {
      setError({
        title: "Error",
        message: "you must enter values"
      })
      return;
    }
    if(+age < 1){
      setError({
        title: 'Error',
        message: "Age can't be < 1"
      })
      return;
    }
    props.onAddUser(username, age);

    setAge("");
    setUsername("");
   
  }

  return (
    <div>
      {error && <ErrorModal setState={setError} title={error.title} message={error.message} />}
      <form className={styles.form} onSubmit={addUserHandler}>
        <div className="label">
          <label htmlFor="">Username</label>
        </div>
        <div className="input">
          <input type="text"  onChange={saveUsername} />
        </div>
        <div className="label">
          <label htmlFor="">Age (Years)</label>
        </div>
        <div className="input">
          <input type="number"  onChange={saveAge} />
        </div>
        <div>
          <button type="submit" className={styles["add-user-btn"]}>
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
