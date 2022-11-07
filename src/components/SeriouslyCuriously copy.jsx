import * as THREE from "three";
import { Suspense, useRef } from "react";
import { Float, Text } from "@react-three/drei";
// import moderna from "../../assets/fonts/modernaOTF.json"
import helvetiker from "/fonts/helvetiker_regular.typeface.json"
import avant from "/fonts/ITCAvantGardeStd-Bold.otf"
import { Pebbles } from "./materials/Pebbles"
import { Painted } from "./materials/Painted"
import { Tribal } from "./materials/Tribal"
import { Checkerboard } from "./materials/Checkerboard"


export function SeriouslyCuriously(props) {
	


	return (
		<group
			{...props}
			dispose={null}
		>
            <Float>

          <Text
            font={avant}
            size={0.75}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={1}
            // color="#eb5b21"
			>
            {"Seriously Spicy\nCuriously Crafty"}
            {/* <Pebbles/> */}
            {/* <Painted/> */}
            {/* <Tribal/> */}
            {/* <Vibrant/> */}
            <Checkerboard />
			{/* <meshStandardMaterial color="#eb5b21" /> */}
          </Text>

                </Float>
	
		</group>
	);
}
