import { Square } from "./square";

export function Board(props) {
  const renderSquare = (i) => {
    return (
      <Square
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        isHighlight={props.winLine.includes(i)}
        key={i}
      />
    );
  };

  return (
    <div>
      {Array(3)
        .fill(0)
        .map((row, i) => {
          return (
            <div className="board-row" key={i}>
              {Array(3)
                .fill(0)
                .map((col, j) => {
                  return renderSquare(i * 3 + j);
                })}
            </div>
          );
        })}
    </div>
  );
}