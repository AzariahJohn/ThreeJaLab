import { OrbitControls, PerspectiveCamera, useGLTF } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import React, { useState } from 'react'

export default function Lab()
{
    const room = useGLTF("./lab.gltf")
    const [cube, setCub] = useState()

    return <>

        <OrbitControls
            target={[0, 2, 0.5]}
            minDistance={0.2}
            maxDistance={1.2}
            enableRotate
            rotateSpeed={0.5}
        />

        {/* <mesh position={[0, -1.5, 2]}>
            <boxGeometry />
            <meshBasicMaterial color={"white"}/>
        </mesh> */}

        <PerspectiveCamera makeDefault position={[3.7, 4.3, -1.5]}/>

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

        <primitive rotation={[0, -Math.PI * 0.5, 0]} position={[0, -1.5, 2]} object={room.scene} />
    </>
}