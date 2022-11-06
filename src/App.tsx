import * as THREE from "three";
import {
	OrbitControls,
	PerspectiveCamera,
	BakeShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";

import { Pepperfox } from "./components/Pepperfox";
import { Pfx } from "./components/Pfx";
import { Painted }  from "./components/materials/Painted"
import { Pebbles }  from "./components/materials/Pebbles"
import { Tribal }  from "./components/materials/Tribal"
import { Vibrant }  from "./components/materials/Vibrant"

function App() {
	const lightPos = new THREE.Vector3(0, 2, 2);

	return (
		<Canvas shadows={true}>
			<color
				attach="background"
				args={["#242424"]}
			/>

			<Suspense fallback={null}>
				<OrbitControls />

				<Pepperfox
					position={[-0.75, 0, 0]}
					lightPos={lightPos}
					scale={0.3}
				/>
				{/* <Painted lightPos={lightPos} /> */}
				{/* <Pebbles /> */}
				{/* <Pfx /> */}
				{/* <Tribal /> */}
				{/* <Vibrant lightPos={lightPos} /> */}

				<ambientLight intensity={0.2} />
				<directionalLight
					castShadow
					position={lightPos}
					// intensity={1.0}
					shadow-mapSize={[1024, 1024]}
					shadow-camera-near={1}
					shadow-camera-far={10}
					shadow-camera-top={5}
					shadow-camera-right={5}
					shadow-camera-bottom={-5}
					shadow-camera-left={-5}
				/>
				<PerspectiveCamera
					makeDefault
					position={[0, 0, 2]}
				/>
				<BakeShadows />
			</Suspense>
			<Perf />
		</Canvas>
	);
}

export default App;
