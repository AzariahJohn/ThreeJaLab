import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

    <>
        <VRButton />
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 10, 10, 10 ]
            } }
        >
            {/* <directionalLight position={ [ 0, 2, 0 ] } intensity={ 1 } />
            <ambientLight intensity={ 0.05 } />
            <OrbitControls /> */}
            <XR>
                <Controllers />
                <Experience />
                {/* <mesh>
                    <boxGeometry />
                    <meshBasicMaterial color={'grey'}/>
                </mesh> */}
                <Hands />
            </XR>
        </Canvas>
    </>
)