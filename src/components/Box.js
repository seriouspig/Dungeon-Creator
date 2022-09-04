import React from 'react'
import {useLoader} from "@react-three/fiber"
import {TextureLoader} from "three/src/loaders/TextureLoader"
import texture from "../img/floot.jpg"


const Box = ({pos}) => {

const colorMap = useLoader(TextureLoader, texture)

  return (
    <mesh rotation={[0,0,0]} position={pos}>
        <boxGeometry attach="geometry" args={[1,1,1]}/>
        <meshStandardMaterial map={colorMap}/>
    </mesh>
  )
}

export default Box