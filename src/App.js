import Form from "./components/Form/Form";
import User from "./components/User/User";
import { useState } from "react";

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
      <Modal> open={isOpen} onClose={() => setIsOpen(false)}
        You must add users
      </Modal> 
    </div>
  );
}

export default App;
