import './App.css'
import { useState } from 'react';

function Square() {

  const [value, setValue] = useState(null)

  //Acáo do botao
  function handleClick() {
    setValue('x');
  }
  return <button
    className="square"
    onClick={handleClick}
  >
    {value}
  </button>;
}
//botoes/aparencia
export default function Board() {
  return (
    <div>
      <div className="coluna1">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="coluna2">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="coluna3">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </div>
  );
}

