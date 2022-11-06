/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Nikolai Jonasson (https://sketchfab.com/nikolaijonasson)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/female-marble-statue-polished-but-old-41b024813afd49fb827d942219d89b93
title: Female Marble Statue (Polished but old)
*/

import * as THREE from "three";
import { useRef } from "react";
import { useGLTF, useTexture, shaderMaterial } from "@react-three/drei";
import { useFrame, extend, useThree } from "@react-three/fiber";
import VibrantFragment from "../shaders/vibrant/fragment.glsl";
import VibrantVertex from "../shaders/vibrant/vertex.glsl";
import abstractTexture from "/textures/abstract.jpg";
console.log(abstractTexture);

const VibrantShaderMaterial = shaderMaterial(
	{
		uTime: 0,
		lightPos: new THREE.Vector3(),
		abstractTexture: new THREE.TextureLoader().load(abstractTexture),
		cameraPosition: new THREE.Vector3(),
	},
	VibrantVertex,
	VibrantFragment
);
extend({ VibrantShaderMaterial });

export function Vibrant(props) {
	const camera = useThree((state) => state.camera);
	console.log("camera pos", camera);

	const vibrantShaderMaterialRef = useRef();

	// console.log(femaleVibrantShaderMaterialRef.current)

	useFrame((state, delta) => {
		vibrantShaderMaterialRef.current.uTime += delta;
		vibrantShaderMaterialRef.current.cameraPosition = camera.position;
	});

	const { lightPos } = { ...props };

	return (

			<vibrantShaderMaterial
				ref={vibrantShaderMaterialRef}
				side={THREE.DoubleSide}
				lightPos={lightPos}
				// abstractTexture={abstractTexture}
			/>

	);
}

useGLTF.preload("female_marble_statue_polished_but_old.glb");
