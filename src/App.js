import React from 'react'
import './App.css';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import sun from './assets/textures/sun_texture.jpg'
import mercury from './assets/textures/mercury.png'
import venus from './assets/textures/venus.jpg'
import earth from './assets/textures/earth.jpg'
import mars from './assets/textures/mars.jpg'
import jupiter from './assets/textures/jupiter.jpg'
import saturn from './assets/textures/saturn.png'
import uranus from './assets/textures/uranus.jpg'
import neptune from './assets/textures/neptue.jpg'
import moon from './assets/textures/moon.jpg'
import phobos from './assets/textures/phobos.jpg'
import deimos from './assets/textures/deimos.png'

import io from './assets/textures/io.jpg'
import europa from './assets/textures/europa.jpg'
import ganymede from './assets/textures/ganymede.png'
import callisto from './assets/textures/callisto.jpg'

import enceladus from './assets/textures/enceladus.jpg'
import titan from './assets/textures/titan.png'




import { Trajectory } from './components/Trajectory';
import { Planet } from './components/Planet';
// import { TextureLoader } from 'three/examples/jsm/loaders/TextureLoader'

// const Box = ({pressedKey}) => {
//   const [ref, api] = useBox(() => ({mass: 1, position: [0,20,0], rotation: [10, 1, 0]}))
//   return (
//     <mesh ref={ref} position={[0,0,0]}>
//       <boxBufferGeometry attach="geometry" />
//       <meshLambertMaterial attach="material" color="lightblue" />
//     </mesh>
//   )
// }

// const Plane = () => {
//   const [ref] = usePlane(() => ({rotation: [-Math.PI / 2, 0, 0], position: [0,-0,0]}))
//   return (
//     <mesh ref={ref} position={[0,-1,0]} rotation={[-Math.PI / 2, 0, 0]}>
//       <planeBufferGeometry attach="geometry" args={[100,100]} />
//       <meshLambertMaterial attach="material" color="green" />
//     </mesh>
//   )
// }

const satellites = {
  'Earth': [
    { name: 'Moon', diameter: 0.2, outerRadius: 2, rotationSpeed: 0.04, image: moon }
  ],
  'Mars': [
    { name: 'Phobos', diameter: 0.1, outerRadius: 1, rotationSpeed: 0.04, image: phobos },
    { name: 'Deimos', diameter: 0.05, outerRadius: 2, rotationSpeed: 0.02, image: deimos },
  ],
  'Jupiter': [
    { name: 'Io', diameter: 0.18, outerRadius: 3, rotationSpeed: 0.04, image: io },
    { name: 'Europa', diameter: 0.09, outerRadius: 4, rotationSpeed: 0.03, image: europa },
    { name: 'Ganymede', diameter: 0.3, outerRadius: 5, rotationSpeed: 0.02, image: ganymede },
    { name: 'Callisto', diameter: 0.23, outerRadius: 6, rotationSpeed: 0.01, image: callisto },
  ],
  'Saturn': [
    { name: 'Enceladus', diameter: 0.07, outerRadius: 3.5, rotationSpeed: 0.04, image: enceladus },
    { name: 'Titan', diameter: 0.3, outerRadius: 5, rotationSpeed: 0.02, image: titan },
  ]
}

function App() {
  return (
    <Canvas className="App" style={{ background: '#000' }} camera={{ position: [0, 3, -20] }}>
      <OrbitControls />
      <Stars />
      {/* <SpotLight position={[0,5,0]} /> */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <spotLight position={[10,15,10]} angle={0.3} /> */}
      <Physics>
        <Planet name="Sun" outerRadius={0} diameter={3} textureImage={sun} rotationSpeed={0.01} />
        <Trajectory radius={7} />
        <Planet name="Mercury" outerRadius={7} diameter={0.2} textureImage={mercury} rotationSpeed={0.01} positionSpeed={0.02} />
        <Trajectory radius={14} />
        <Planet name="Venus" outerRadius={14} diameter={0.6} textureImage={venus} rotationSpeed={0.01} positionSpeed={0.01} />
        <Trajectory radius={25} />
        <Planet name="Earth" outerRadius={25} diameter={0.6} textureImage={earth} rotationSpeed={0.01} positionSpeed={0.005} satellites={satellites.Earth} />
        <Trajectory radius={40} />
        <Planet name="Mars" outerRadius={40} diameter={0.3} textureImage={mars} rotationSpeed={0.01} positionSpeed={0.003} satellites={satellites.Mars} />
        <Trajectory radius={55} />
        <Planet name="Jupiter" outerRadius={55} diameter={2} textureImage={jupiter} rotationSpeed={0.01} positionSpeed={0.0005} satellites={satellites.Jupiter} />
        <Trajectory radius={70} />
        <Planet name="Saturn" outerRadius={70} diameter={1.5} textureImage={saturn} rotationSpeed={0.01} positionSpeed={0.0002} satellites={satellites.Saturn} />
        <Trajectory radius={85} />
        <Planet name="Uranus" outerRadius={85} diameter={1} textureImage={uranus} rotationSpeed={0.01} positionSpeed={0.00008} />
        <Trajectory radius={100} />
        <Planet name="Neptune" outerRadius={100} diameter={1} textureImage={neptune} rotationSpeed={0.01} positionSpeed={0.00005} />
      </Physics>
    </Canvas>
  );
}

export default App;
