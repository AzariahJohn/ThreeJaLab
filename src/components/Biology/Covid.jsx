import React, { useRef, useState } from 'react'
import { Html, OrbitControls, Text, useGLTF } from '@react-three/drei'
import { useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import './HumanBrain.css'
import { Interactive, useXR } from '@react-three/xr'


/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

export default function Model(props) {

  const { nodes, materials } = useGLTF("/Virus_Embeded.gltf");
  const virusRef = useRef(true)

  const[ rotate, setRotate ] = useState(true)

  const [rna, setRna] = useState(true)
  const [epro, setEpro] = useState(true)
  const [evRight, setEvRight] = useState(true)
  const [hema, setHema] = useState(true)
  const [mpro, setMpro] = useState(true)
  const [spike, setSpike] = useState(true)
  const [evLeft, setEvLeft] = useState(true)
  const [menu, setMenu] = useState(true)
  const [disect, setDisect] = useState(false)

  const [rnai, setRnai] = useState(false)
  const [eproi, setEproi] = useState(false)
  const [evRighti, setEvRighti] = useState(false)
  const [hemai, setHemai] = useState(false)
  const [mproi, setMproi] = useState(false)
  const [spikei, setSpikei] = useState(false)
  const [menui, setMenui] = useState(false)

  useFrame((state, delta) => {
    const rotation = () => {
        virusRef.current.rotation.y += delta * 0.25;
    }
    {rotate && rotation()}
  })

  return (
    <>
    <group {...props} dispose={null} position={[2, 2, -4]} scale={0.75} ref={virusRef} onClick={(e) => {setRotate(!rotate)}}>
      {rna && <mesh
        castShadow
        receiveShadow
        geometry={nodes.DNA_RNA.geometry}
        material={materials.Dna}
        rotation={[Math.PI / 2, 0, 0]}>
        <Interactive onSelect={() => {
            setRna(true)
            setEpro(false)
            setEvLeft(false)
            setEvRight(false)
            setHema(false)
            setSpike(false)
            setMpro(false)
          }}>
        <Text 
          rotation={[-Math.PI * 0.5, 0, 0]} 
          position={[0.08, 0.3, 0.5]} 
          fontSize={ 0.25 } 
          color={"black"}
          onClick={() => {
            setRna(true)
            setEpro(false)
            setEvLeft(false)
            setEvRight(false)
            setHema(false)
            setSpike(false)
            setMpro(false)
          }}
        >DNA-RNA</Text></Interactive>
      </mesh>}
      {epro && <mesh
        castShadow
        receiveShadow
        geometry={nodes.E_Protein.geometry}
        material={materials.Protein}
        rotation={[Math.PI / 2, 0, 0]}>
      <Interactive onSelect={() => {
          setRna(false)
          setEpro(true)
          setEvLeft(false)
          setEvRight(false)
          setHema(false)
          setSpike(false)
          setMpro(false)
        }}>
      <Text 
        position={[0.2, 1.1, -0.5]} 
        rotation={[-Math.PI * 0.5, 0, 0]} 
        fontSize={ 0.15 } 
        color={"black"}
        onClick={() => {
          setRna(false)
          setEpro(true)
          setEvLeft(false)
          setEvRight(false)
          setHema(false)
          setSpike(false)
          setMpro(false)
        }}
        >E Protein
      </Text>
      </Interactive>
      </mesh>}
      {evRight && <mesh
        castShadow
        receiveShadow
        geometry={nodes.EnvelopeRight.geometry}
        material={materials.envelope}
        rotation={[Math.PI / 2, 0, 0]}
      ><Text position={[0.25, 1.0, 0.4]} rotation={[-Math.PI * 0.5, 0, 0]} fontSize={ 0.15 } color={"black"}>Envelope</Text></mesh>}
      {hema && <mesh
        castShadow
        receiveShadow
        geometry={nodes.Hemagglutinin_esterase_Dimer017.geometry}
        material={materials.Hemagg}
        rotation={[Math.PI / 2, 0, 0]}
      ><Text position={[-0.9, -0.6, 0.4]} rotation={[-Math.PI * 0.5, -Math.PI * 0.64, 0]} fontSize={ 0.15 } color={"black"}>Hemagglutinin</Text></mesh>}
      {mpro && <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_Protein.geometry}
        material={materials.Mprotien}
        rotation={[Math.PI / 2, 0, 0]}
      ><Text position={[1.2, -0.1, 0.1]} rotation={[-Math.PI * 0.5, Math.PI * 0.50, 0]} fontSize={ 0.15 } color={"black"}>M Protein</Text></mesh>}
      {spike && <mesh
        castShadow
        receiveShadow
        geometry={nodes.SpikeGlycoprotein.geometry}
        material={materials.Spike}
        rotation={[Math.PI / 2, 0, 0]}
      ><Text position={[-0.4, -0.1, -1.2]} rotation={[-Math.PI * 0.5, -Math.PI * 0.55, 0]} fontSize={ 0.15 } color={"black"}>Glycoprotein</Text></mesh>}
      {evLeft && <mesh
        castShadow
        receiveShadow
        geometry={nodes.EnvelopeLeft.geometry}
        material={materials.envelope}
        rotation={[Math.PI / 2, 0, 0]}
      ><Text position={[0.25, 1.0, 0.4]} rotation={[-Math.PI * 0.5, 0, 0]} fontSize={ 0.15 } color={"black"}>Envelope</Text></mesh>}
    </group>
    {menu && <group position={[5.8, 2, -3]} scale={0.3} rotation={[0, -Math.PI * 0.5, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"black"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, 0, 0]}>

                <Interactive onSelect={(e) => {
                      setRna(true)
                      setEpro(false)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(false)
                      setSpike(false)
                      setMpro(false)
                      setMenu(false)
                      setRnai(true)
                    }}>
                  <Text 
                    position={[2.9, 3.0, 0.01]} 
                    fontSize={0.4}
                    onClick={(e) => {
                      setRna(true)
                      setEpro(false)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(false)
                      setSpike(false)
                      setMpro(false)
                      setMenu(false)
                      setRnai(true)
                    }}
                  >DNA-RNA</Text>
                </Interactive>

                <Interactive onSelect={(e) => {
                      setRna(false)
                      setEpro(true)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(false)
                      setSpike(false)
                      setMpro(false)
                      setMenu(false)
                      setEproi(true)
                    }}>
                  <Text 
                    position={[2.9, 2.5, 0.01]} 
                    fontSize={0.4}
                    onClick={(e) => {
                      setRna(false)
                      setEpro(true)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(false)
                      setSpike(false)
                      setMpro(false)
                      setMenu(false)
                      setEproi(true)
                    }}
                  >E Protein</Text>
                </Interactive>

                <Interactive onSelect={(e) => {
                      setRna(false)
                      setEpro(false)
                      setEvLeft(true)
                      setEvRight(false)
                      setHema(false)
                      setSpike(false)
                      setMpro(false)
                      setMenu(false)
                      setEvRighti(true)
                  }}>
                  <Text 
                    position={[2.9, 2.0, 0.01]} 
                    fontSize={0.4}
                    onClick={(e) => {
                      setRna(false)
                      setEpro(false)
                      setEvLeft(true)
                      setEvRight(false)
                      setHema(false)
                      setSpike(false)
                      setMpro(false)
                      setMenu(false)
                      setEvRighti(true)
                  }}
                  >Envelope</Text>
                </Interactive>

                <Interactive onSelect={(e) => {
                      setRna(false)
                      setEpro(false)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(true)
                      setSpike(false)
                      setMpro(false)
                      setMenu(false)
                      setHemai(true)
                    }}>
                  <Text 
                    position={[2.9, 0.5, 0.01]} 
                    fontSize={0.4}
                    onClick={(e) => {
                      setRna(false)
                      setEpro(false)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(true)
                      setSpike(false)
                      setMpro(false)
                      setMenu(false)
                      setHemai(true)
                    }}
                  >Hemagglutinin</Text>
                </Interactive>

                <Interactive onSelect={(e) => {
                      setRna(false)
                      setEpro(false)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(false)
                      setSpike(true)
                      setMpro(false)
                      setMenu(false)
                      setMproi(true)
                  }}>
                  <Text 
                    position={[2.9, 1.0, 0.01]} 
                    fontSize={0.4}
                    onClick={(e) => {
                      setRna(false)
                      setEpro(false)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(false)
                      setSpike(true)
                      setMpro(false)
                      setMenu(false)
                      setMproi(true)
                    }}
                  >M Protein</Text>
                </Interactive>

                <Interactive onSelect={(e) => {
                      setRna(false)
                      setEpro(false)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(false)
                      setSpike(false)
                      setMpro(true)
                      setMenu(false)
                      setSpikei(true)
                    }}>
                  <Text 
                    position={[2.9, 1.5, 0.01]} 
                    fontSize={0.4}
                    onClick={(e) => {
                      setRna(false)
                      setEpro(false)
                      setEvLeft(false)
                      setEvRight(false)
                      setHema(false)
                      setSpike(false)
                      setMpro(true)
                      setMenu(false)
                      setSpikei(true)
                    }}
                  >Glyco Protien</Text>
                </Interactive>

                <Interactive onSelect={(e) => {
                      setRna(true)
                      setEpro(true)
                      setEvLeft(true)
                      setEvRight(!evRight)
                      setHema(true)
                      setSpike(true)
                      setMpro(true)
                    }}>
                  <Text 
                    position={[2.9, 0, 0.01]} 
                    fontSize={0.4}
                    onClick={(e) => {
                      setRna(true)
                      setEpro(true)
                      setEvLeft(true)
                      setEvRight(!evRight)
                      setHema(true)
                      setSpike(true)
                      setMpro(true)
                  }}
                  >Disect</Text>
                </Interactive>

            </group>
          </group>}
            {/* <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                console.log("exit")
            }}>+</Text> */}
            {rnai && <group position={[5.8, 2, -3]} scale={0.3} rotation={[0, -Math.PI * 0.5, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"black"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text position={[2.9, 3.0, 0.01]} fontSize={0.4}>RNA-DNA</Text>
                <Text position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                  setMenu(true)
                  setRnai(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>
              <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                  setMenu(true)
                  setRnai(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>+</Text>
            </Interactive>
        </group>}
        {eproi && <group position={[5.8, 2, -3]} scale={0.3} rotation={[0, -Math.PI * 0.5, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"black"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text position={[2.9, 3.0, 0.01]} fontSize={0.4}>E Protein</Text>
                <Text position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                  setMenu(true)
                  setEproi(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>
              <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                  setMenu(true)
                  setEproi(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>+</Text>
            </Interactive>
        </group>}
        {evRighti && <group position={[5.8, 2, -3]} scale={0.3} rotation={[0, -Math.PI * 0.5, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"black"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text position={[2.9, 3.0, 0.01]} fontSize={0.4}>Envelope</Text>
                <Text position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                setMenu(true)
                setEvRighti(false)
                setRna(true)
                setEpro(true)
                setEvLeft(true)
                setEvRight(true)
                setHema(true)
                setSpike(true)
                setMpro(true)
            }}>
            <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                setMenu(true)
                setEvRighti(false)
                setRna(true)
                setEpro(true)
                setEvLeft(true)
                setEvRight(true)
                setHema(true)
                setSpike(true)
                setMpro(true)
            }}>+</Text>
            </Interactive>
        </group>}
        {spikei && <group position={[5.8, 2, -3]} scale={0.3} rotation={[0, -Math.PI * 0.5, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"black"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text position={[2.9, 3.0, 0.01]} fontSize={0.4}>Glyco Protien</Text>
                <Text position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                  setMenu(true)
                  setSpikei(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>
              <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                  setMenu(true)
                  setSpikei(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>+</Text>
            </Interactive>
        </group>}
        {mproi && <group position={[5.8, 2, -3]} scale={0.3} rotation={[0, -Math.PI * 0.5, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"black"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text position={[2.9, 3.0, 0.01]} fontSize={0.4}>M Protien</Text>
                <Text position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                  setMenu(true)
                  setMproi(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>
              <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                  setMenu(true)
                  setMproi(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>+</Text>
            </Interactive>
        </group>}
        {hemai && <group position={[5.8, 2, -3]} scale={0.3} rotation={[0, -Math.PI * 0.5, 0]}>
            
            <mesh position={[3, 1.2, 0]}  scale={[5, 5, 1]}>
                <planeGeometry />
                <meshStandardMaterial color={"black"} opacity={0.4} transparent/>
            </mesh>
            <group position={[0.25, -0.5, 0]}>
                <Text position={[2.9, 3.0, 0.01]} fontSize={0.4}>Hemagglutinin</Text>
                <Text position={[2.9, 2.2, 0.01]} fontSize={0.2}>Your brain's parietal lobe is a key </Text>
                <Text position={[2.9, 2.0, 0.01]} fontSize={0.2}>part of your understanding of </Text>
                <Text position={[2.9, 1.8, 0.01]} fontSize={0.2}>the world around you. It processes </Text>
                <Text position={[2.9, 1.6, 0.01]} fontSize={0.2}>your sense of touch and assembles</Text>
                <Text position={[2.9, 1.4, 0.01]} fontSize={0.2}>input from your other senses into </Text>
                <Text position={[2.9, 1.2, 0.01]} fontSize={0.2}>a form you can use. Your parietal </Text>
                <Text position={[2.9, 1.0, 0.01]} fontSize={0.2}>lobe also helps you understand </Text>
                <Text position={[2.9, 0.8, 0.01]} fontSize={0.2}>where you are in relation to other </Text>
                <Text position={[2.9, 0.6, 0.01]} fontSize={0.2}>things that your senses are </Text>
                <Text position={[2.9, 0.4, 0.01]} fontSize={0.2}>picking up around you.</Text>
            </group>
            <Interactive onSelect={() => {
                  setMenu(true)
                  setHemai(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>
              <Text position={[0.9, 3.3, 0.01]} rotation={[0, 0, -Math.PI * 0.25]} fontSize={0.5} onClick={() => {
                  setMenu(true)
                  setHemai(false)
                  setRna(true)
                  setEpro(true)
                  setEvLeft(true)
                  setEvRight(true)
                  setHema(true)
                  setSpike(true)
                  setMpro(true)
              }}>+</Text>
            </Interactive>
        </group>}
    </>
  );
}

useGLTF.preload("/Virus_Embeded.gltf");
