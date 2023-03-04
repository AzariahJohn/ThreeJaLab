import { useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef, useState, useEffect } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import Physics from './components/Physics/Phisycs'
import Chemistry from './components/Chemistry/chemistry'
import Biology from './components/Biology/Biology'

const IntroPage = (props) => {
    return <>
        <Text 
            position={[0, 3, -2]} 
            fontSize={ 1 }
            color="white"
        >Virtual Laboratory</Text>

        <group 
            position={[2.5,-1,0]}
            onClick={(e) => {
                props.setPhysics(true)
                props.setChemistry(false)
                props.setBiology(false)
                props.setIntroPage(false)
            }}
        >
            <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                <boxGeometry />
                <meshStandardMaterial color="#4E6E81" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Physics</Text>
        </group>

        <group 
            position={[0,-1,0]}
            onClick={(e) => {
                props.setPhysics(false)
                props.setChemistry(true)
                props.setBiology(false)
                props.setIntroPage(false)
            }}
        >
            <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                <boxGeometry />
                <meshStandardMaterial color="#4E6E81" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Chemistry</Text>
        </group>

        <group 
            position={[-2.5,-1,0]}
            onClick={(e) => {
                props.setPhysics(false)
                props.setChemistry(false)
                props.setBiology(true)
                props.setIntroPage(false)
            }}
        >
            <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                <boxGeometry />
                <meshStandardMaterial color="#4E6E81" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Biology</Text>
        </group>

    </>
}

export default function Experience()
{

    const [physics, setPhysics] = useState(false)
    const [chemistry, setChemistry] = useState(false)
    const [biology, setBiology] = useState(false)
    const [introPage, setIntroPage] = useState(true)

    return <>
        {/* <Perf position="top-left" /> */}
        <OrbitControls makeDefault />

        <directionalLight position={ [ 0, 10, 10 ] } intensity={ 10 } />
        <ambientLight intensity={ 2 } />

        {/* <mesh position-y={  0 } rotation-x={ - Math.PI * 0.5 } scale={ 40 }>
            <planeGeometry />
            <meshStandardMaterial color="#5D737E" />
        </mesh>

        <Text position={[ 0, 2, -1.3 ]} scale={0.5}>Biology</Text>

        <mesh position={[0,2,-2]} scale={[3, 1, 1]}>
            <boxGeometry/>
            <meshNormalMaterial />
        </mesh> */}

        {introPage && <IntroPage setPhysics={setPhysics} setBiology={setBiology} setChemistry={setChemistry}
        setIntroPage={setIntroPage}/>}

        {physics && <Physics setPhysics={setPhysics} setBiology={setBiology} setChemistry={setChemistry}
        setIntroPage={setIntroPage}/>}
        {chemistry && <Chemistry setPhysics={setPhysics} setBiology={setBiology} setChemistry={setChemistry}
        setIntroPage={setIntroPage}/>}
        {biology && <Biology setPhysics={setPhysics} setBiology={setBiology} setChemistry={setChemistry}
        setIntroPage={setIntroPage}/>}
    </>
}