import React, { useState } from 'react'
import { OrbitControls, Text } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import PhPaper from './PhPaper'
import Reaction from './Reaction'

function Chemistry(props) {

  const [reaction, setReaction] = useState(false)
  const [ph, setPh] = useState(false)
  const [curr, setCurr] = useState(true)

  return (
    <>
      {curr && <group scale={0.3} position={[0, 1.5, 0]}>
        <Text position={[0, 3, -2]} fontSize={1} color="white">Chemistry</Text>

        <Interactive onSelect={(e) => {
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

        <group 
            position={[-1.5,-1,0]}
            onClick={(e) => {
              setReaction(true)
              setCurr(false)
            }}
        >
            <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                <boxGeometry />
                <meshStandardMaterial color="#BDCDD6" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Reactions</Text>
        </group>

        <group 
            position={[1.5,-1,0]}
            onClick={(e) => {
              setPh(true)
              setCurr(false)
            }}
        >
            <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                <boxGeometry />
                <meshStandardMaterial color="#BDCDD6" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Ph Paper</Text>
        </group>
      </group>}

      {ph && <PhPaper />}
      {reaction && <Reaction />}

    </>
  )
}

export default Chemistry