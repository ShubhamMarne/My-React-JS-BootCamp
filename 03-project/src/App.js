import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App() {
  const [users, addUsers] = useState([]);

  const onAddUser = (uname, uage) => {
    alert(uname);
    addUsers((prevState) => {
      return [...prevState, {name : uname, age : uage}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUser}/>
      <UserList Users={users}/>
    </div>
  );
}

export default App;
