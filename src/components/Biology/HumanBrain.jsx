import React, { useRef, useState } from 'react'
import { Html, OrbitControls, Text, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './HumanBrain.css'
import { useXR } from '@react-three/xr'

function HumanBrain(props) {
  
    const model = useGLTF('./human_brain/scene.gltf')
    const cubeRef = useRef(true)

    const [rotate, setRotate] = useState(false)

    useFrame((state, delta) => {
        const rotation = () => {
            cubeRef.current.rotation.y += delta * 0.75;
        }
        {rotate && rotation()}
    })

    const {isPresenting} = useXR()
    console.log(isPresenting)

    return (
    <>
        <OrbitControls />
        <group 
            position={[0,-1,0]}
            onClick={(e) => {
                setRotate(!rotate)
            }}
        >
            {/* <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Reactions</Text> */}
            <ambientLight intensity={ 0.5 } />
            <primitive object={model.scene} position={[ 0, 2, -1.7 ]} scale={2} ref={ cubeRef }>
                <Html>
                    <div className='one'>
                        <p className='text'>This is a div</p>
                        <div className='txt-btn'>1</div>
                    </div>
                </Html>
            </primitive>

        </group>
    </>
  )
}

export default HumanBrain