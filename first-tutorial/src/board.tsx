import React from "react";
import { Square } from "./square";
type Props = {
  onClick: (index: number) => void;
  winLine: number[];
  squares: string[];
};

export const Board: React.FC<Props> = (props) => {
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
};