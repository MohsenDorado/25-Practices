"use client";
import React, { useEffect, useState } from "react";
import { GoCircle } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const Square = ({ value, onClick }: { value: any; onClick: any }) => {
  return (
    <button
      disabled={value}
      onClick={onClick}
      className="p-3 border border-purple-400 h-[100px] w-[100px] text-3xl font-bold bg-purple-50 hover:bg-purple-100"
    >
      {value}
    </button>
  );
};
const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (currentSquare: any) => {
    let copySquares = [...squares];
    copySquares[currentSquare] = isXTurn ? (
      <RxCross2 className="cross font-extrabold text-7xl" />
    ) : (
      <GoCircle className="o font-extrabold text-7xl" />
    );
    setIsXTurn((prev) => !prev);
    setSquares(copySquares);
    console.log(squares);
  };
  const winner = (squares: any) => {
    const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];
    for (let i = 0; i < winnerPatterns.length; i++) {
      const [x, y, z] = winnerPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }
  };
  console.log(squares);
  useEffect(() => {
    if (!winner(squares) && squares.every((i) => i !== "")) {
        setStatus('This is a Tie! restart the game ')
    }else if (winner(squares)) {
        setStatus(`Winner is ${winner(squares)},Please restart the game!`)
        
    }else  {
        setStatus(`Next player is ${isXTurn ? (
            <RxCross2 className="cross font-extrabold text-7xl" />
          ) : (
            <GoCircle className="o font-extrabold text-7xl" />
          )}`)
        
    }

  }, [squares, isXTurn]);

  return (
    <div className="flex items-center flex-col h-[100vh]">
      <h1 className="font-extrabold text-6xl m-10">Tic Tac Toe</h1>
      <div className="mt-10">
        <div className="">
          <Square
            onClick={() => {
              handleClick(0);
            }}
            value={squares[0]}
          />
          <Square
            onClick={() => {
              handleClick(1);
            }}
            value={squares[1]}
          />
          <Square
            onClick={() => {
              handleClick(2);
            }}
            value={squares[2]}
          />
        </div>
        <div>
          <Square
            onClick={() => {
              handleClick(3);
            }}
            value={squares[3]}
          />
          <Square
            onClick={() => {
              handleClick(4);
            }}
            value={squares[4]}
          />
          <Square
            onClick={() => {
              handleClick(5);
            }}
            value={squares[5]}
          />
        </div>
        <div>
          <Square
            onClick={() => {
              handleClick(6);
            }}
            value={squares[6]}
          />
          <Square
            onClick={() => {
              handleClick(7);
            }}
            value={squares[7]}
          />
          <Square
            onClick={() => {
              handleClick(8);
            }}
            value={squares[8]}
          />
        </div>
      </div>
<h1>{status}</h1>    </div>
  );
};

export default TicTacToe;
