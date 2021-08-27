import React from "react";
import styles from "./User.module.css";

const User = (props) => {
  const users = props.users.map((user) => user);
  const arrayLength = users.length;
  if (arrayLength > 0) {
    return (
      <div className={styles.users}>
        {props.users.map((user) => {
          return (
            <div className={styles.output}>
              {user.username} {user.age}
            </div>
          );
        })}
      </div>
    );
  } 
return null;
  
};

export default User;
