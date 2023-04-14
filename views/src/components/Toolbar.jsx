import React from "react";
import "../style/tools.scss";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import Rect from "../tools/Rect";
import Circle from "../tools/Circle";
import Line from "../tools/Line";
import canvasState from "../store/canvasState";

export default function Toolbar() {
  const changeColor = (e) => {
    toolState.setStrokeColor(e.target.value);
  };
  return (
    <div className="tools">
      <button
        className="tools__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      ></button>
      <button
        className="tools__btn rect"
        onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
      ></button>
      <button
        className="tools__btn circle"
        onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
      ></button>
      <button className="tools__btn eraser"></button>
      <button
        className="tools__btn line"
        onClick={() => toolState.setTool(new Line(canvasState.canvas))}
      ></button>
      {/* <button className="tools__btn colors"></button> */}
      <input type="color" onChange={(e) => changeColor(e)} />
      <button className="tools__btn undo"></button>
      <button className="tools__btn redo"></button>
      <button className="tools__btn save"></button>
    </div>
  );
}
