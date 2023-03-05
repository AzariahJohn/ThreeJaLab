import React from 'react'
import { OrbitControls, Text } from '@react-three/drei'

function Chemistry(props) {
  return (
    <>
        <OrbitControls />
        <Text position={[0, 3, -2]} fontSize={1} color="white">Chemistry</Text>

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

        <group 
            position={[-1.5,-1,0]}
        >
            <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                <boxGeometry />
                <meshStandardMaterial color="#BDCDD6" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Reactions</Text>
        </group>

        <group 
            position={[1.5,-1,0]}
        >
            <mesh position={[0,2,-2]} scale={[2, 1, 0.5]}>
                <boxGeometry />
                <meshStandardMaterial color="#BDCDD6" />
            </mesh>
            <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Ph Paper</Text>
        </group>
    </>
  )
}

export default Chemistry