import { useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'

export default function Experience()
{
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight position={ [ 0, 2, 0 ] } intensity={ 1 } />
        <ambientLight intensity={ 0.05 } />

        <mesh position-y={  0 } rotation-x={ - Math.PI * 0.5 } scale={ 40 }>
            <planeGeometry />
            <meshStandardMaterial color="#5D737E" />
        </mesh>

        <mesh>
            <boxGeometry />
            <meshNormalMaterial />
        </mesh>
    </>
}