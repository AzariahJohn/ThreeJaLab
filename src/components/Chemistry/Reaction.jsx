import React, { useRef, useState } from "react";
import { Text, useGLTF, PivotControls } from "@react-three/drei";
import { Debug, Physics, RigidBody } from "@react-three/rapier";

function Reaction(props) {

  const { nodes, materials } = useGLTF("/beaker.gltf");
  const table = useGLTF("./table.gltf")

  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)

  return (
    <>
        <Physics>

            {/* <Debug /> */}
            
            <group {...props} dispose={null} position={[-1.5, -0.77, -2.6]}>
                <RigidBody type="fixed" colliders="trimesh">
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Beaker.geometry}
                        material={materials.beakerColor}
                        position={[-1.38, 1.02, -1.42]}
                        onClick={() => {
                            setOne("dynamic")
                        }}
                    />
                </RigidBody>

                <group position={[-1.74, 1, -0.4]} scale={0.5} >
                    <Text color="black" position={[0, 0, 0]}>H</Text>
                    <Text color="black" fontSize={0.5} position={[0.5, -0.3, 0]}>2</Text>
                    <Text color="black" position={[1.5, 0, 0]}>SO</Text>
                    <Text color="black" fontSize={0.5} position={[2.2, -0.3, 0]}>4</Text>
                </group>
                <mesh position={[-1.38, 1.02, -1.42]}>
                    <cylinderGeometry args={[0.99, 0.99, 1.8]}/>
                    <meshBasicMaterial color="yellow"/>
                </mesh>

                <mesh scale={0.3} position={[-1.4, -1, 0.8]}>
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
                        }}
                    />
                </RigidBody>

                <group position={[-1.84, 1, -0.4]} scale={0.5} >
                    <Text color="black" position={[0, 0, 0]}>H</Text>
                    <Text color="black" fontSize={0.5} position={[0.5, -0.3, 0]}>2</Text>
                    <Text color="black" position={[1.5, 0, 0]}>SO</Text>
                    <Text color="black" fontSize={0.5} position={[2.2, -0.3, 0]}>4</Text>
                </group>

                <mesh position={[-1.38, 1.02, -1.42]}>
                    <cylinderGeometry args={[0.99, 0.99, 1.8]}/>
                    <meshBasicMaterial color="lightblue "/>
                </mesh>
            
                <mesh scale={0.3} position={[-1.4, -1, 0.8]}>
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
                    <meshBasicMaterial color="grey"/>
                </mesh>

                <mesh scale={0.3} position={[-1.4, -1, 0.8]}>
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
                            <Text position={[0, 0, 0.57]} fontSize={0.5} color="black">Na</Text>
                        </mesh>  
                </RigidBody>}

                {one && <RigidBody >
                        <mesh scale={0.5} position={[-2.85, 3.5, -4]}>
                            <boxGeometry />
                            <meshBasicMaterial color="white"/>
                            <Text position={[0, 0, 0.57]} fontSize={0.5} color="black">Na</Text>
                        </mesh>  
                </RigidBody>}
            
            <RigidBody type="fixed">
                <primitive object={table.scene} position={[0, -3, -4]}></primitive>
            </RigidBody>

        </Physics>
    </>
  );
}

useGLTF.preload("/beaker.gltf");


export default Reaction