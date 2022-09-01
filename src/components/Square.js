import React from 'react'
import { useState, createContext, useContext } from "react";

const Square = ({currentItem}) => {

    const handleClick = (e) => {
        console.log(" YEAAAAH")
        console.log(currentItem)

        console.log("This is onClick return :" + currentItem[0])

        if (e.currentTarget.innerText === "0") {
            console.log("1st condition")
            console.log(!e.currentTarget.classList.contains("empty"))
            e.currentTarget.innerText = currentItem[0]
            e.currentTarget.classList.remove("empty")
            e.currentTarget.classList.add(currentItem[1])
        
        } else if (e.currentTarget.innerText == (currentItem[0])){
            e.currentTarget.innerText = "0"
            e.currentTarget.className = ''
            e.currentTarget.classList.add('square')    

        } else if (e.currentTarget.innerText !== (currentItem[0]) && e.currentTarget.innerText !== "0") {
            e.currentTarget.innerText = currentItem[0]
            e.currentTarget.className = ''
            e.currentTarget.classList.add('square')
            e.currentTarget.classList.add(currentItem[1])
        }

    }

  return (
    <button className="square empty" onClick={handleClick}>
        0
    </button>
  )
}

export default Square