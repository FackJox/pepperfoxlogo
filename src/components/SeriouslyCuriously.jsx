/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Nikolai Jonasson (https://sketchfab.com/nikolaijonasson)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/female-marble-statue-polished-but-old-41b024813afd49fb827d942219d89b93
title: Female Marble Statue (Polished but old)
*/

import * as THREE from "three";
import { useRef } from "react";
import { useGLTF, useTexture, shaderMaterial, Float } from "@react-three/drei";
import { useFrame, extend, useThree } from "@react-three/fiber";
import CheckerboardFragment from "../components/shaders/checkerboard/fragment.glsl";
import CheckerboardVertex from "../components/shaders/checkerboard/vertex.glsl";
import MSDFTextGeometry from "../components/MSDFTextGeometry";
import MSDFTextMaterial from "../components/MSDFTextMaterial";
import vertexShader from "../components/MSDFTextMaterial/shaders/vertex.glsl";
import fragmentShader from "../components/MSDFTextMaterial/shaders/fragment.glsl";
import { FontLoader } from "three-stdlib";

import fnt from "../assets/fonts/ITCAvantGardeStd-Bold-msdf.json";
import png from "../assets/fonts/ITCAvantGardeStd-Bold.png";

// import fnt from "../assets/fonts/moderna-msdf.json"
// import png from "../assets/fonts/moderna.png"

// import fnt from "../moderna-msdf.fnt"
// import png from "/moderna.png"

const CheckerboardShaderMaterial = shaderMaterial(
	{
		uTime: 0,
		lightPos: new THREE.Vector3(),
		cameraPos: new THREE.Vector3(),
	},
	CheckerboardVertex,
	CheckerboardFragment
);
extend({ CheckerboardShaderMaterial });

export function SeriouslyCuriously(props) {
	const camera = useThree((state) => state.camera);
	console.log("camera pos", camera);

	const checkerboardShaderMaterialRef = useRef();
	const seriouslyCuriouslyRef = useRef();

	// console.log(femaleVibrantShaderMaterialRef.current)

	useFrame((state, delta) => {
		checkerboardShaderMaterialRef.current.uTime += delta;
		checkerboardShaderMaterialRef.current.cameraPos = camera.position;
	});

	const { lightPos } = { ...props };

	Promise.all([loadFontAtlas(png)]).then(([atlas]) => {
		const geometry = new MSDFTextGeometry({
			text: 'SeriouslySpicy\n CuriouslyCrafty',
			font: fnt,
		});
		
		console.log(geometry)
		
		const options = {
			side: THREE.FrontSide,
			transparent: true,
			defines: {
				IS_SMALL: false,
			},
			extensions: {
				derivatives: true,
			},
			uniforms: {
				// Common
				uOpacity: { value: 1 },
				uColor: { value: new THREE.Color("#ffffff") },
				uMap: { value: null },
				// Rendering
				uThreshold: { value: 0.05 },
				uAlphaTest: { value: 0.01 },
				// Strokes
				uStrokeColor: { value: new THREE.Color("#ff0000") },
				uStrokeOutsetWidth: { value: 0.0 },
				uStrokeInsetWidth: { value: 0.3 },
			},
			vertexShader,
			fragmentShader,
		};

		const material = new MSDFTextMaterial(options);
		material.uniforms.uMap.value = atlas;

		const mesh = new THREE.Mesh(geometry, material);
		seriouslyCuriouslyRef.current.geometry = geometry;
		seriouslyCuriouslyRef.current.material = material;
		seriouslyCuriouslyRef.current.scale.set(0.002, 0.002, 0.002);
		seriouslyCuriouslyRef.current.position.set(-0.4, -0.1, 0);
		seriouslyCuriouslyRef.current.rotation.set(
			0,
			(180 * Math.PI) / 180,
			(180 * Math.PI) / 180
		);
	});

	function loadFontAtlas(path) {
		const promise = new Promise((resolve, reject) => {
			const loader = new THREE.TextureLoader();
			loader.load(path, resolve);
		});

		return promise;
	}

	console.log(seriouslyCuriouslyRef.current);

	return (
		<Float>
			<mesh ref={seriouslyCuriouslyRef}>
				<checkerboardShaderMaterial
					ref={checkerboardShaderMaterialRef}
					side={THREE.DoubleSide}
					lightPos={lightPos}
					// abstractTexture={abstractTexture}
				/>
			</mesh>
		</Float>
	);
}
