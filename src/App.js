import { useState, useEffect } from 'react'
import Form from './components/Form.js'
import Grid from './components/Grid.js'
import './App.css';

function App() {

  const [gridDimensions, setGridDimensions ] = useState([3,2])

  return (
    <div className="App">
      <Form />
      <Grid gridDim={gridDimensions}/>
    </div>
  );
}

export default App;
