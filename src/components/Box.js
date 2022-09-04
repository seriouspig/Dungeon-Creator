import React from 'react'

const Box = () => {
  return (
    <mesh>
        <boxGeometry attach="geometry"/>
        <meshLambertMaterial attach="material" color="blue"/>
    </mesh>
  )
}

export default Box