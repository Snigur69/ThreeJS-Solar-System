import React from 'react'
import * as THREE from "three";



export const Trajectory = ({ radius }) => {
  return (
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry attach="geometry" args={[radius - 0.03, radius, 64]} />
      <lineBasicMaterial attach="material" color='#FFFFFF' side={THREE.DoubleSide} />
    </mesh>
  )
}