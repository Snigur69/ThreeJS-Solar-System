import React from 'react'
import * as THREE from "three";
import { Html } from "@react-three/drei"
import { useFrame, useLoader } from '@react-three/fiber'

export const Satellite = ({ name, diameter, outerRadius, rotationSpeed, image, planetX, planetZ }) => {
    const texture = useLoader(THREE.TextureLoader, image)
    const ref = React.useRef()
    let t = 0;
    useFrame(() => {
        t += rotationSpeed;
        ref.current.position.x = outerRadius * Math.cos(t) + planetX
        ref.current.position.z = outerRadius * Math.sin(t) + planetZ
        ref.current.rotation.y += 0.01
    })
    return (
        <group ref={ref}>
            <Html distanceFactor={20} style={{ marginTop: `-20px` }} center>
                <div className="planet_label">
                    {name}
                </div>
            </Html>
            <mesh>
                <sphereBufferGeometry attach="geometry" args={[diameter, 32, 32]} />
                <meshBasicMaterial attach="material" map={texture} />
            </mesh>
        </group>

    )
}