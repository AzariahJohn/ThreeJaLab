import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import Lab from './components/Environment/Lab'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(

    <>
        <VRButton/>
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ 0, 1.6, 10 ],
            } }
            className="canvas"
            fog="true"
        >
            <XR>
                <Controllers />
                <Hands 
                    modelLeft="./crosshair.glb"
                    modelRight="./crosshair.glb"
                />
                <Experience />
                <Lab />
            </XR>
        </Canvas>
    </>
)