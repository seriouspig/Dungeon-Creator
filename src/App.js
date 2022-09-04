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
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  const generate3dDungeon = (arr) => {
    const dungeon3d =   arr.map((row, i1) => <>{row.map((column, i2) => <Box  key={[i1,i2]} pos={[i1,0, i2]} />)}</>)
      
    return dungeon3d
  }

//   const populateGrid = () => {
//     const populatedGrid =   dynamicArray.map((row, i1) => <div key={i1}>{row.map((column, i2) => <Square key={[i1,i2]} pos={[i1, i2]} currentItem={currentItem}/>)}</div>)
    
//     return populatedGrid
// }


  return (
    <div className="App">
      <Form onAdd={addGrid}/>
      <Grid gridDim={gridDimensions}/>
      <Canvas className="canvas" camera={{position: [6,6,0], fov: 60}}>
        <OrbitControls enableZoom={true}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2,5,2]} intensity={1} />
        <perspectiveCamera position={[0,10,20]}/>
        <Suspense fallback={null}>
          {generate3dDungeon(testDungeon)}
        </Suspense>

      </Canvas>
    </div>
  );
}


export default App;
