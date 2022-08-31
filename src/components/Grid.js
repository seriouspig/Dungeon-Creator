import React from 'react'
import Legend from './Legend'
import Square from './Square'
import { useState, useEffect } from 'react'

const Grid = ({gridDim}) => {

    const [chosenElement, setChosenElement ] = useState(0)
    const [currentElement, setCurrentElement ] = useState(3)
    const [currentItem, setCurrentItem ] = useState(0)

    let itm =  0

    // Grid system

    const buildGrid = (arr) => {
        let grid = new Array(arr[0]).fill(0).map(_ => new Array(arr[1]).fill(0))
        console.log(grid)
        return grid
    }

    const keyId = () => {
       return (Math.floor(Math.random() * 10000) + 1)
    }

    // Current Element

    const _onClick = (item) => {
        console.log("This is the item:" + item)
        itm = item

    }

    const assignElement = (item) => {
        console.log("Element assigned")
        console.log("This is the item:" + item)
        item = itm
        console.log("This is the new item:" + item)
        setCurrentItem(item)
    }

  return (
    <div>
        This is the grid with dimensions of {gridDim[0]} x {gridDim[1]} 
        <div className="board">
            {buildGrid(gridDim).map(row => <div key={keyId()}>{row.map(column => <Square key={keyId()} assignElement={assignElement} _onClick={_onClick} currentItem={currentItem}/>)}</div>)} 
        </div>
        <Legend _onClick={_onClick}/>
    </div>
  )
}

export default Grid