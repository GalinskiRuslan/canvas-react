import React, { useEffect, useRef } from "react";
import "../style/canvas.scss";
import { observer } from "mobx-react-lite";
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tools/Brush";

const Canvas = observer(() => {
  const canvasRef = useRef();


  useEffect(() => {
    console.log(canvasRef.current);
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  return (
    <div className="canvas">
      <canvas ref={canvasRef}  width={700} height={700}></canvas>
    </div>
  );
});

export default Canvas;
