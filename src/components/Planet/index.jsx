import React from 'react'
import * as THREE from "three";
import { useFrame, useLoader } from '@react-three/fiber'
import moon from '../../assets/textures/moon.jpg'


const Circle = ({ position, startRadius, endRadius, color }) => {
    return (
        <mesh position={position} rotation={[-Math.PI / 2, 0, 0]}>
            <ringGeometry attach="geometry" args={[startRadius, endRadius, 64]} />
            <lineBasicMaterial attach="material" color={color} side={THREE.DoubleSide} />
        </mesh>
    )
}

const Moon = ({ planetX, planetZ }) => {
    const texture = useLoader(THREE.TextureLoader, moon)
    const ref = React.useRef()
    let t = 0;
    useFrame(() => {
        t += 0.04;
        ref.current.position.x = 2 * Math.cos(t) + planetX
        ref.current.position.z = 2 * Math.sin(t) + planetZ
        ref.current.rotation.y += 0.01
    })
    return (
        <mesh ref={ref}>
            <sphereBufferGeometry attach="geometry" args={[0.2, 32, 32]} />
            <meshBasicMaterial attach="material" map={texture} />
        </mesh>
    )
}


export const Planet = ({ name, outerRadius, diameter, textureImage, rotationSpeed, positionSpeed }) => {
    const texture = useLoader(THREE.TextureLoader, textureImage)
    const ref = React.useRef()
    let position = [0, 0, 0]
    let t = 0;
    useFrame(() => {
        if (positionSpeed) {
            t += positionSpeed;
            ref.current.position.x = outerRadius * Math.cos(t) + 0
            ref.current.position.z = outerRadius * Math.sin(t) + 0
        }
        position = [ref.current.position.x, ref.current.position.y, ref.current.position.z]
        ref.current.rotation.y += rotationSpeed
    })


    return (
        <group ref={ref} position={[outerRadius, 0, 0]} >
            <mesh >
                <sphereBufferGeometry attach="geometry" args={[diameter, 32, 32]} />
                <meshBasicMaterial attach="material" map={texture} />
            </mesh>
            {name === 'Earth' && (
                <Moon planetX={position[0]} planetZ={position[2]} />
            )}
            {name === 'Saturn' && (
                <>
                    <Circle position={position} color="#272322" startRadius={diameter + 0.05} endRadius={diameter + 0.25} />
                    <Circle position={position} color="#7f7566" startRadius={diameter + 0.26} endRadius={diameter + 0.7} />
                    <Circle position={position} color="#5a554f" startRadius={diameter + 0.71} endRadius={diameter + 0.9} />
                </>
            )}
        </group>
    )
}