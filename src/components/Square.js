import React from 'react'

const Square = ({value}) => {

    const handleClick = (e) => {
        e.currentTarget.classList.add('wall')
    }

  return (
    <button className="square" onClick={handleClick}>
        {value}
    </button>
  )
}

export default Square