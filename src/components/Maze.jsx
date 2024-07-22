import React from 'react'
import { Stage, Layer, Rect, Circle, Line, Group } from 'react-konva';
import { useRef, useEffect } from 'react';

const Maze = () => {
  
  return (
    <div>
      <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Rect x={20} y={20} width={500} height={300} stroke='black' strokeWidth={2} />
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
        />
        <Rect x={20} 
          y={270} 
          width={50} 
          height={50} 
          stroke='black' 
          strokeWidth={2} 
          rotation = {0}
          fill='black'
        />
        {/* <Rect x={100} y={100} width={200} height={200} stroke='black' strokeWidth={2} />
        <Rect x={100} y={100} width={200} height={200} stroke='black' strokeWidth={2} /> */}
      </Layer>
    </Stage>
    </div>
  )
}

export default Maze

// []