import React from "react";

export default function TicTacToe() {
  const renderSquare = () => {
    return (
    <button className='sqaure'>X</button>
    )
}

  return (
    <div className='board'>
      <div className='board-row'>
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className='board-row'>
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
      <div className='board-row'>
        {renderSquare()}
        {renderSquare()}
        {renderSquare()}
      </div>
    </div>
  );
}
