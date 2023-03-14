import { Text } from '@react-three/drei'
import React, { useMemo, useState } from 'react'
import Experience from '../../Experience'
import Lab from '../Environment/Lab'

const Telescope = (props) => {

    const [current, setCurrent] = useState(true)

  return (
    <>
    {current && <group>
        <group>
            <Text color="black">Telescope</Text>
        </group>

        <group scale={0.1} position={[-4, 3.6, 0]}>
            <mesh>
                <boxGeometry args={[4, 2, 1]}/>
                <meshBasicMaterial />
            </mesh>
            <Text
                onClick={() => {
                    setCurrent(false)
                }}
                color="black"
                position={[0, 0, 0.6]}
                >Back
            </Text>
        </group>
        </group>}

    </>
  )
}

export default Telescope