import React from 'react'

const Generator = ({generateDungeon}) => {
  return (
    <button onClick={() => generateDungeon()}>Generate Dungeon</button>
  )
}

export default Generator