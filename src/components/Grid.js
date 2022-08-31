import React from 'react'
import Legend from './Legend'
import Square from './Square'

const Grid = ({gridDim}) => {

    // Grid system

    const buildGrid = (arr) => {
        let grid = new Array(arr[0]).fill(0).map(_ => new Array(arr[1]).fill(0))
        console.log(grid)
        return grid
    }

    const keyId = () => {
       return (Math.floor(Math.random() * 10000) + 1)
    }

  return (
    <div>
        This is the grid with dimensions of {gridDim[0]} x {gridDim[1]} 
        <div className="board">
            {buildGrid(gridDim).map(row => <div key={keyId()}>{row.map(column => <Square key={keyId()} />)}</div>)} 
        </div>
        <Legend />
    </div>
  )
}

export default Grid