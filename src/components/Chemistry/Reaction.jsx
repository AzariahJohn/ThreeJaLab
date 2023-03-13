import React, { useRef, useState, useEffect } from "react";
import { Text, useGLTF, PivotControls, Text3D } from "@react-three/drei";
import { Debug, Physics, RigidBody } from "@react-three/rapier";
import { useFrame } from '@react-three/fiber';
import { ShaderMaterial } from 'three';
import * as THREE from 'three';
import { Interactive } from '@react-three/xr'

function Reaction(props) {

  const { nodes, materials } = useGLTF("/beaker.gltf");
  const table = useGLTF("./table.gltf")

  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)

  const [rxnOne, setRxnOne] = useState(false)
  const [rxnTwo, setRxnTwo] = useState(false)
  const [rxnThree, setRxnThree] = useState(false)

  const [oneColor, setOneColor] = useState("#828181")
  const [twoColor, setTwoColor] = useState("#828181")
  const [threeColor, setThreeColor] = useState("#828181")

  // Brown, Purple, Maroon.

  return (
    <>
        <Physics>

            {/* <Debug /> */}
            
            <group {...props} dispose={null} position={[-1.5, -0.77, -2.6]}>
                <RigidBody type="fixed" colliders="trimesh">
                    <Interactive onSelect={() => {
                            setOne("dynamic")
                            setOneColor("#e37a4d")
                        }}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Beaker.geometry}
                        material={materials.beakerColor}
                        position={[-1.38, 1.02, -1.42]}
                        onClick={() => {
                            setOne("dynamic")
                            setTimeout(() => {
                                setOneColor("#e37a4d")
                            }, 2000)
                        }}
                    />
                    </Interactive>
                </RigidBody>

                <group position={[-1.74, 1, -0.4]} scale={0.5} >
                    <Text color="black" position={[0, 0, 0]}>H</Text>
                    <Text color="black" fontSize={0.5} position={[0.5, -0.3, 0]}>2</Text>
                    <Text color="black" position={[1.5, 0, 0]}>SO</Text>
                    <Text color="black" fontSize={0.5} position={[2.2, -0.3, 0]}>4</Text>
                </group>
                <mesh position={[-1.38, 1.02, -1.42]}>
                    <cylinderGeometry args={[0.99, 0.99, 1.8]}/>
                    <meshBasicMaterial color={oneColor}/>
                </mesh>

                <mesh scale={0.3} position={[-1.4, -1, 0.8]}
                    onClick={() => {
                        setRxnOne(!rxnOne)
                        setRxnTwo(false)
                        setRxnThree(false)
                    }}
                >
                    <boxGeometry args={[4, 2, 1]}/>
                    <meshBasicMaterial />
                    <Text fontSize={0.5} color="black" position={[0, 0, 0.55]}>Reaction</Text>
                </mesh>

            </group>

            <group {...props} dispose={null} position={[ 1.3, -0.77, -2.6]}>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Beaker.geometry}
                        material={materials.beakerColor}
                        position={[-1.38, 1.02, -1.42]}
                        onClick={() => {
                            setTwo("dynamic")
                            setTimeout(() => {
                                setTwoColor("#ad9f66")
                            }, 2000)
                        }}
                    />
                </RigidBody>

                <group position={[-1.64, 1, -0.4]} scale={0.5} >
                    <Text color="black" position={[0, 0, 0]}>H</Text>
                    <Text color="black" position={[1, 0, 0]}>Cl</Text>
                </group>

                <mesh position={[-1.38, 1.02, -1.42]}>
                    <cylinderGeometry args={[0.99, 0.99, 1.8]}/>
                    <meshBasicMaterial color={twoColor}/>
                </mesh>
            
                <mesh scale={0.3} position={[-1.4, -1, 0.8]}
                    onClick={() => {
                        setRxnOne(false)
                        setRxnTwo(!rxnTwo)
                        setRxnThree(false)
                    }}
                >
                    <boxGeometry args={[4, 2, 1]}/>
                    <meshBasicMaterial />
                    <Text fontSize={0.5} color="black" position={[0, 0, 0.55]}>Reaction</Text>
                </mesh>

            </group>

            <group {...props} dispose={null} position={[ 4, -0.77, -2.6]}>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Beaker.geometry}
                        material={materials.beakerColor}
                        position={[-1.38, 1.02, -1.42]}
                        onClick={() => {
                            setThree(true)
                            setTimeout(() => {
                                setThreeColor("#7a5848")
                            }, 2000)
                            
                        }}
                    />
                </RigidBody>

                <group position={[-1.98, 1, -0.4]} scale={0.5} >
                    <Text color="black" position={[0, 0, 0]}>H</Text>
                    <Text color="black" fontSize={0.5} position={[0.5, -0.3, 0]}>2</Text>
                    <Text color="black" position={[1.5, 0, 0]}>SO</Text>
                    <Text color="black" fontSize={0.5} position={[2.2, -0.3, 0]}>4</Text>
                </group>


                <mesh position={[-1.38, 1.02, -1.42]}>
                    <cylinderGeometry args={[0.99, 0.99, 1.8]}/>
                    <meshBasicMaterial color={threeColor}/>
                </mesh>

                <mesh scale={0.3} position={[-1.4, -1, 0.8]} 
                    onClick={() => {
                        setRxnOne(false)
                        setRxnTwo(false)
                        setRxnThree(!rxnThree)
                    }}
                >
                    <boxGeometry args={[4, 2, 1]}/>
                    <meshBasicMaterial />
                    <Text fontSize={0.5} color="black" position={[0, 0, 0.55]}>Reaction</Text>
                </mesh>
            </group>
            
                {three && <RigidBody >
                        <mesh scale={0.5} position={[2.6, 3.5, -4]}>
                            <boxGeometry />
                            <meshBasicMaterial color="white"/>
                            <Text position={[0, 0, 0.57]} fontSize={0.5} color="black">Na</Text>
                        </mesh>  
                </RigidBody>}

                {two && <RigidBody >
                        <mesh scale={0.5} position={[-0.1, 3.5, -4]}>
                            <boxGeometry />
                            <meshBasicMaterial color="white"/>
                            <Text position={[0, 0, 0.57]} fontSize={0.5} color="black">Zn</Text>
                        </mesh>  
                </RigidBody>}

                {one && <RigidBody >
                        <mesh scale={0.5} position={[-2.85, 3.5, -4]}>
                            <boxGeometry />
                            <meshBasicMaterial color="white"/>
                            <Text position={[0, 0, 0.57]} fontSize={0.5} color="black">Mg</Text>
                        </mesh>  
                </RigidBody>}

                {/* Mg + h2so4 -> Mgso4 + h2 */}
            
            <RigidBody type="fixed">
                <primitive object={table.scene} position={[0, -3, -4]}></primitive>
            </RigidBody>

            {/* Reaction One */}

            {rxnOne && <group position={[-4.4, 4, -6]} scale={0.6}>
                <mesh>
                    <sphereGeometry />
                    <meshBasicMaterial color="blue"/>
                    <Text position={[0.15, -0.2, 1]}>Na</Text>
                    <Text position={[2.5, 0, 0]}>+</Text>
                </mesh>

                <mesh position={[5, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="green"/>
                    <group position={[-0.5, -0.2, 0.5]} scale={0.5}>
                        <Text position={[0, 0, 1]}>H</Text>
                        <Text scale={0.5} position={[0.5, -0.08, 1]}>2</Text>
                        <Text position={[1.5, 0, 1]}>SO</Text>
                        <Text scale={0.5} position={[2.3, -0.08, 1]}>4</Text>
                    </group>
                    <Text scale={0.5} position={[2.5, 0, 0]}>Gives</Text>
                </mesh> 

                <mesh position={[10, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="yellow"/>
                    <group scale={0.5} position={[-0.65, -0.15, 0.5]}>
                        <Text color="black" position={[0, 0, 1]}>N</Text>
                        <Text color="black" scale={0.5} position={[0.5, -0.08, 1]}>a</Text>
                        <Text color="black" position={[1.5, 0, 1]}>SO</Text>
                        <Text color="black" scale={0.5} position={[2.3, -0.08, 1]}>4</Text>
                    </group>
                    <Text position={[2.5, 0, 0]}>+</Text>
                </mesh>

                <mesh position={[15, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="red"/>
                    <group scale={1} position={[-0.45, -0.2, -0]}>
                        <Text color="white" position={[0, 0, 1]}>H</Text>
                        <Text color="white" scale={0.5} position={[0.5, -0.08, 1]}>2</Text>
                    </group>
                </mesh>
            </group>}

            {/* Reaction Two */}

            {rxnTwo && <group position={[-4.4, 4, -6]} scale={0.6}>
                <mesh>
                    <sphereGeometry />
                    <meshBasicMaterial color="blue"/>
                    <Text position={[0.15, -0.2, 1]}>Zn</Text>
                    <Text position={[2.5, 0, 0]}>+</Text>
                </mesh>

                <mesh position={[5, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="green"/>
                    <group position={[-0.5, -0.2, 0.5]} scale={0.5}>
                        <Text position={[0, 0, 1]}>2</Text>
                        <Text position={[1.5, 0, 1]}>HCL</Text>
                    </group>
                    <Text scale={0.5} position={[2.5, 0, 0]}>Gives</Text>
                </mesh> 

                <mesh position={[10, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="yellow"/>
                    <group scale={0.5} position={[-0.65, -0.15, 0.5]}>
                        <Text color="black" position={[0.4, 0, 1]}>Zn</Text>
                        <Text color="black" position={[1.5, 0, 1]}>Cl</Text>
                        <Text color="black" scale={0.5} position={[2.3, -0.08, 1]}>2</Text>
                    </group>
                    <Text position={[2.5, 0, 0]}>+</Text>
                </mesh>

                <mesh position={[15, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="red"/>
                    <group scale={1} position={[-0.45, -0.2, -0]}>
                        <Text color="white" position={[0, 0, 1]}>H</Text>
                        <Text color="white" scale={0.5} position={[0.5, -0.08, 1]}>2</Text>
                    </group>
                </mesh>
            </group>}

            {/* Reaction Three */}

            {rxnThree && <group position={[-4.4, 4, -6]} scale={0.6}>
                <mesh>
                    <sphereGeometry />
                    <meshBasicMaterial color="blue"/>
                    <Text position={[0.15, -0.2, 1]}>Mg</Text>
                    <Text position={[2.5, 0, 0]}>+</Text>
                </mesh>

                <mesh position={[5, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="green"/>
                    <group position={[-0.5, -0.2, 0.5]} scale={0.5}>
                        <Text position={[0, 0, 1]}>H</Text>
                        <Text scale={0.5} position={[0.5, -0.08, 1]}>2</Text>
                        <Text position={[1.5, 0, 1]}>SO</Text>
                        <Text scale={0.5} position={[2.3, -0.08, 1]}>4</Text>
                    </group>
                    <Text scale={0.5} position={[2.5, 0, 0]}>Gives</Text>
                </mesh> 

                <mesh position={[10, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="yellow"/>
                    <group scale={0.5} position={[-0.65, -0.15, 0.5]}>
                        <Text color="black" position={[0, 0, 1]}>M</Text>
                        <Text color="black" scale={0.5} position={[0.6, -0.08, 1]}>g</Text>
                        <Text color="black" position={[1.5, 0, 1]}>SO</Text>
                        <Text color="black" scale={0.5} position={[2.3, -0.08, 1]}>4</Text>
                    </group>
                    <Text position={[2.5, 0, 0]}>+</Text>
                </mesh>

                <mesh position={[15, 0, 0]}>
                    <sphereGeometry />
                    <meshBasicMaterial color="red"/>
                    <group scale={1} position={[-0.45, -0.2, -0]}>
                        <Text color="white" position={[0, 0, 1]}>H</Text>
                        <Text color="white" scale={0.5} position={[0.5, -0.08, 1]}>2</Text>
                    </group>
                </mesh>
            </group>}

        </Physics>
    </>
  );
}

useGLTF.preload("/beaker.gltf");


export default Reaction