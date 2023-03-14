import { useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useRef, useState, useEffect } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import Physics from './components/Physics/Phisycs'
import Chemistry from './components/Chemistry/Chemistry'
import Biology from './components/Biology/Biology'
import { Interactive } from '@react-three/xr'
import Lab from './components/Environment/Lab'

const IntroPage = (props) => {
    return <>
    <group scale={0.2} position={[-1.45, 1.5, -2.8]}>
        <Text 
            position={[0, 3, -2]} 
            fontSize={ 1 }
            color="black"
        >Virtual Laboratory</Text>

    <Interactive 
        onSelect={(e) => {
            props.setPhysics(true)
            props.setChemistry(false)
            props.setBiology(false)
            props.setIntroPage(false)
        }}>
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
                <meshStandardMaterial color="#BDCDD6" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Physics</Text>
        </group>
    </Interactive>
        <Interactive onSelect={(e) => {
                props.setPhysics(false)
                props.setChemistry(true)
                props.setBiology(false)
                props.setIntroPage(false)
            }}>
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
                <meshStandardMaterial color="#BDCDD6" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Chemistry</Text>
        </group>
        </Interactive>
        <Interactive onSelect={(e) => {
                props.setPhysics(false)
                props.setChemistry(false)
                props.setBiology(true)
                props.setIntroPage(false)
            }}>
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
                <meshStandardMaterial color="#BDCDD6" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Biology</Text>
        </group>
        </Interactive>
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

        <directionalLight position={ [ 0, 40, 10 ] } intensity={ 1 } />
        <ambientLight intensity={ 1 } />

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