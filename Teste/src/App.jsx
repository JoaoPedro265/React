import './App.css'
import { useState } from 'react'
//definir estado do botao
function Square({ value, onSquareClick }) {
  //mostrar o que vai aparecer no botao
  return <button className="square" onClick={onSquareClick}>{value}</button>
}


export default function Board() {
  // Agora `squares` é ["X", null, null, null, null, null, null, null, null];
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));//Array(9).fill(null) cria um array com nove elementos e define cada um deles como null

  //adiciona o X
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return
    }
    const nextSquares = squares.slice();//.slice() para criar uma cópia do array squares em vez de modificar o array existente
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  const winner =calculateWinner(squares);
  let status;
  if (winner){
    status = 'Winner:'+ winner
  }else{
    status = 'Next player:'+(xIsNext?'X':'O');
  }
  return (
    <div>
      <div className='status'>{status}</div>
      <div className="coluna1">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="coluna2">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="coluna3">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}7