import React from 'react'

const Square = ({value}) => {

    let squareValue = 0

    const handleClick = (e) => {
        e.currentTarget.classList.add('wall')
        e.currentTarget.innerHTML = 1
    }

  return (
    <button className="square" onClick={handleClick}>
        {squareValue}
    </button>
  )
}

export default Square