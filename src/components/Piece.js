import React from 'react';
import blackpiece from '../assets/blackpiece.svg';
import whitepiece from '../assets/whitepiece.svg';

function Piece(props) {
  console.log(props.gameState.data);
  const player = props.gameState.data[0][0] === 'O' ? 'white' : 'black';
  let tempBoard = props.gameState.data;

  return (
    <img
      src={player === 'white' ? whitepiece : blackpiece}
      alt={`A${player}man.`}
    />
  );
}

export default Piece;
