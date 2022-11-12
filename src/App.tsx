import * as THREE from "three";
import {
	OrbitControls,
	PerspectiveCamera,
	BakeShadows,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { useControls } from "leva";

import { PepperfoxMesh } from "./components/PepperfoxMesh";
import { SeriouslyCuriously } from "./components/SeriouslyCuriously"
import { PepperfoxMSDF1 } from "./components/PepperfoxMSDF1"
import { PepperfoxMSDF2 } from "./components/PepperfoxMSDF2"
import { PepperfoxMSDF3 } from "./components/PepperfoxMSDF3"
import { PepperfoxMSDF4 } from "./components/PepperfoxMSDF4"
import { Pfx } from "./components/Pfx";
import { Painted }  from "./components/materials/Painted"
import { Pebbles }  from "./components/materials/Pebbles"
import { Tribal }  from "./components/materials/Tribal"
import { Vibrant }  from "./components/materials/Vibrant"

function App() {
	const lightPos = new THREE.Vector3(0, 2, 2);

	const { masterProgress } = useControls({
		masterProgress: { value: 0.0, min: 0.0, max: 2.0},
	});


	return (
		<Canvas shadows={true}>
			<color
				attach="background"
				args={[0.141, 0.141, 0.141]}
			/>

			<Suspense fallback={null}>
				<OrbitControls />

				{/* <PepperfoxMesh
					position={[0, 0.3, 0]}
					rotation={[ 90*Math.PI / 180, 0, 0]}
					lightPos={lightPos}
					scale={0.3}
				/> */}
			{/* <SeriouslyCuriously /> */}
			<PepperfoxMSDF1 position={[0,1,0]} masterProgress={masterProgress}/>
			{/* <PepperfoxMSDF2 position={[0,0,0]} masterProgress={masterProgress}/>
			<PepperfoxMSDF3 position={[0,-1,0]} masterProgress={masterProgress}/>
			<PepperfoxMSDF4 position={[0,-2,0]} masterProgress={masterProgress}/> */}

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
					position={[0, 0, 1.4]}
				/>
				<BakeShadows />
			</Suspense>
			<Perf />
		</Canvas>
	);
}

export default App;
