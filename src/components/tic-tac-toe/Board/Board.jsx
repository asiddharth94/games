import { useState } from "react";

import Square from "../Square/Square";

const calculateWinner = (board) => {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let index = 0; index < winCombinations.length; index++) {
    const [a, b, c] = winCombinations[index];
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return board[a];
    }
  }
  return;
};

const Board = () => {
  const [move, setMove] = useState({
    squares: Array(9).fill(null),
    isXNext: true,
  });

  const renderSquare = (index) => {
    return (
      <Square
        value={move.squares[index]}
        handleClick={() => handleClick(index)}
      />
    );
  };

  const handleClick = (index) => {
    const squares = move.squares.slice();
    if (calculateWinner(squares) || squares[index]) return;
    squares[index] = move.isXNext ? "X" : "O";
    const winner = calculateWinner(squares);
    if (winner) console.log("Winner: ", winner);

    setMove({ squares: squares, isXNext: !move.isXNext });
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div className="board-info">
        <p>Next player is: {move.isXNext ? "X" : "O"}</p>
      </div>
    </div>
  );
};

export default Board;
