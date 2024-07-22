import React from 'react'
import { Stage, Layer, Rect, Circle, Line, Group } from 'react-konva';
import { useRef, useEffect, useState } from 'react';
import {outOfBounds } from '../util/stage.js'

const Maze = () => {
  const baseRef = React.useRef();
  const rectRef = useRef();
  const homeRef = React.useRef();
  const [isOutOfBounds, setOutOfBounds] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const handleClick = (e, direction, defaultx=20, defaulty=290) => {
    const rect = rectRef.current;
    const step = 20;
    setOutOfBounds(false);
    setIsHome(false);
    switch (direction) {
      case 'up':
        rect.y(rect.y() - step);
        break;
      case 'down':
        rect.y(rect.y() + step);
        break;
      case 'left':
        rect.x(rect.x() - step);
        break;
      case 'right':
        rect.x(rect.x() + step);
        break;
      case 'reset':
        rect.x(defaultx);
        rect.y(defaulty);
        setOutOfBounds(false);
        break;
      default:
        break;
    }
    if (outOfBounds(baseRef, rectRef)) {
      setOutOfBounds(true);
    }

    if (!outOfBounds(homeRef, rectRef)) {
      setIsHome(true);
    }
  };
  
  return (
    <div>
      <div>
        <button type="button" className="btn btn-outline-primary"  onClick={(e) =>handleClick(e, "up")} >move up</button>
        <button type="button" className="btn btn-outline-primary" onClick={(e) =>handleClick(e, "left")}>move left</button>
        <button type="button" className="btn btn-outline-primary" onClick={(e) =>handleClick(e, "right")}>move right</button>
        <button type="button" className="btn btn-outline-primary" onClick={(e) =>handleClick(e, "down")}>move down</button>
        <button type="button" className="btn btn-outline-primary" onClick={(e) =>handleClick(e, "reset")}>reset</button>
      
        {
          (isOutOfBounds) &&
          <div className="alert alert-danger" role="alert">
            Danger - You are out of bounds!
          </div>
        }
        { (isHome) &&
          <div className="alert alert-success" role="alert">
            Hi - You made it!
          </div>
        }
      </div>
      
      <div>
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Rect 
              x={20} 
              y={20} 
              width={500} 
              height={300} 
              stroke='black' 
              strokeWidth={2} 
              ref={baseRef}
            />
            <Line
              x={20}
              y={200}
              points={[0, 0, 100, -180]}
              tension={0.5}
              closed
              stroke="black"
            /> 
            <Line
              x={20}
              y={200}
              points={[100, -180, 100, 70]}
              tension={0.5}
              closed
              stroke="black"
            /> 
            <Line
              x={20}
              y={200}
              points={[0, 120, 100, 70]}
              tension={0.5}
              closed
              stroke="black"
            />
            <Line
              x={20}
              y={200}
              points={[200, -20, 400, -150]}
              tension={0.5}
              stroke="black"
            />

            <Line
              x={20}
              y={200}
              points={[200, -20, 200, 120]}
              tension={0.5}
              stroke="black"
            />

            <Line
              x={20}
              y={200}
              points={[400, -20, 200, 120]}
              tension={0.5}
              stroke="black"
            />
            <Line
              x={20}
              y={200}
              points={[400, -20, 400, -150]}
              tension={0.5}
              stroke="black"
            /> 
            
            <Rect x={150} 
              y={50} 
              width={50} 
              height={100} 
              stroke='black' 
              strokeWidth={2} 
              rotation = {0}
            />
            <Rect x={250} 
              y={20} 
              width={50} 
              height={50} 
              stroke='black' 
              strokeWidth={2} 
              rotation = {0}
              fill='green'
              ref={homeRef}
            />
            <Rect x={20} 
              y={290} 
              width={50} 
              height={30} 
              stroke='blue' 
              strokeWidth={2} 
              rotation = {0}
              fill='transparent'
            />
            <Rect x={20} 
              y={290} 
              width={30} 
              height={30} 
              stroke='black' 
              strokeWidth={2} 
              rotation = {0}
              fill='black'
              draggable
              ref={rectRef}
            />
          </Layer>
        </Stage>
      </div>
    </div>
  )
}

export default Maze;