import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Float, Text3D } from "@react-three/drei";
// import moderna from "../../assets/fonts/modernaOTF.json"
import helvetiker from "../assets/fonts/helvetiker_regular.typeface.json"
import { Pebbles } from "./materials/Pebbles"
import { Painted } from "./materials/Painted"
import { Tribal } from "./materials/Tribal"
import { Vibrant } from "./materials/Vibrant"


export function Pepperfox(props) {
	


	return (
		<group
			{...props}
			dispose={null}
		>

	    <Float speed={5}>
			<Suspense fallback={null}>
          <Text3D
            font={helvetiker}
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={1}
			>
            pepperfox
            {/* <Pebbles/> */}
            {/* <Painted/> */}
            {/* <Tribal/> */}
            <Vibrant/>
			{/* <meshStandardMaterial color="red" /> */}
          </Text3D>
			  </Suspense>
	
        </Float>
		</group>
	);
}
