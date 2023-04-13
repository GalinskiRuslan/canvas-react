import React from "react";
import "../style/tools.scss";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";
import canvasState from "../store/canvasState";

export default function Toolbar() {
  return (
    <div className="tools">
      <button
        className="tools__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      ></button>
      <button className="tools__btn rect"></button>
      <button className="tools__btn circle"></button>
      <button className="tools__btn eraser"></button>
      <button className="tools__btn line"></button>
      {/* <button className="tools__btn colors"></button> */}
      <input type="color" />
      <button className="tools__btn undo"></button>
      <button className="tools__btn redo"></button>
      <button className="tools__btn save"></button>
    </div>
  );
}
