import React, { Suspense } from 'react';
import { useState, useEffect } from 'react'
import Form from './components/Form.js'
import Grid from './components/Grid.js'
import Legend from './components/Legend.js'
import './App.css';
import {Canvas, useThree, useFrame} from "@react-three/fiber"
import Box from './components/Box.js';
import { OrbitControls} from "@react-three/drei"
import { Scene, DoubleSide, Mesh, PerspectiveCamera } from 'three';

function App() {

  const [gridDimensions, setGridDimensions ] = useState([5,5])
  const [maze3d, setMaze3d] = useState([    [1,0,2],
    [1,1,1],
    [1,1,1]])


  const addGrid = async (grid) => {
    const reslut = await resetGrid()
    console.log("Grid Added")
    console.log(grid)
    setGridDimensions([parseInt(grid.numberOfRows), parseInt(grid.numberOfColumns)])
  }

  const resetGrid = () => {

    setGridDimensions([0,0])

  }

  const generate3dDungeon = (arr) => {

    let dungeon3d = []

    for (let i=0; i < arr.length; i++) {
      for (let j=0; j < arr[i].length; j++) {
        if (arr[i][j] == 1) {
          dungeon3d.push(<Box  key={[i,j]} pos={[-i,0, j]} />) 
        } else if (arr[i][j] == 2) {
          dungeon3d.push(<Box  key={[i,j]} pos={[-i,0, j]} />)
        } 
      }
    }

    console.log(dungeon3d)
      
    return dungeon3d  
  }

const pull_data = (data) => {
  setMaze3d(data)
}

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <group position={[1, 0, 1]} >
    <cameraHelper args={[camera]} target={[4,0,1]}/>
  </group>;
}

function NewCamera() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return <group position={[12, 0, 1]} >
    <camera makeDefault args={[camera]} target={[1,0,1]}/>
  </group>;
}

function ThreeScene() {
  return (
      <Canvas className="canvas" camera={{position: [-2,0,1], fov: 60}}>
        <NewCamera />
        <OrbitControls enableZoom={true} target={[-1,0,1]}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <Suspense name="maze-holder" id="suspense" fallback={null}>
          {generate3dDungeon(maze3d)}
        </Suspense>
        <CameraHelper />
      </Canvas>
  );
}
 
  return (
    <div className="App">
      <Form onAdd={addGrid}/>
      <Grid gridDim={gridDimensions} func={pull_data}/>
      <ThreeScene />
    </div>
  );
}

export default App;
