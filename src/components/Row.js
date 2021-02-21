import Square from './Square';
import Piece from './Piece';

function Row(props) {
  return (
    <tr>
      <th>{props.number}</th>
      {props.data.map((squareData, index) => {
        return (
          <Square
            row={props.number}
            column={index}
            className='cell'
            gameState={props.gameState}
            cords={[props.number, index]}
          >
            {squareData.trim() && <Piece data={squareData} />}
          </Square>
        );
      })}
      <th>{props.number}</th>
    </tr>
  );
}

export default Row;
