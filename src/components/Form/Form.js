import {React, useState} from "react";
import styles from "./Form.module.css";
import User from "../User/User";


const Form = (props) => {
    const [username, setUsername] = useState('')
    const [age, setAge] = useState('')

    function saveUsername(event){
        setUsername(event.target.value)
    }
    function saveAge(event){
        setAge("(" + event.target.value + " years old)")
    }
    function addUser(event){
        event.preventDefault();
        if(username.length === 0 && age.length === 0){
            return;
        }
        props.onAddUser(username, age)

    }

  return (
    <form className={styles.form} onSubmit={addUser}>
      <div className="label">
        <label htmlFor="">Username</label>
      </div>
      <div className="input">
        <input type="text" onChange={saveUsername} />
      </div>
      <div className="label">
        <label htmlFor="">Age (Years)</label>
      </div>
      <div className="input">
        <input type="number" onChange={saveAge} />
      </div>
      <div>
        <button  className={styles["add-user-btn"]}>Add User</button>
      </div>
    </form>
  );
};

export default Form;
