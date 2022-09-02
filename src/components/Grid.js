import React from 'react'
import Legend from './Legend'
import Square from './Square'
import { useState, useEffect } from 'react'

const Grid = ({gridDim}) => {

    const [currentItem, setCurrentItem ] = useState([0, "empty"])
    const [boardArray, setBoardArray] = useState([])

    let dynamicArray = []
    // Grid system

    const buildGrid = (arr) => {
        let grid = new Array(arr[0]).fill(0).map(_ => new Array(arr[1]).fill(0))
        console.log(grid)
        return grid
    }

    dynamicArray = buildGrid(gridDim)

    // const populateGrid = () => {
    //     const populatedGrid =   dynamicArray.map(row => <div key={[row]}>{row.map(column => <Square key={[row,column]} currentItem={currentItem}/>)}</div>)
        
    //     return populatedGrid
    // }

    const populateGrid = () => {
        const populatedGrid =   dynamicArray.map((row, i1) => <div key={i1}>{row.map((column, i2) => <Square key={[i1,i2]} currentItem={currentItem}/>)}</div>)
        
        return populatedGrid
    }

    // setBoardArray(dynamicArray)

    const keyId = (val) => {
    //    return (Math.floor(Math.random() * 100000) + 1)
        return val
    }

    // Current Element

    const _onClick = (item) => {
        console.log("This is the item:" + item)
        setCurrentItem(item)
    }

  return (
    <div>
        This is the grid with dimensions of {gridDim[0]} x {gridDim[1]} 
        <div className="board">
            {/* {populateGrid()}  */}
            {dynamicArray.map((row, i1) => <div key={i1}>{row.map((column, i2) => <Square key={[i1,i2]} currentItem={currentItem}/>)}</div>)}
        </div>
        <Legend _onClick={_onClick}/>
    </div>
  )
}

export default Grid