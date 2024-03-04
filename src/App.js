import UserForm from "./UserForm";
import { useState } from 'react';
import UserList from "./UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const onAddUser = (user) => {
    setUserList(s => ([...s, user]));
  };

  return (
    <div>
      <UserForm onSubmit={onAddUser} />
      <hr />
      <UserList list={userList} />
    </div>
  )
}

export default App;
