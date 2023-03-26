import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Interactive } from '@react-three/xr'
import Lab from './components/Environment/Lab'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage/HomePage'
import NameList from './components/NameList/NameList'
import { useState } from 'react'

function App() {
    
    const [ student, setStudent ] = useState("");
    const [ teacher, setTeacher ] = useState("");
    const [ permission, setPermission ] = useState(false);

    return(
        <>
        <BrowserRouter>
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
                    <Hands />
                    <Routes>
                        <Route path="/" element={<HomePage setStudent={setStudent} setTeacher={setTeacher}/>}/>
                        <Route path='/experiment' element={<Experience student={student} teacher={teacher}/>}/>
                        <Route path='/name-list' element={<NameList />} />
                    </Routes>
                </XR>
            </Canvas>
        </BrowserRouter>
    </>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)