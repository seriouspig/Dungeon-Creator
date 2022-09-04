import Reac, { Suspense } from 'react';
import { useState, useEffect } from 'react'
import Form from './components/Form.js'
import Grid from './components/Grid.js'
import Legend from './components/Legend.js'
import './App.css';
import {Canvas} from "@react-three/fiber"
import Box from './components/Box.js';
import { OrbitControls, PerspectiveCamera} from "@react-three/drei"

function App() {

  const [gridDimensions, setGridDimensions ] = useState([5,5])

  const addGrid = async (grid) => {
    const reslut = await resetGrid()
    console.log("Grid Added")
    console.log(grid)
    setGridDimensions([parseInt(grid.numberOfRows), parseInt(grid.numberOfColumns)])
  }

  const resetGrid = () => {

    setGridDimensions([0,0])

  }

  const testDungeon = [
    [1,0,2],
    [1,0,1],
    [1,1,1]
  ]

  const generate3dDungeon = (arr) => {

    let dungeon3d = []

    console.log("this is dungeon 3d " + dungeon3d)

    for (let i=0; i < arr.length; i++) {
      for (let j=0; j < arr[i].length; j++) {
        console.log("This is the array value: " + arr[i][j])
        if (arr[i][j] == 1) {
          dungeon3d.push(<Box  key={[i,j]} pos={[i,0, j]} />) 
        }
      }
    }

    console.log(dungeon3d)
      
    return dungeon3d
  
}


  return (
    <div className="App">
      <Form onAdd={addGrid}/>
      <Grid gridDim={gridDimensions}/>
      <Canvas className="canvas" camera={{position: [6,6,0], fov: 60}}>
        <OrbitControls enableZoom={true}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <perspectiveCamera position={[0,10,20]}/>
        <Suspense id="suspense" fallback={null}>
          {generate3dDungeon(testDungeon)}
        </Suspense>

      </Canvas>
    </div>
  );
}


export default App;
