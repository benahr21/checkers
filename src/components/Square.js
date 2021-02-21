import React from 'react';
import Piece from '../components/Piece';

/*
To Do :
onClick :
rightPlayer? ()
validMoves ()
UpdateBoard ()


*/

function Square(props) {
  const isEvenRow = props.row % 2 === 0;
  const isEvenColumn = props.column % 2 !== 0;
  const isLight = (isEvenRow && isEvenColumn) || (!isEvenRow && !isEvenColumn);

  return (
    <td className={'square ' + (isLight ? 'light' : 'dark')}>
      <Piece cords={props.cords} gameState={props.gameState} />
    </td>
  );
}

export default Square;
