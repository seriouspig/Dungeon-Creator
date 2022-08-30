import React from 'react'

const Grid = ({gridDim}) => {

    const buildGrid = (arr) => {
        let grid = new Array(arr[0]).fill(0).map(_ => new Array(arr[1]).fill(0))
        console.log(grid)
    }

  return (
    <div>
        This is the grid with dimensions of {buildGrid(gridDim)} 
    </div>
  )
}

export default Grid