import { Perf } from "r3f-perf";
import * as THREE from 'three'
import {
  useMatcapTexture,
  Center,
  Text3D,
  OrbitControls,
} from "@react-three/drei";
import { Float } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'
import { useEffect, useState, useRef } from 'react'

const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32)
const material = new THREE.MeshBasicMaterial()

export function Pfx(props) {
//   const [torusGeometry, setTorusGeometry] = useState();
//   const [material, setMaterial] = useState();
const pfxRef = useRef([])


useFrame((state, delta) =>
{
for(const pfxRef of pfxRef.current) {
  pfxRef.rotation.y += delta * 0.2
}
})


  const tempArray = [...Array(100)];
  tempArray.map(() => {
    console.log("value");
  });
  

  return (
    <>

      <Float>
        {[...Array(100)].map((value, index) => (
            <mesh
            ref={ (element) => pfxRef.current[index] = element}
            key={index}
            geometry={torusGeometry}
            position={[
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 10,
            ]}
            scale={0.2 + Math.random() * 0.2}
            rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          >
            <meshBasicMaterial color="red" />
          </mesh>
          ))}
      </Float>

      <Center>
        <Float speed={5}>
          <Text3D
            font="/fonts/moderna_Regular.json"
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            material={material}
          >
            pfx
          </Text3D>
        </Float>
      </Center>
    </>
  );
}
