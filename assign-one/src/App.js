import React, { useState } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'; 
import UserOutput from './UserOutput/UserOutput';


const App = () => {
  const [userName, setUserName] = useState('Nathan')

  const changeUserName = (event) => {
    setUserName(event.target.value)
  }

  return (
    <div className="App">
      <UserOutput username={userName}></UserOutput>
      <UserInput username={userName} changed={changeUserName}></UserInput>
    </div>
  );
}

export default App;
