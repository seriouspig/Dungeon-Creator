import React from 'react'
import Square from './Square'

const Grid = ({gridDim}) => {

    const buildGrid = (arr) => {
        let grid = new Array(arr[0]).fill(0).map(_ => new Array(arr[1]).fill(0))
        console.log(grid)
        return grid
    }

  return (
    <div>
        This is the grid with dimensions of {gridDim[0]} x {gridDim[1]} 
        <div className="board">
                    {buildGrid(gridDim).map(row => <div>{row.map(column => <Square value={column}/>)}</div>)} 
                </div>
    </div>
  )
}

export default Grid