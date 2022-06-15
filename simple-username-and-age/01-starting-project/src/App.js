import React, { useState } from 'react';
import NewUser from './Components/NewUser/NewUser';
import Users from './Components/Users/Users';

function App() {

 const[userList, setUserList] = useState([]);
 const addUserHandler = ( uName, uAge) => {
  setUserList((prevUserList) => {
    return [...prevUserList, {name: uName, age:uAge }];
  });
 }
  return (
    <div>
      <NewUser onAddUser={addUserHandler}></NewUser>
      <Users item={userList}></Users>
    </div>
  );
}

export default App;
