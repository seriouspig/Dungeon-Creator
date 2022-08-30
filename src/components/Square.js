import React from 'react'

const Square = () => {

    let squareValue = 0

    const handleClick = (e) => {
        e.currentTarget.classList.toggle('wall')
        if (e.currentTarget.classList.contains('wall')) {
            e.currentTarget.innerHTML = 1
        } else {
            e.currentTarget.innerHTML = 0
        }
        
    }

  return (
    <button className="square" onClick={handleClick}>
        {squareValue}
    </button>
  )
}

export default Square