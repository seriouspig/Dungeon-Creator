import React from 'react'

const Square = ({currentItem, _onClick, assignElement}) => {

    let squareValue = 0

    const handleClick = (e) => {
        console.log("This is onClick return :" + {assignElement})
        e.currentTarget.classList.toggle('wall')
        e.currentTarget.innerHTML = {assignElement}
        // if (e.currentTarget.classList.contains('wall')) {
        //     e.currentTarget.innerHTML = {currentElement}
        // } else {
        //     e.currentTarget.innerHTML = 0
        // }
        
    }

  return (
    <button className="square" onClick={() => assignElement(squareValue)}>
        {currentItem}
    </button>
  )
}

export default Square