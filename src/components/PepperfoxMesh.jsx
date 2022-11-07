import React, { useRef , Suspense} from "react";
import { useGLTF, Float } from "@react-three/drei";
import { Pebbles } from "./materials/Pebbles";
import { Painted } from "./materials/Painted";
import { Tribal } from "./materials/Tribal";
import { Vibrant } from "./materials/Vibrant";

export function PepperfoxMesh(props) {
	const { nodes, materials } = useGLTF("/pepperfox.glb");
	return (
		<group
			{...props}
			dispose={null}
		>
			<Float speed={5}>
				<Suspense fallback={null}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.pepperfox.geometry}
					>
						{/* <Pebbles/> */}
						{/* <Painted/> */}
						{/* <Tribal/> */}
						<Vibrant />
						{/* <meshStandardMaterial color="#eb5b21" /> */}
					</mesh>
				</Suspense>
			</Float>
		</group>
	);
}

useGLTF.preload("/pepperfox.glb");
