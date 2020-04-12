import React, { useState } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

const App = () => {
  const [text, setText] = useState('');
  const [textLength, setTextLength] = useState(0);


  const textLengthHandler = (event) => {
    setText(event.target.value);
    setTextLength(event.target.value.length)
  }

  const deleteCharHandler = (charIndex) => {
    const textArray = [...text];
    textArray.splice(charIndex, 1);
    setText(textArray.join(''));
    setTextLength(textArray.length)
  }

  return (
    <div>
      <input type="text" onChange={textLengthHandler} value={text}/> 
      <p>{textLength}</p>
      <Validation textLength={textLength}/>
      {text.split('').map((char, index) => {
        return <Char 
          char={char}
          click={() => deleteCharHandler(index)} 
          key={index}
          />
      })}
    </div>
  );
}

export default App;
