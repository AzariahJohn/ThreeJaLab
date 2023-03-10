import React, { useRef, useState } from 'react'
import { Html, OrbitControls, Text, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './HumanBrain.css'
import { Interactive, useXR } from '@react-three/xr'

function HumanBrain(props) {
  
    const model = useGLTF('./human_brain/scene.gltf')
    const cubeRef = useRef(true)

    const [one, setOne] = useState(false)
    const [two, setTwo] = useState(false)
    const [three, setThree] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)
    const [six, setSix] = useState(false)

    const [rotate, setRotate] = useState(true)

    useFrame((state, delta) => {
        const rotation = () => {
            cubeRef.current.rotation.y += delta * 0.25;
        }
        {rotate && rotation()}
    })

    // const {isPresenting} = useXR()
    // console.log(isPresenting)

    return (
    <>
        <OrbitControls />
        <group 
            position={[0,-1,0]}
            onClick={(e) => {
                setRotate(!rotate)
            }}
        >
            {/* <Text scale={0.2} position={[ 0, 2, -1.7 ]} color="#2E3840">Reactions</Text> */}
            <ambientLight intensity={ 0.5 } />

            <primitive object={model.scene} position={[ 0, 2, -1.7 ]} scale={2} ref={ cubeRef }>
                <Interactive onSelect={(e) => {
                            setOne(true)
                            setTwo(false)
                            setThree(false)
                            setFour(false)
                            setFive(false)
                            setSix(false)
                        }}>
                    <Text 
                        onClick={(e) => {
                            setOne(true)
                            setTwo(false)
                            setThree(false)
                            setFour(false)
                            setFive(false)
                            setSix(false)
                        }}
                        position={[0, -0.05, -0.4]}
                        rotation={[0, Math.PI, 0]}
                        fontSize={0.05}
                    >
                        Cerebellum
                    </Text>
                </Interactive>

                <Interactive 
                        onSelect={(e) => {
                            setOne(false)
                            setTwo(true)
                            setThree(false)
                            setFour(false)
                            setFive(false)
                            setSix(false)
                        }}>
                    <Text 
                        onClick={(e) => {
                            setOne(false)
                            setTwo(true)
                            setThree(false)
                            setFour(false)
                            setFive(false)
                            setSix(false)
                        }}
                        position={[0, -0.2, 0.10]}
                        fontSize={0.05}
                        color="black"
                    >
                        Spinal Cord
                    </Text>
                </Interactive>
                <Interactive 
                    onSelect={(e) => {
                        setOne(false)
                        setTwo(false)
                        setThree(true)
                        setFour(false)
                        setFive(false)
                        setSix(false)
                    }}>
                    <Text 
                        onClick={(e) => {
                            setOne(false)
                            setTwo(false)
                            setThree(true)
                            setFour(false)
                            setFive(false)
                            setSix(false)
                        }}
                        position={[0, 0.1, 0.35]}
                        fontSize={0.05}
                        color="black"
                    >
                        Temporal Lobe
                    </Text>
                </Interactive>
                <Interactive 
                        onSelect={(e) => {
                            setOne(false)
                            setTwo(false)
                            setThree(false)
                            setFour(true)
                            setFive(false)
                            setSix(false)
                        }}>
                    <Text 
                        onClick={(e) => {
                            setOne(false)
                            setTwo(false)
                            setThree(false)
                            setFour(true)
                            setFive(false)
                            setSix(false)
                        }}
                        position={[0, 0.36, 0.56]}
                        fontSize={0.05}
                        color="black"
                    >
                        Friontal Lobe
                    </Text>
                </Interactive>
                <Interactive 
                        onSelect={(e) => {
                            setOne(false)
                            setTwo(false)
                            setThree(false)
                            setFour(false)
                            setFive(true)
                            setSix(false)
                        }}>
                    <Text 
                        onClick={(e) => {
                            setOne(false)
                            setTwo(false)
                            setThree(false)
                            setFour(false)
                            setFive(true)
                            setSix(false)
                        }}
                        position={[0, 0.25, -0.45]}
                        rotation={[0, Math.PI, 0]}
                        fontSize={0.05}
                        color="black"
                    >
                        Occipital Lobe
                    </Text>
                </Interactive>
                <Interactive 
                        onSelect={(e) => {
                            setOne(false)
                            setTwo(false)
                            setThree(false)
                            setFour(false)
                            setFive(false)
                            setSix(true)
                        }}>
                    <Text 
                        onClick={(e) => {
                            setOne(false)
                            setTwo(false)
                            setThree(false)
                            setFour(false)
                            setFive(false)
                            setSix(true)
                        }}
                        position={[0, 0.5, -0.34]}
                        rotation={[0, Math.PI, 0]}
                        fontSize={0.05}
                        color="black"
                    >
                        Parietal Lobe
                    </Text>
                </Interactive>

            </primitive>
        </group>

        {six && <group position={[2, 0, 0]} rotation={[0, -Math.PI * 0.25, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"white"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text color="white" position={[2.9, 3.0, 0.01]} fontSize={0.4}>Paretial Lobe</Text>
                <Text color="white" position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text color="white" position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text color="white" position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text color="white" position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text color="white" position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text color="white" position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text color="white" position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text color="white" position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text color="white" position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text color="white" position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>
                <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>+</Text>
            </Interactive>
        </group>}

        {five && <group position={[2, 0, 0]} rotation={[0, -Math.PI * 0.25, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"white"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text color="white" position={[2.9, 3.0, 0.01]} fontSize={0.4}>Occipital Lobe</Text>
                <Text color="white" position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text color="white" position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text color="white" position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text color="white" position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text color="white" position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text color="white" position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text color="white" position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text color="white" position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text color="white" position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text color="white" position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>
                <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>+</Text>
            </Interactive>
        </group>}

        {four && <group position={[2, 0, 0]} rotation={[0, -Math.PI * 0.25, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"white"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text color="white" position={[2.9, 3.0, 0.01]} fontSize={0.4}>Friontal Lobe</Text>
                <Text color="white" position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text color="white" position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text color="white" position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text color="white" position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text color="white" position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text color="white" position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text color="white" position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text color="white" position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text color="white" position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text color="white" position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>
                <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>+</Text>
            </Interactive>
        </group>}

        {three && <group position={[2, 0, 0]} rotation={[0, -Math.PI * 0.25, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"white"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text color="white" position={[2.9, 3.0, 0.01]} fontSize={0.4}>Temporal Lobe</Text>
                <Text color="white" position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text color="white" position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text color="white" position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text color="white" position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text color="white" position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text color="white" position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text color="white" position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text color="white" position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text color="white" position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text color="white" position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>
                <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>+</Text>
            </Interactive>
        </group>}

        {two && <group position={[2, 0, 0]} rotation={[0, -Math.PI * 0.25, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"white"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text color="white" position={[2.9, 3.0, 0.01]} fontSize={0.4}>Spinal Cord</Text>
                <Text color="white" position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text color="white" position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text color="white" position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text color="white" position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text color="white" position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text color="white" position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text color="white" position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text color="white" position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text color="white" position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text color="white" position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>
                <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>+</Text>
            </Interactive>
        </group>}

        {one && <group position={[2, 0, 0]} rotation={[0, -Math.PI * 0.25, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"white"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text color="white" position={[2.9, 3.0, 0.01]} fontSize={0.4}>Cerebellum</Text>
                <Text color="white" position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text color="white" position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text color="white" position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text color="white" position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text color="white" position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text color="white" position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text color="white" position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text color="white" position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text color="white" position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text color="white" position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>
                <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                    setOne(false)
                    setTwo(false)
                    setThree(false)
                    setFour(false)
                    setFive(false)
                    setSix(false)
                }}>+</Text>
            </Interactive>
        </group>}

    </>
  )
}

export default HumanBrain