import React, { useState } from 'react'
import { OrbitControls, Text } from '@react-three/drei'
import HumanBrain from './HumanBrain'
import Covid from './Covid'
import { Interactive } from '@react-three/xr'

function Biology(props) {

  const [brain, setBrain] = useState(false)
  const [covid, setCovid] = useState(false)
  const [currPage, setCurrPage] = useState(true)

  return (
    <>
        {currPage && <group scale={0.3} position={[-1.45, 1.5, -2.7]}>
        <Text position={[0, 3, -2]} fontSize={1} color="black">Biology</Text>
        <Interactive 
          onSelect={(e) => {
              props.setPhysics(false)
              props.setChemistry(false)
              props.setBiology(false)
              props.setIntroPage(true)
          }}>
          <group 
            position={[-3, 3, -2]}
            onClick={(e) => {
              props.setPhysics(false)
              props.setChemistry(false)
              props.setBiology(false)
              props.setIntroPage(true)
          }}
          >
            <mesh scale={[0.3, 0.2, 0.1]}>
              <boxGeometry />
              <meshStandardMaterial color={"grey"}/>
            </mesh>
            <Text color={"black"} fontSize={0.1} position={[0, 0, 0.1]}>Back</Text>
          </group>
        </Interactive>

        <Interactive onSelect={(e) => {
              setBrain(true)
              setCovid(false)
              setCurrPage(false)
          }}>
        <group 
            position={[-1.5,-1,0]}
            onClick={(e) => {
              setBrain(true)
              setCovid(false)
              setCurrPage(false)
          }}
        >
            <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                <boxGeometry />
                <meshStandardMaterial color="#BDCDD6" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Human Brain</Text>
        </group>
        </Interactive>

        <Interactive 
            onSelect={(e) => {
                setBrain(false)
                setCovid(true)
                setCurrPage(false)
            }}>
          <group 
              position={[1.5,-1,0]}
              onClick={(e) => {
                setBrain(false)
                setCovid(true)
                setCurrPage(false)
            }}
          >
              <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                  <boxGeometry />
                  <meshStandardMaterial color="#BDCDD6" />
              </mesh>
              <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Covid Virus</Text>
          </group>
        </Interactive>
        </group>}

        {brain && <HumanBrain setCurrPage={setCurrPage} setbrain={setBrain}/>}
        {covid && <Covid />}

    </>
  )
}

export default Biology