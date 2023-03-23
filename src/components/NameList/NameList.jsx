import { Html } from '@react-three/drei'
import React from 'react'
import Lab from '../Environment/Lab'

function NameList() {
  return (
    <>
        <Lab />
        <Html position={[0, 2, 0]}>
            <h1 className="testing">Hello</h1>
        </Html>
    </>
  )
}

export default NameList