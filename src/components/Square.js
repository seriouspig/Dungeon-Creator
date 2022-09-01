import React from 'react'
import { useState, createContext, useContext } from "react";

const Square = ({currentItem}) => {

    const handleClick = (e) => {
        console.log(" YEAAAAH")
        console.log(currentItem)

        console.log("This is onClick return :" + currentItem[0])
        e.currentTarget.classList.toggle(currentItem[1])
        e.currentTarget.innerHTML = currentItem[0]
        if (e.currentTarget.classList.contains(currentItem[1])) {
            e.currentTarget.innerHTML = currentItem[0]
        } else {
            e.currentTarget.innerHTML = 0
        }
        
    }

  return (
    <button className="square" onClick={handleClick}>
        0
    </button>
  )
}

export default Square