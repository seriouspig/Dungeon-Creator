import React from 'react'
import { useState, createContext, useContext } from "react";

const Square = ({currentItem}) => {


    const handleClick = (e) => {
        console.log(" YEAAAAH")
        // setItemOnSquare(currentItem)
        console.log("This is onClick return :" + currentItem)
        e.currentTarget.classList.toggle('wall')
        e.currentTarget.innerHTML = currentItem
        // if (e.currentTarget.classList.contains('wall')) {
        //     e.currentTarget.innerHTML = {currentElement}
        // } else {
        //     e.currentTarget.innerHTML = 0
        // }
        
    }

  return (
    <button className="square" onClick={handleClick}>
        0
    </button>
  )
}

export default Square