import Form from "./components/Form/Form";
import User from "./components/User/User";
import { useState } from "react";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [users, setAddUser] = useState([])
  const addUser = (username, age) => {
    setAddUser(prevState => {
      const updatedUsers = [ ...prevState];
      updatedUsers.unshift({username: username, age: age})
      return updatedUsers;
    })
  }
  return (
    <div>
      <Form onAddUser={addUser}/>
      <User users={users}/>
    </div>
  );
}

export default App;
