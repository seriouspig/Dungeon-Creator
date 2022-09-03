import React from 'react'
import Legend from './Legend'
import Square from './Square'
import { useState, useEffect } from 'react'

const Grid = ({gridDim}) => {

    const [currentItem, setCurrentItem ] = useState([0, "empty"])
    const [boardArray, setBoardArray] = useState([])

    useEffect(() => {
        console.log(currentItem[1])
        let buttons = document.getElementsByClassName("map-item")
        console.log(buttons)
        for (let i=0; i < buttons.length; i++) {
            buttons[i].classList.remove("selected")
        }
        if (currentItem[1] !== "empty") {
            const el = document.getElementById(currentItem[1]);
            console.log(el);
            el.classList.toggle("selected")
        }
      }, [currentItem]);

    let dynamicArray = []
    // Grid system

    const buildGrid = (arr) => {
        let grid = new Array(arr[0]).fill(0).map(_ => new Array(arr[1]).fill(0))
        console.log(grid)
        return grid
    }

    dynamicArray = buildGrid(gridDim)

    const populateGrid = () => {
        const populatedGrid =   dynamicArray.map((row, i1) => <div key={i1}>{row.map((column, i2) => <Square key={[i1,i2]} currentItem={currentItem}/>)}</div>)
        
        return populatedGrid
    }


    // Current Element

    const _onClick = (item) => {
        
        setCurrentItem(item)
    }

  return (
    <div className="map-container">
        This is the grid with dimensions of {gridDim[0]} x {gridDim[1]} 
        <div className="board">
            {populateGrid()} 
        </div>
        <Legend _onClick={_onClick}/>
    </div>
  )
}

export default Grid