import { useState, useEffect } from 'react'
import Form from './components/Form.js'
import Grid from './components/Grid.js'
import Legend from './components/Legend.js'
import './App.css';
import {Canvas} from "@react-three/fiber"
import Box from './components/Box.js';

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
    // setGridDimensions([parseInt(grid.numberOfRows), parseInt(grid.numberOfColumns)])
  }

  return (
    <div className="App">
      <Form onAdd={addGrid}/>
      <Grid gridDim={gridDimensions}/>
      <Canvas className="canvas">
        <Box />
      </Canvas>
    </div>
  );
}


export default App;
